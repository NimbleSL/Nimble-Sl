'use client';

import { useState, useRef, ChangeEvent, FormEvent, DragEvent } from 'react';
import {
  Briefcase,
  MapPin,
  Clock,
  Upload,
  CheckCircle,
  AlertTriangle,
  Send,
  Building,
  Award,
  Sparkles,
  Laptop,
  ArrowRight,
  FileText,
  X,
  Search,
  Mail,
} from 'lucide-react';

interface TypicalRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  typicalRequirements: string[];
}

const TYPICAL_ROLES: TypicalRole[] = [
  {
    id: 'sse',
    title: 'Senior Software Engineer (Full-Stack)',
    department: 'Engineering',
    location: 'Dhaka, Gulshan-2 (Hybrid)',
    type: 'Full-Time speculative',
    experience: '4+ Years',
    description: 'We typically review profiles for engineers capable of leading the architecture of scalable enterprise SaaS platforms, optimizing database layers, and designing secure interfaces.',
    typicalRequirements: [
      'Strong expertise in Next.js, React, Node.js, and TypeScript.',
      'Proficiency in Go or Python (FastAPI/Django) for microservices.',
      'Experience with PostgreSQL, Redis, Docker, and AWS deployments.',
    ],
  },
  {
    id: 'aiml',
    title: 'AI / Machine Learning Engineer',
    department: 'Engineering',
    location: 'Dhaka, Gulshan-2 (Hybrid)',
    type: 'Full-Time speculative',
    experience: '2+ Years',
    description: 'We frequently look for developers experienced in designing agentic AI workflows, LLM integrations, retrieval systems (RAG), and custom OCR parser tools.',
    typicalRequirements: [
      'Proven experience building LLM-backed applications with LangChain or LlamaIndex.',
      'Command of Python, vector databases (Pinecone/PGVector), and AI APIs.',
      'Familiarity with quantizations, fine-tuning, and prompt engineering.',
    ],
  },
  {
    id: 'design',
    title: 'Senior UI/UX Product Designer',
    department: 'Design',
    location: 'Dhaka, Gulshan-2 (Hybrid)',
    type: 'Full-Time speculative',
    experience: '3.5+ Years',
    description: 'We seek designers who can build responsive component libraries, conduct thorough user research, and structure design systems that map to development structures.',
    typicalRequirements: [
      'Deep expertise in Figma, interactive prototyping, and design tokens.',
      'Solid portfolio demonstrating UX solutions for complex B2B SaaS or mobile applications.',
      'Understanding of HTML/CSS limits and responsive layout breakpoints.',
    ],
  },
  {
    id: 'pm',
    title: 'Technical Product Manager',
    department: 'Product Management',
    location: 'Dhaka, Gulshan-2 (Hybrid)',
    type: 'Full-Time speculative',
    experience: '3+ Years',
    description: 'We speculative-hire PMs to translate client enterprise specifications into step-by-step developer backlogs and manage sprint milestones.',
    typicalRequirements: [
      'Background in software engineering or technical systems design.',
      'Proficiency with Jira, ClickUp, and managing sprint metrics.',
      'Excellent verbal and written communication skills for international client interaction.',
    ],
  },
  {
    id: 'qa',
    title: 'QA / Test Automation Engineer',
    department: 'Quality Assurance',
    location: 'Dhaka, Gulshan-2 (Hybrid)',
    type: 'Full-Time speculative',
    experience: '2+ Years',
    description: 'We review testers to write end-to-end automation pipelines, perform load tests, and configure verification gates.',
    typicalRequirements: [
      'Experience with Playwright, Selenium, or Cypress automation tools.',
      'Knowledge of JavaScript/TypeScript or Python for authoring test scripts.',
      'Familiarity with CI/CD runners (GitHub Actions, GitLab CI).',
    ],
  },
];

const CULTURE_BENEFITS = [
  {
    icon: Laptop,
    title: 'Hybrid Workspace',
    desc: 'Flexible hybrid schedules with high-performance desktop hardware in office.',
  },
  {
    icon: Award,
    title: 'Professional Growth',
    desc: 'Annual learning allowances, certifications, and active mentoring programs.',
  },
  {
    icon: Sparkles,
    title: 'Premium Location',
    desc: 'Modern collaborative workspace in Gulshan-2, Dhaka with premium amenities.',
  },
  {
    icon: Building,
    title: 'Enterprise Projects',
    desc: 'Work on actual high-intent products shipped to clients in US, UK, and UAE.',
  },
];

