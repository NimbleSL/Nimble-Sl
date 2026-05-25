'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Bot, X, Send, Sparkles, TrendingUp, Briefcase, Phone, BookOpen, Minus, Mail, CheckCircle } from 'lucide-react';

// Render markdown links [text](url) in bot messages
function renderContent(text: string) {
  const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      // plain text before link
      parts.push(...renderNewlines(text.slice(lastIndex, match.index), key++));
    }
    const [, label, href] = match;
    const isExternal = href.startsWith('http');
    if (isExternal) {
      parts.push(
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer"
          style={{ color: '#60A5FA', textDecoration: 'underline', textUnderlineOffset: 2 }}>
          {label}
        </a>
      );
    } else {
      parts.push(
        <Link key={key++} href={href}
          style={{ color: '#60A5FA', textDecoration: 'underline', textUnderlineOffset: 2 }}>
          {label}
        </Link>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(...renderNewlines(text.slice(lastIndex), key++));
  }

  return parts.length ? parts : text;
}

function renderNewlines(text: string, startKey: number): React.ReactNode[] {
  return text.split('\n').flatMap((line, i) =>
    i === 0 ? [line] : [<br key={`br-${startKey}-${i}`} />, line]
  );
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const QUICK_CHIPS = [
  { icon: TrendingUp, label: 'What services do you offer?', color: '#3B82F6' },
  { icon: Briefcase, label: 'How much does a project cost?', color: '#06B6D4' },
  { icon: Phone, label: 'How do I get started?', color: '#10B981' },
  { icon: BookOpen, label: 'Who runs NimbleSL?', color: '#A855F7' },
];

export function NimbleBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);

  // Lead capture state
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadDone, setLeadDone] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Listen for open event dispatched from other components (e.g. FinalCTA)
  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('open-nimblebot', handler);
    return () => window.removeEventListener('open-nimblebot', handler);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, leadDone]);

  const sendMessage = async (content: string) => {
    const trimmed = content.trim();
    if (!trimmed || isStreaming) return;

    const userMsg: Message = { role: 'user', content: trimmed };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput('');
    setIsStreaming(true);

    // Add empty assistant bubble — will be filled by stream
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok || !res.body) throw new Error('Chat API error');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (data === '[DONE]') continue;
          try {
            const json = JSON.parse(data);
            const delta = json.choices?.[0]?.delta?.content;
            if (delta) {
              setMessages((prev) => {
                const updated = [...prev];
                const last = updated[updated.length - 1];
                updated[updated.length - 1] = { ...last, content: last.content + delta };
                return updated;
              });
            }
          } catch {
            // skip malformed chunks
          }
        }
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          content: "Sorry, I'm having trouble right now. Please email us at sales@nimblesl.com.",
        };
        return updated;
      });
    } finally {
      setIsStreaming(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName.trim() || !leadEmail.trim()) return;
    setLeadSubmitting(true);
    try {
      await fetch('/api/estimate/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadName.trim(),
          email: leadEmail.trim(),
          projectSummary: 'Lead from NimbleBot chat',
        }),
      });
    } catch {
      // fire-and-forget
    } finally {
      setLeadSubmitting(false);
      setLeadDone(true);
      setLeadCaptured(true);
    }
  };

  // Show lead capture after first full assistant response
  const showLeadCapture = !leadCaptured && messages.length >= 2 && !isStreaming && messages[messages.length - 1]?.role === 'assistant' && messages[messages.length - 1]?.content.length > 0;

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 1.5 }}
        className="nimble-bot-fab fixed bottom-6 right-4 md:right-6 z-50"
      >
        <div className="relative">
          {/* Pulse ring — only when closed */}
          {!isOpen && (
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}
            />
          )}

          {/* Main button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-14 h-14 rounded-full text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}
            aria-label={isOpen ? 'Minimize NimbleBot' : 'Open NimbleBot'}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="minus" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Minus className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Bot className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Online badge — always shown when closed */}
          {!isOpen && (
            <div
              className="absolute -top-1 -right-1 flex items-center justify-center rounded-full border-2"
              style={{ width: 18, height: 18, background: '#10B981', borderColor: 'var(--bg)' }}
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: 6, height: 6, borderRadius: '50%', background: 'white' }}
              />
            </div>
          )}
        </div>
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            className="nimble-bot-panel fixed bottom-24 right-4 md:right-6 z-50"
            style={{ width: 'min(340px, calc(100vw - 32px))', maxHeight: 560 }}
          >
            <div className="glass rounded-2xl shadow-2xl overflow-hidden flex flex-col" style={{ maxHeight: 560 }}>
              {/* Header */}
              <div className="px-4 py-3 flex items-center justify-between flex-shrink-0" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}>
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>NimbleBot</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                      <p className="text-xs" style={{ color: 'var(--text-3)' }}>Online · Powered by Nimble AI</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {/* Clear chat */}
                  {messages.length > 0 && (
                    <button
                      onClick={() => { setMessages([]); setLeadCaptured(false); setLeadDone(false); setLeadName(''); setLeadEmail(''); }}
                      className="text-xs px-2 py-1 rounded-lg hover:bg-white/5 transition-colors"
                      style={{ color: 'var(--text-3)' }}
                    >
                      Clear
                    </button>
                  )}
                  {/* Minimize — does NOT dismiss */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-7 h-7 rounded-full hover:bg-white/5 flex items-center justify-center transition-colors"
                    aria-label="Minimize NimbleBot"
                  >
                    <Minus className="w-3.5 h-3.5" style={{ color: 'var(--text-3)' }} />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4" style={{ scrollbarWidth: 'thin' }}>
                {messages.length === 0 ? (
                  /* Welcome screen */
                  <div>
                    <div className="rounded-xl p-4 mb-4" style={{ background: 'var(--surface-2)' }}>
                      <p className="text-sm mb-1" style={{ color: 'var(--text)' }}>
                        Hi! I&apos;m <span className="font-semibold grad-blue">NimbleBot</span> 👋
                      </p>
                      <p className="text-sm" style={{ color: 'var(--text-2)' }}>
                        Ask me anything about NimbleSL — services, pricing, or how to get started.
                      </p>
                    </div>

                    <p className="text-xs mb-3" style={{ color: 'var(--text-3)' }}>Quick questions:</p>
                    <div className="flex flex-col gap-2">
                      {QUICK_CHIPS.map(({ icon: Icon, label, color }) => (
                        <button
                          key={label}
                          onClick={() => sendMessage(label)}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left text-sm transition-all hover:scale-[1.01]"
                          style={{
                            background: 'var(--surface-2)',
                            border: '1px solid var(--border)',
                            color: 'var(--text-2)',
                          }}
                        >
                          <Icon size={15} style={{ color, flexShrink: 0 }} />
                          <span>{label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Chat bubbles */
                  <div className="flex flex-col gap-3">
                    {messages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.role === 'assistant' && (
                          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5" style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}>
                            <Sparkles size={10} className="text-white" />
                          </div>
                        )}
                        <div
                          className="max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed"
                          style={
                            msg.role === 'user'
                              ? { background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', color: 'white', borderBottomRightRadius: 4 }
                              : { background: 'var(--surface-2)', color: 'var(--text)', borderBottomLeftRadius: 4 }
                          }
                        >
                          {msg.content ? (
                            msg.role === 'assistant' ? renderContent(msg.content) : msg.content
                          ) : (
                            isStreaming && i === messages.length - 1 ? (
                              <span className="flex gap-1 items-center py-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: '0ms' }} />
                                <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: '150ms' }} />
                                <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: '300ms' }} />
                              </span>
                            ) : null
                          )}
                        </div>
                      </div>
                    ))}

                    {/* Lead capture card — appears after first exchange */}
                    {showLeadCapture && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl p-3.5 mt-1"
                        style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' }}
                      >
                        <div className="flex items-center gap-1.5 mb-2">
                          <Mail size={13} style={{ color: '#60A5FA' }} />
                          <span className="text-xs font-semibold" style={{ color: '#60A5FA' }}>Get a custom quote</span>
                        </div>
                        <p className="text-xs mb-3" style={{ color: 'var(--text-2)' }}>
                          Leave your details and our team will reach out with a tailored proposal.
                        </p>
                        <form onSubmit={handleLeadSubmit} className="flex flex-col gap-2">
                          <input
                            type="text"
                            placeholder="Your name"
                            value={leadName}
                            onChange={(e) => setLeadName(e.target.value)}
                            className="px-3 py-1.5 rounded-lg text-xs focus:outline-none"
                            style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                            required
                          />
                          <input
                            type="email"
                            placeholder="Work email"
                            value={leadEmail}
                            onChange={(e) => setLeadEmail(e.target.value)}
                            className="px-3 py-1.5 rounded-lg text-xs focus:outline-none"
                            style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                            required
                          />
                          <button
                            type="submit"
                            disabled={leadSubmitting || !leadName.trim() || !leadEmail.trim()}
                            className="py-1.5 rounded-lg text-xs font-semibold transition-opacity disabled:opacity-50"
                            style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', color: 'white' }}
                          >
                            {leadSubmitting ? 'Sending…' : 'Send →'}
                          </button>
                        </form>
                      </motion.div>
                    )}

                    {/* Lead done confirmation */}
                    {leadDone && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs"
                        style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#34D399' }}
                      >
                        <CheckCircle size={14} />
                        Thanks! Our team will reach out within 24 hours.
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-3 flex-shrink-0" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    disabled={isStreaming}
                    className="flex-1 px-3 py-2 rounded-xl text-sm focus:outline-none transition-colors"
                    style={{
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                    }}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isStreaming}
                    className="w-9 h-9 rounded-xl flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:shadow-md"
                    style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}
                    aria-label="Send"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
