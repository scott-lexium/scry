'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function FeatureAutoInstall({ active }: { active: boolean }) {
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState('Waiting...')

  useEffect(() => {
    if (!active) {
      setProgress(0)
      setStatus('Waiting...')
      return
    }

    let p = 0
    setStatus('Downloading ADB & scrcpy binaries...')
    const interval = setInterval(() => {
      p += Math.random() * 15
      if (p > 100) {
        p = 100
        setStatus('Installation complete. Ready to connect.')
        clearInterval(interval)
      } else if (p > 80) {
        setStatus('Adding to system PATH...')
      } else if (p > 40) {
        setStatus('Extracting files to ~/.scry/bin...')
      }
      setProgress(p)
    }, 300)

    return () => clearInterval(interval)
  }, [active])

  return (
    <div className="w-full max-w-[320px] bg-[#0b0b14] border border-[#1f1f38] rounded-xl p-5 shadow-2xl flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[10px] font-bold text-[#44446a] tracking-widest uppercase">Setup Wizard</span>
      </div>
      
      <div className="w-12 h-12 rounded-lg bg-[rgba(108,92,231,0.15)] flex items-center justify-center text-[#8b82f0] mb-2 self-center">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>

      <p className="text-[#ededf5] text-[13px] font-semibold text-center mt-2">{status}</p>
      
      <div className="h-2 w-full bg-[#16162a] rounded-full overflow-hidden mt-1">
        <motion.div 
          className="h-full bg-[#00cba9] rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'linear', duration: 0.3 }}
        />
      </div>
      <p className="text-right text-[#44446a] text-[11px] font-mono">{Math.floor(progress)}%</p>
    </div>
  )
}

