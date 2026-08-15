import { useState, useEffect } from 'react';
import { Link } from 'wouter';

const STORAGE_KEY = 'cookie-consent-dismissed';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#091405] text-white border-t border-white/10 shadow-lg"
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="flex-1 text-sm text-white/80 leading-relaxed">
          This site uses only essential browser storage needed for it to work — no tracking or advertising cookies.{' '}
          <Link href="/privacy" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
            Privacy Policy
          </Link>
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 px-5 py-2 rounded bg-primary text-white text-sm font-medium hover:bg-primary/90 active:bg-primary/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
