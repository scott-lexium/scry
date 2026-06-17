'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Auto-install ADB & scrcpy',
    desc: 'No setup required. The app downloads and installs ADB and scrcpy to standard system locations automatically on first launch.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    title: 'One-click WiFi switch',
    desc: 'Plug in once via USB, click Switch to WiFi, and go fully wireless. The app handles the ADB TCP/IP handoff automatically.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
      </svg>
    ),
    title: 'Presets & profiles',
    desc: 'Built-in presets for Low Latency, High Quality, Screencast, and Gaming. Save and restore custom profiles in one click.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M6 12h4m-2-2v4"/><path d="M21 16.5A2.5 2.5 0 0118.5 19h-13A2.5 2.5 0 013 16.5V9a2.5 2.5 0 012.5-2.5h13A2.5 2.5 0 0121 9v7.5z"/><circle cx="17" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="13" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    title: 'Quick device controls',
    desc: 'Home, Back, Recents, Volume, Screenshot, Lock — all one click while mirroring. No need to touch the phone at all.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    ),
    title: 'APK sideloader',
    desc: 'Drag and drop any APK onto the app window to install it on your device instantly. No Android Studio, no commands.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
    ),
    title: 'Terminal & Logcat',
    desc: 'Run ADB shell commands and stream device logs directly in the app. Filter by tag and level with colour-coded output.',
  },
]

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="features" className="py-24 relative bg-[#0b0b14]">
      {/* Intro Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12 md:mb-0 text-center md:text-left">
        <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#8b82f0] mb-3">Features</p>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight leading-tight mb-4">
          Everything you need,<br className="hidden md:block" /> nothing you don't
        </h2>
        <p className="text-[16px] text-[#8888b8] max-w-[480px] mx-auto md:mx-0 leading-relaxed md:hidden">
          A complete Android desktop companion. No terminal, no manual ADB setup, no fumbling with flags.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative flex flex-col md:flex-row items-start">
        
        {/* Left Side: Sticky Text Content */}
        <div className="hidden md:flex w-full md:w-[45%] md:sticky md:top-0 h-auto md:h-screen flex-col justify-center pr-10 z-10">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeIndex}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.3, ease: "easeOut" }}
             >
                <div className="w-14 h-14 bg-gradient-to-br from-[#6c5ce7] to-[#8b7cf8] rounded-2xl flex items-center justify-center text-white mb-8 shadow-[0_4px_24px_rgba(108,92,231,0.35)]">
                   <div className="scale-125">
                     {features[activeIndex].icon}
                   </div>
                </div>
                <h3 className="text-[clamp(28px,3vw,36px)] font-extrabold text-[#ededf5] mb-5 leading-tight tracking-[-0.02em]">
                  {features[activeIndex].title}
                </h3>
                <p className="text-[18px] text-[#8888b8] leading-relaxed max-w-[420px]">
                  {features[activeIndex].desc}
                </p>
             </motion.div>
           </AnimatePresence>
        </div>

        {/* Right Side: Scrollable Visuals */}
        <div className="w-full md:w-[55%] md:pt-[15vh] pb-[5vh] md:pb-[30vh]">
           {features.map((feature, i) => (
              <motion.div
                key={i}
                className="h-[60vh] md:h-[80vh] flex flex-col items-center justify-center relative mb-8 md:mb-0"
                viewport={{ margin: "-45% 0px -45% 0px" }}
                onViewportEnter={() => setActiveIndex(i)}
              >
                {/* Visual Block Container */}
                <div className={`w-full max-w-[480px] aspect-square rounded-[36px] border flex items-center justify-center relative overflow-hidden transition-all duration-700
                  ${activeIndex === i ? 'border-[#1f1f38] bg-[#16162a] shadow-[0_0_80px_rgba(108,92,231,0.1)] scale-100 opacity-100' : 'border-transparent bg-transparent scale-90 opacity-20'}
                `}>
                  {/* Glowing core */}
                  <div className={`absolute w-[200px] h-[200px] bg-[#6c5ce7] blur-[100px] rounded-full transition-opacity duration-700 ${activeIndex === i ? 'opacity-30' : 'opacity-0'}`} />
                  
                  {/* Huge Icon Presentation */}
                  <div className={`text-[#8b82f0] flex items-center justify-center bg-[rgba(108,92,231,0.05)] w-[160px] h-[160px] rounded-3xl border border-[rgba(108,92,231,0.15)] transition-transform duration-700 ease-out ${activeIndex === i ? 'scale-110 translate-y-0' : 'scale-50 translate-y-10'}`}>
                    <div className="scale-[3]">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                {/* Mobile text fallback */}
                <div className="md:hidden mt-8 text-center px-2">
                  <h3 className="text-[22px] font-bold text-[#ededf5] mb-2">{feature.title}</h3>
                  <p className="text-[15px] text-[#8888b8] leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
           ))}
        </div>

      </div>
    </section>
  )
}