export function FeatureWifi({ active }: { active: boolean }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        {/* Device */}
        <div className="relative">
          <svg className="w-16 h-16 text-[#ededf5]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeLinejoin="round"/></svg>
          
          {/* Waves */}
          {active && (
            <>
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: [0, 0.5, 0], scale: [0.5, 2, 3] }} transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }} className="absolute inset-0 rounded-full border-2 border-[#00adef]" />
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: [0, 0.5, 0], scale: [0.5, 2, 3] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6, ease: "easeOut" }} className="absolute inset-0 rounded-full border-2 border-[#00adef]" />
            </>
          )}
        </div>

        {/* Toggle */}
        <div className={`w-20 h-10 rounded-full flex items-center p-1 cursor-pointer transition-colors duration-500 shadow-inner ${active ? 'bg-[#00adef]' : 'bg-[#1f1f38]'}`}>
          <motion.div 
            className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-[#10101e]"
            animate={{ x: active ? 40 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {active ? (
               <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : (
               <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="12" x2="16" y2="12"/></svg>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function FeaturePresets({ active }: { active: boolean }) {
  const presets = [
    { label: 'Low Latency', color: 'bg-[#00cba9]', target: 20 },
    { label: 'High Quality', color: 'bg-[#6c5ce7]', target: 85 },
    { label: 'Gaming', color: 'bg-[#ff5f57]', target: 60 }
  ]

  return (
    <div className="w-full max-w-[280px] flex flex-col gap-5">
      {presets.map((p, i) => (
        <div key={p.label} className="bg-[#0b0b14] border border-[#1f1f38] p-4 rounded-xl shadow-lg">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[12px] font-bold text-[#ededf5]">{p.label}</span>
            <span className="text-[10px] text-[#44446a] font-mono">{active ? p.target : 0} Mbps</span>
          </div>
          <div className="w-full h-1.5 bg-[#16162a] rounded-full overflow-hidden">
            <motion.div 
              className={`h-full rounded-full ${p.color}`}
              initial={{ width: 0 }}
              animate={{ width: active ? `${p.target}%` : '0%' }}
              transition={{ duration: 1, delay: i * 0.15, type: "spring" }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export function FeatureControls({ active }: { active: boolean }) {
  const buttons = ['Home', 'Back', 'Recents', 'Vol+', 'Vol-', 'Lock']
  
  return (
    <div className="relative w-full h-full flex items-center justify-center">
       <div className="w-[180px] h-[360px] border-[6px] border-[#1f1f38] rounded-[36px] bg-[#0b0b14] flex items-center justify-center shadow-2xl relative">
          <div className="absolute -right-4 top-20 bottom-20 flex flex-col justify-between py-4">
             {buttons.map((b, i) => (
                <motion.div 
                  key={b}
                  animate={active ? { scale: [1, 1.2, 1], x: [0, 5, 0] } : {}}
                  transition={{ duration: 0.4, delay: i * 0.4 + 1, repeat: Infinity, repeatDelay: 3 }}
                  className="bg-[#1f1f38] text-[8px] font-bold text-[#8888b8] px-2 py-1.5 rounded-r-md shadow-lg border border-l-0 border-[#1f1f38] whitespace-nowrap"
                >
                  {b}
                </motion.div>
             ))}
          </div>
          <span className="text-[#44446a] text-xs font-bold uppercase tracking-widest text-center">Device<br/>Screen</span>
       </div>
    </div>
  )
}

export function FeatureApk({ active }: { active: boolean }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-12">
      <div className={`w-full h-full border-2 border-dashed rounded-3xl flex items-center justify-center flex-col gap-4 transition-colors duration-500 relative overflow-hidden ${active ? 'border-[#00cba9] bg-[rgba(0,203,169,0.05)]' : 'border-[#44446a] bg-[rgba(68,68,106,0.05)]'}`}>
        
        <svg className={`w-10 h-10 transition-colors duration-500 ${active ? 'text-[#00cba9]' : 'text-[#44446a]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
        <span className={`text-sm font-bold tracking-widest uppercase transition-colors duration-500 ${active ? 'text-[#00cba9]' : 'text-[#44446a]'}`}>Drop APK to install</span>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ y: -150, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1.5 }}
              className="absolute bg-[#16162a] border border-[#1f1f38] shadow-2xl p-4 rounded-xl flex items-center gap-3 w-48"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#6c5ce7] to-[#8b7cf8] rounded-lg flex items-center justify-center text-white text-[10px] font-bold">APK</div>
              <div className="flex-1">
                <div className="h-2 bg-[#44446a] rounded-full w-full mb-1.5" />
                <div className="h-2 bg-[#1f1f38] rounded-full w-2/3" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}

export function FeatureTerminal({ active }: { active: boolean }) {
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    if (!active) {
      setLines([])
      return
    }

    const logLines = [
      "I/scrcpy: Initializing...",
      "I/scrcpy: Connecting to device...",
      "I/adb: daemon not running; starting now at tcp:5037",
      "I/adb: daemon started successfully",
      "I/scrcpy: Device connected: Pixel_8_Pro",
      "D/scrcpy: Getting screen info...",
      "I/scrcpy: Screen size: 1344x2992",
      "I/scrcpy: Starting server...",
      "D/scrcpy: Server started.",
      "I/scrcpy: Streaming video stream...",
      "V/Decoder: Initialized MediaCodec",
      "V/Decoder: Frame rendered (60fps)"
    ]

    setLines([])
    let i = 0
    const interval = setInterval(() => {
      if (i < logLines.length) {
        const currentLine = logLines[i]
        setLines(prev => [...prev, currentLine])
        i++
      } else {
        clearInterval(interval)
      }
    }, 200)

    return () => clearInterval(interval)
  }, [active])

  return (
    <div className="w-full max-w-[340px] bg-[#0b0b14] border border-[#44446a] rounded-lg shadow-2xl overflow-hidden font-mono text-[10px] sm:text-[11px] leading-relaxed">
      <div className="h-8 bg-[#16162a] border-b border-[#1f1f38] flex items-center px-3 gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[#8888b8]">scott@macbook ~ adb logcat</span>
      </div>
      <div className="p-4 h-[240px] flex flex-col justify-end overflow-hidden">
         <div className="flex flex-col gap-1">
           {lines.map((line, idx) => {
             if (!line) return null
             return (
               <motion.div 
                 key={idx} 
                 initial={{ opacity: 0, x: -5 }} 
                 animate={{ opacity: 1, x: 0 }} 
                 className={line.startsWith('E/') ? 'text-[#ff5f57]' : line.startsWith('I/') ? 'text-[#00cba9]' : 'text-[#8888b8]'}
               >
                 {line}
               </motion.div>
             )
           })}
           {active && lines.length < 12 && (
             <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-3 bg-[#ededf5] mt-1" />
           )}
         </div>
      </div>
    </div>
  )
}
