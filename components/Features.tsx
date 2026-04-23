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
  return (
    <section id="features" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#8b82f0] mb-3">Features</p>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight leading-tight mb-4">
          Everything you need,<br />nothing you don't
        </h2>
        <p className="text-[16px] text-[#8888b8] max-w-[480px] leading-relaxed">
          A complete Android desktop companion. No terminal, no manual ADB setup, no fumbling with flags.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#16162a] border border-[#1f1f38] rounded-xl p-7 hover:border-[#6c5ce7] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-11 h-11 bg-[rgba(108,92,231,0.15)] rounded-xl flex items-center justify-center text-[#8b82f0] mb-4">
                {icon}
              </div>
              <h3 className="text-[15px] font-bold mb-2">{title}</h3>
              <p className="text-[13px] text-[#8888b8] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
