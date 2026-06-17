'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Download and open scrcpy GUI',
    desc: 'Download the installer for your platform and open it. On first launch the app checks for ADB and scrcpy automatically.',
  },
  {
    title: 'Let the app install ADB and scrcpy',
    desc: 'If ADB or scrcpy are not detected, the Setup panel opens. Click Auto Install — the app downloads the official binaries, extracts them to the standard system locations, and adds them to your PATH. No terminal required.',
    code: '~/Library/Android/sdk/platform-tools/adb',
  },
  {
    title: 'Plug in your phone and tap Allow',
    desc: 'Connect your Android phone via USB with USB debugging enabled. Tap Allow USB debugging on the dialog that appears on your phone. The app detects it instantly.',
  },
  {
    title: 'Hit Launch',
    desc: 'Pick a preset or configure your settings, then click Launch scrcpy. Your phone screen appears in a window on your desktop.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#10101e]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#8b82f0] mb-3">Setup</p>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight leading-tight mb-4">
          Up and running in minutes
        </h2>
        <p className="text-[16px] text-[#8888b8] max-w-[480px] leading-relaxed">
          No technical knowledge required. The app walks you through every step.
        </p>

        <div className="mt-14 flex flex-col divide-y divide-[#1f1f38]">
          {steps.map(({ title, desc, code }, i) => (
            <motion.div 
              key={title} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
              className="flex gap-7 py-10 first:pt-0 last:pb-0"
            >
              <div className="w-10 h-10 rounded-xl flex-shrink-0 bg-gradient-to-br from-[#6c5ce7] to-[#8b7cf8] flex items-center justify-center text-white font-extrabold text-[16px]">
                {i + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-[17px] font-bold mb-1.5">{title}</h3>
                <p className="text-[14px] text-[#8888b8] leading-relaxed">{desc}</p>
                {code && (
                  <code className="mt-3 block bg-[#0b0b14] border border-[#1f1f38] rounded-md px-3 py-2 font-mono text-[12px] text-[#00cba9]">
                    {code}
                  </code>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
