'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AppMockup from '@/components/AppMockup'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import SecuritySection from '@/components/SecuritySection'
import DownloadSection from '@/components/DownloadSection'
import AppleIcon from '@/components/icons/AppleIcon'
import WindowsIcon from '@/components/icons/WindowsIcon'
import LinuxIcon from '@/components/icons/LinuxIcon'

const RELEASES = 'https://github.com/scott-lexium/scrcpy/releases/latest'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 text-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(108,92,231,0.13),transparent)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(108,92,231,0.15)] border border-[rgba(108,92,231,0.35)] text-[#8b82f0] text-[12px] font-bold tracking-[0.04em] uppercase px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00cba9] animate-pulse-dot" />
              Free &amp; Open Source
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-[clamp(40px,7vw,72px)] font-extrabold tracking-[-0.03em] leading-[1.08] mb-5"
          >
            Mirror your Android{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#a598ff] to-[#6c5ce7] bg-clip-text text-transparent">
              without the terminal
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="text-[clamp(16px,2vw,20px)] text-[#8888b8] max-w-[540px] mx-auto mb-10 leading-relaxed"
          >
            A beautiful desktop app built on top of scrcpy. Connect, mirror, control, and manage
            your Android device in seconds — no commands required.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="flex items-center justify-center gap-3 flex-wrap mb-5"
          >
            <Link
              href={RELEASES}
              target="_blank"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6c5ce7] to-[#8b7cf8] text-white px-7 py-3.5 rounded-xl text-[15px] font-bold shadow-[0_8px_32px_rgba(108,92,231,0.4)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(108,92,231,0.5)] transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download free
            </Link>
            <Link
              href="https://github.com/scott-lexium/scrcpy"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#16162a] border border-[#1f1f38] text-[#ededf5] px-6 py-3.5 rounded-xl text-[15px] font-semibold hover:border-[#6c5ce7] hover:bg-[rgba(108,92,231,0.1)] transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View on GitHub
            </Link>
          </motion.div>

          <p className="text-[12px] text-[#44446a] tracking-wider">
            Available for{' '}
            <span className="text-[#8888b8]">macOS</span> ·{' '}
            <span className="text-[#8888b8]">Windows</span> ·{' '}
            <span className="text-[#8888b8]">Linux</span>{' '}
            — free forever
          </p>

          <AppMockup />
        </div>
      </section>

      {/* Stats */}
      <div className="border-y border-[#1f1f38] bg-[#10101e] py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1f1f38]">
          {[
            { value: '90+',      label: 'scrcpy flags exposed' },
            { value: '3',        label: 'Platforms supported', isPlatforms: true },
            { value: '$0',       label: 'Cost, forever' },
            { value: '0 clicks', label: 'Terminal commands needed' },
          ].map(({ value, label, isPlatforms }: any) => (
            <div key={label} className="text-center px-6 py-2">
              {isPlatforms ? (
                <div className="flex items-center justify-center gap-4 h-[45px]">
                  <AppleIcon className="w-7 h-7 text-[#ededf5] drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
                  <WindowsIcon className="w-6 h-6 text-[#00adef] drop-shadow-[0_0_8px_rgba(0,173,239,0.15)]" />
                  <LinuxIcon className="w-[26px] h-[26px] text-[#f5a623] drop-shadow-[0_0_8px_rgba(245,166,35,0.15)]" />
                </div>
              ) : (
                <p className="text-[30px] font-extrabold tracking-tight bg-gradient-to-r from-[#a598ff] to-[#6c5ce7] bg-clip-text text-transparent">
                  {value}
                </p>
              )}
              <p className="text-[13px] text-[#8888b8] mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <Features />
      <HowItWorks />
      <SecuritySection />
      <DownloadSection />
    </>
  )
}