const DEPARTMENTS = ['All', 'Engineering', 'Design', 'Product Management', 'Quality Assurance'];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState('All');
  const [selectedRole, setSelectedRole] = useState('speculative-engineering');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    coverLetter: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);

  const filteredRoles = TYPICAL_ROLES.filter(
    (role) => activeDept === 'All' || role.department === activeDept
  );

  function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type !== 'application/pdf') {
        alert('We only accept PDF resumes.');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert('File size exceeds the 10MB limit.');
        return;
      }
      setResumeFile(file);
    }
  }

  function handleDrag(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type !== 'application/pdf') {
        alert('We only accept PDF resumes.');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert('File size exceeds the 10MB limit.');
        return;
      }
      setResumeFile(file);
    }
  }

  function removeFile() {
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  function triggerApply(roleTitle: string) {
    // Map selecting role to the closest speculative track in form selector
    if (roleTitle.includes('Software') || roleTitle.includes('Machine')) {
      setSelectedRole('speculative-engineering');
    } else if (roleTitle.includes('Designer')) {
      setSelectedRole('speculative-design');
    } else if (roleTitle.includes('Product')) {
      setSelectedRole('speculative-product');
    } else {
      setSelectedRole('speculative-qa');
    }
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!resumeFile) {
      alert('Please upload your resume (PDF).');
      return;
    }

    setSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('portfolio', formData.portfolio);
      submitData.append('role', selectedRole);
      submitData.append('coverLetter', formData.coverLetter);
      submitData.append('resume', resumeFile);

      const res = await fetch('/api/careers', {
        method: 'POST',
        body: submitData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit application.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        portfolio: '',
        coverLetter: '',
      });
      setResumeFile(null);
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-16" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="mesh-bg" style={{ opacity: 0.25 }} />
        <div className="container relative text-center">
          <span className="eyebrow mb-5 inline-flex">
            <span className="ev-dot" /> Join the team
          </span>
          <h1
            className="mb-6 text-4xl font-bold tracking-tight font-display sm:text-5xl lg:text-6xl"
            style={{ color: 'var(--text)' }}
          >
            Shape the Future of <span className="grad-blue">Enterprise Tech</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-2)' }}>
            We are always looking for exceptional engineers, designers, and project builders to join our Dhaka office.
            Review our typical tracks below and submit a speculative application.
          </p>
        </div>
      </section>

      {/* ── Culture Section ───────────────────────────────────────────── */}
      <section className="py-20" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold font-display mb-4" style={{ color: 'var(--text)' }}>
              Why Engineers Thrive at NimbleSL
            </h2>
            <p className="mx-auto max-w-xl text-sm sm:text-base" style={{ color: 'var(--text-2)' }}>
              We build actual products — no cheap freelancing, no low-quality codebases. We focus on state-of-the-art architectures.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CULTURE_BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="card p-6" style={{ height: '100%' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 8,
                      background: 'rgba(59, 130, 246, 0.1)',
                      display: 'grid',
                      placeItems: 'center',
                      color: 'var(--blue-2)',
                      marginBottom: 16,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text)' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-2)', lineHeight: 1.6 }}>
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Open Positions (Tabs & Speculative State) ───────────────── */}
      <section className="py-20" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="tag mb-3">CURRENT STATUS</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display" style={{ color: 'var(--text)' }}>
              Available Openings
            </h2>
            <p className="text-sm sm:text-base mt-2" style={{ color: 'var(--text-2)' }}>
              We are currently scaling our speculative candidate pipeline for Q3/Q4 cycles.
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide justify-start md:justify-center">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  activeDept === dept ? 'btn btn-primary' : 'btn btn-ghost'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Speculative Info Notice (2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              
              {/* No active openings card */}
              <div
                className="card p-6 sm:p-8 flex flex-col gap-4 border-dashed"
                style={{ borderColor: 'rgba(59, 130, 246, 0.25)', background: 'rgba(10, 14, 26, 0.2)' }}
              >
                <div className="flex items-center gap-3">
                  <Briefcase size={22} style={{ color: 'var(--blue-2)' }} />
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>
                    No Active Job Openings Found
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  We do not have active roles listed under the <strong style={{ color: 'var(--blue-2)' }}>{activeDept}</strong> category right now.
                  However, we review speculator portfolios weekly. If you have solid code standards, we welcome speculative applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <button
                    onClick={() => {
                      setSelectedRole(
                        activeDept === 'Design' ? 'speculative-design' :
                        activeDept === 'Product Management' ? 'speculative-product' :
                        activeDept === 'Quality Assurance' ? 'speculative-qa' :
                        'speculative-engineering'
                      );
                      formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn btn-primary flex items-center justify-center gap-2"
                  >
                    Apply Speculatively <ArrowRight size={14} />
                  </button>
                  <a
                    href="mailto:info@nimblesl.com"
                    className="btn btn-ghost flex items-center justify-center gap-2"
                  >
                    <Mail size={14} /> Send Resume via Mail
                  </a>
                </div>
              </div>

              {/* Typically Hired Tracks */}
              {filteredRoles.map((job) => (
                <div key={job.id} className="card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-border">
                    <div>
                      <h4 className="text-base font-bold" style={{ color: 'var(--text)' }}>
                        {job.title}
                      </h4>
                      <div className="flex flex-wrap gap-3 mt-1.5 text-xs" style={{ color: 'var(--text-3)' }}>
                        <span>{job.department}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span className="text-blue-400 font-semibold">{job.experience} Typical Exp</span>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => triggerApply(job.title)}
                        className="btn btn-ghost py-1.5 px-3.5 text-xs flex items-center gap-1.5"
                      >
                        Apply speculatively <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                    {job.description}
                  </p>
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-3)' }}>
                      What We Typically Look For:
                    </h5>
                    <ul className="grid gap-1.5 sm:grid-cols-2 list-none p-0 m-0">
                      {job.typicalRequirements.map((req, idx) => (
                        <li key={idx} className="text-xs flex items-start gap-2" style={{ color: 'var(--text-2)' }}>
                          <span style={{ color: 'var(--blue-2)' }}>•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

            </div>

            {/* Sidebar Guidelines */}
            <div className="flex flex-col gap-6">
              <div className="card p-6 flex flex-col gap-5">
                <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text)' }}>
                  How We Hire
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <h4 className="text-xs font-bold" style={{ color: 'var(--text)' }}>Submit Application</h4>
                      <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-2)' }}>Send CV (PDF) and portfolio links using the form below or via email.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <h4 className="text-xs font-bold" style={{ color: 'var(--text)' }}>Technical Review</h4>
                      <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-2)' }}>Our tech leads review code hygiene, repositories, and past architectures.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <h4 className="text-xs font-bold" style={{ color: 'var(--text)' }}>Paid Pilot Sprint</h4>
                      <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-2)' }}>Before full contracts, we test with a paid 1-week real development sprint.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--text)' }}>General Inquiries</h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                  If you are a contractor, software agency, or have speculation questions, contact us:
                </p>
                <a href="mailto:info@nimblesl.com" className="text-xs font-semibold hover:underline flex items-center gap-1.5" style={{ color: 'var(--blue-2)' }}>
                  <Mail size={13} /> info@nimblesl.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Application Form Section ─────────────────────────────────── */}
      <section ref={formSectionRef} className="py-20 scroll-margin-top-100">
        <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
          <div className="card p-6 sm:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold font-display" style={{ color: 'var(--text)' }}>
                General Speculative Application
              </h2>
              <p className="text-sm mt-2" style={{ color: 'var(--text-2)' }}>
                Fill out the secure application form below. Our team reviews speculator files weekly.
              </p>
            </div>

            {status === 'success' ? (
              <div className="text-center py-8">
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.1)',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--emerald-2)',
                    margin: '0 auto 20px',
                  }}
                >
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                  Application Received!
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-2)', maxWidth: 440, margin: '0 auto 24px' }}>
                  Thank you for submitting your speculative application. We will contact you if an aligned opening becomes available.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn btn-ghost"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Alex Morgan"
                      className="rounded-lg px-4 py-2.5 text-sm outline-none border border-border"
                      style={{ background: 'var(--surface-2)', color: 'var(--text)' }}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@example.com"
                      className="rounded-lg px-4 py-2.5 text-sm outline-none border border-border"
                      style={{ background: 'var(--surface-2)', color: 'var(--text)' }}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+880 17XX XXXXXX"
                      className="rounded-lg px-4 py-2.5 text-sm outline-none border border-border"
                      style={{ background: 'var(--surface-2)', color: 'var(--text)' }}
                    />
                  </div>

                  {/* Portfolio */}
                  <div className="flex flex-col gap-2">
                    <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Portfolio / Github / LinkedIn</label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      placeholder="https://github.com/yourprofile"
                      className="rounded-lg px-4 py-2.5 text-sm outline-none border border-border"
                      style={{ background: 'var(--surface-2)', color: 'var(--text)' }}
                    />
                  </div>
                </div>

                {/* Role select */}
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Applying Pipeline Track *</label>
                  <select
                    name="role"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="rounded-lg px-4 py-2.5 text-sm outline-none border border-border"
                    style={{ background: 'var(--surface-2)', color: 'var(--text)' }}
                  >
                    <option value="speculative-engineering" style={{ background: 'var(--surface)' }}>General Application (Engineering Track)</option>
                    <option value="speculative-design" style={{ background: 'var(--surface)' }}>General Application (Design Track)</option>
                    <option value="speculative-product" style={{ background: 'var(--surface)' }}>General Application (Product Track)</option>
                    <option value="speculative-qa" style={{ background: 'var(--surface)' }}>General Application (QA Automation Track)</option>
                  </select>
                </div>

                {/* Cover letter */}
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Cover Letter / Specs Summary *</label>
                  <textarea
                    name="coverLetter"
                    required
                    rows={4}
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Tell us about your technical background, the complex architectures you built recently, and your framework interests..."
                    className="rounded-lg px-4 py-3 text-sm outline-none border border-border resize-none"
                    style={{ background: 'var(--surface-2)', color: 'var(--text)', lineHeight: 1.6 }}
                  />
                </div>

                {/* Resume Upload */}
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Attach Resume (PDF, Max 10MB) *</label>
                  
                  {resumeFile ? (
                    <div
                      className="rounded-lg p-4 flex items-center justify-between border"
                      style={{
                        background: 'rgba(59, 130, 246, 0.05)',
                        borderColor: 'rgba(59, 130, 246, 0.2)',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <FileText size={24} style={{ color: 'var(--blue-2)' }} />
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
                            {resumeFile.name}
                          </div>
                          <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>
                            {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10"
                        style={{ color: 'var(--text-3)', border: 'none', background: 'transparent', cursor: 'pointer' }}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      className={`rounded-lg border-2 border-dashed p-8 text-center cursor-pointer transition-all ${
                        dragActive ? 'bg-white/10 border-blue-500/50 scale-[0.99]' : 'hover:bg-white/5'
                      }`}
                      style={{
                        borderColor: dragActive ? 'var(--blue-2)' : 'var(--border-2)',
                        background: dragActive ? 'rgba(59, 130, 246, 0.05)' : 'var(--surface-2)',
                      }}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                      />
                      <Upload
                        size={32}
                        className={`transition-transform duration-200 ${dragActive ? 'scale-110' : ''}`}
                        style={{ color: dragActive ? 'var(--blue-2)' : 'var(--text-3)', margin: '0 auto 12px' }}
                      />
                      <div style={{ fontSize: 14, fontWeight: 600, color: dragActive ? 'var(--blue-2)' : 'var(--text)' }}>
                        {dragActive ? 'Drop your resume here' : 'Click or drag resume here'}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 4 }}>
                        PDF format only (Max 10MB)
                      </div>
                    </div>
                  )}
                </div>

                {status === 'error' && (
                  <div
                    className="rounded-lg p-4 flex items-start gap-3 border"
                    style={{
                      background: 'rgba(244, 63, 94, 0.05)',
                      borderColor: 'rgba(244, 63, 94, 0.2)',
                      color: 'var(--rose-2)',
                      fontSize: 13,
                    }}
                  >
                    <AlertTriangle size={18} style={{ flexShrink: 0, marginTop: 1 }} />
                    <div>{errorMessage}</div>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary mt-3 flex items-center justify-center gap-2"
                  style={{ width: '100%', paddingTop: 12, paddingBottom: 12 }}
                >
                  {submitting ? 'Submitting Application...' : 'Submit Speculative Application'}
                  <Send size={14} />
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 text-center border-t border-border" style={{ fontSize: 12, color: 'var(--text-3)' }}>
              Alternatively, you can email your resume and cover letter directly to{' '}
              <a href="mailto:info@nimblesl.com" className="hover:underline" style={{ color: 'var(--blue-2)' }}>
                info@nimblesl.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
