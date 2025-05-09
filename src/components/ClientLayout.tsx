"use client";
import { SunIcon, HomeIcon, LinkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>{children}</>; // Only render toggle after mount

  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {children}
      </main>
      <div className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50">
        <nav className="flex justify-center items-center gap-6 px-4 py-2 rounded-full shadow-lg" style={{ background: '#232623', borderRadius: '9999px', minHeight: 48 }}>
          <Link href="/" className="flex items-center justify-center text-gray-200 hover:text-blue-400 transition">
            <HomeIcon className="h-5 w-5" />
          </Link>
          <a href="https://t.me/tyuiqak" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-200 hover:text-blue-400 transition">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </a>
          <a href="https://github.com/bluemadisonblue" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-200 hover:text-blue-400 transition">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://uk.linkedin.com/in/enes-talip-chelik-7b27bb242" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-200 hover:text-blue-400 transition">
            <LinkIcon className="h-5 w-5" />
          </a>
          {/* Theme Toggle Button */}
          <button
            aria-label="Toggle Dark Mode"
            className="flex items-center justify-center text-gray-200 focus:outline-none hover:text-blue-400 transition"
            onClick={() => alert('Who uses light theme?)')}
            type="button"
          >
            <SunIcon className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </>
  );
} 