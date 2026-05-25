'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Cookie } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage for consent
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('nimblesl-cookie-consent');
      if (consent) {
        return; // Already given consent
      }

      // Show banner after 2 second delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('nimblesl-cookie-consent', JSON.stringify({
        all: true,
        date: new Date().toISOString(),
      }));
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('nimblesl-cookie-consent', JSON.stringify({
        all: false,
        date: new Date().toISOString(),
      }));
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-45 max-w-2xl w-full px-4"
        >
          <div className="glass rounded-xl p-4 shadow-2xl">
            <div className="flex items-start gap-3">
              {/* Cookie Icon */}
              <div className="flex-shrink-0">
                <Cookie className="w-6 h-6 text-amber-400" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-text-2 mb-3">
                  We use cookies to improve your experience and analyze site traffic. See our{' '}
                  <Link
                    href="/privacy"
                    className="text-blue-500 hover:text-blue-400 underline transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleAccept}
                    className="btn btn-primary text-xs px-4 py-2"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleDecline}
                    className="btn btn-ghost text-xs px-4 py-2"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
