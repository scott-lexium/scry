'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function AppMockup() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  })

  // 3D perspective trapezium effect
  const rotateX = useTransform(scrollYProgress, [0, 1], [35, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1])

  return (
    <div ref={containerRef} className="w-full max-w-3xl mx-auto mt-14 [perspective:1200px]">
      <motion.div 
        style={{ rotateX, scale, opacity, transformOrigin: 'top center' }}
        className="rounded-2xl overflow-hidden border border-[#1f1f38] bg-[#10101e] shadow-[0_40px_120px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]"
      >
        {/* Titlebar */}
        <div className="h-10 bg-[#16162a] border-b border-[#1f1f38] flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="flex-1 text-center text-[12px] text-[#8888b8] font-medium pr-[52px]">
            Scry
          </span>
        </div>

        {/* Body */}
        <div className="flex h-[380px]">
          {/* Sidebar */}
          <div className="w-[170px] border-r border-[#1f1f38] bg-[#10101e] py-3 flex-shrink-0">
            <p className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#44446a] px-4 pb-1.5 pt-3">
              Connection
            </p>
            {[
              { label: 'Device', active: true },
            ].map(({ label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2.5 px-3 mx-2 py-2 rounded-md text-[12px] ${
                  active ? 'bg-[rgba(108,92,231,0.15)] text-[#8b82f0]' : 'text-[#8888b8]'
                }`}
              >
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${active ? 'bg-[#6c5ce7]' : 'bg-[#44446a]'}`} />
                {label}
              </div>
            ))}
            <p className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#44446a] px-4 pb-1.5 pt-4">
              Settings
            </p>
            {['Video', 'Audio', 'Input'].map(label => (
              <div key={label} className="flex items-center gap-2.5 px-3 mx-2 py-2 text-[12px] text-[#8888b8]">
                <div className="w-2 h-2 rounded-full bg-[#44446a] flex-shrink-0" />
                {label}
              </div>
            ))}
            <p className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#44446a] px-4 pb-1.5 pt-4">
              Tools
            </p>
            {['APK & Apps', 'Terminal'].map(label => (
              <div key={label} className="flex items-center gap-2.5 px-3 mx-2 py-2 text-[12px] text-[#8888b8]">
                <div className="w-2 h-2 rounded-full bg-[#44446a] flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 bg-[#0b0b14] p-4 flex flex-col gap-3 overflow-hidden">
            {/* Device bar */}
            <div className="flex items-center gap-2.5 bg-[#16162a] border border-[#1f1f38] rounded-lg px-3 py-2">
              <div className="w-2 h-2 rounded-full bg-[#00cba9] shadow-[0_0_6px_#00cba9]" />
              <span className="text-[11px] text-[#8888b8] flex-1">Pixel 8 Pro (RF8N327H8YJ)</span>
              <span className="text-[10px] font-semibold bg-[rgba(0,203,169,0.12)] text-[#00cba9] px-2 py-0.5 rounded-full">
                Ready
              </span>
            </div>

            {/* Info chips */}
            <div className="flex gap-2 flex-wrap">
              {['🔋 87%', 'Android 14', '1344×2992', 'WiFi 192.168.1.4'].map(chip => (
                <div
                  key={chip}
                  className="bg-[#16162a] border border-[#1f1f38] rounded-md px-2.5 py-1.5 text-[11px] text-[#8888b8]"
                >
                  {chip}
                </div>
              ))}
            </div>

            {/* Presets */}
            <p className="text-[9px] font-bold tracking-[0.08em] uppercase text-[#44446a]">Presets</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Low Latency',  desc: '720p · 60fps · 4Mbps',   active: true },
                { name: 'High Quality', desc: '1080p · 60fps · 20Mbps', active: false },
                { name: 'Screencast',   desc: '1080p · view-only',      active: false },
                { name: 'Gaming',       desc: 'Max res · stay awake',   active: false },
              ].map(({ name, desc, active }) => (
                <div
                  key={name}
                  className={`rounded-lg p-2.5 text-[11px] border ${
                    active
                      ? 'border-[#6c5ce7] bg-[rgba(108,92,231,0.12)]'
                      : 'border-[#1f1f38] bg-[#16162a]'
                  }`}
                >
                  <p className="font-semibold text-[#ededf5]">{name}</p>
                  <p className="text-[#44446a] text-[10px]">{desc}</p>
                </div>
              ))}
            </div>

            {/* Launch button */}
            <div className="mt-auto bg-gradient-to-r from-[#6c5ce7] to-[#8b7cf8] rounded-lg py-2.5 text-center text-[13px] font-bold text-white">
              Launch scrcpy
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
