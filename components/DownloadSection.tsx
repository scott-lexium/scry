import Link from 'next/link'

const RELEASES = 'https://github.com/Scottlexium/scrcpy/releases/latest'

const platforms = [
  {
    emoji: '🍎',
    name: 'macOS',
    version: 'macOS 12 Monterey or later',
    key: 'mac',
    downloads: [
      { label: 'Apple Silicon (arm64)', size: '~85 MB', href: RELEASES },
      { label: 'Intel (x64)',           size: '~88 MB', href: RELEASES },
    ],
    note: 'Requires right-click → Open on first launch.',
    noteHref: '#security',
  },
  {
    emoji: '🪟',
    name: 'Windows',
    version: 'Windows 10 / 11 (64-bit)',
    key: 'win',
    downloads: [
      { label: 'Installer (.exe)',      size: '~78 MB', href: RELEASES },
      { label: 'Portable (no install)', size: '~78 MB', href: RELEASES },
    ],
    note: 'Click "More info → Run anyway" if SmartScreen appears.',
    noteHref: '#security',
  },
  {
    emoji: '🐧',
    name: 'Linux',
    version: 'x86-64 · Ubuntu 20.04+',
    key: 'linux',
    downloads: [
      { label: 'AppImage',              size: '~90 MB', href: RELEASES },
      { label: 'Debian / Ubuntu (.deb)',size: '~65 MB', href: RELEASES },
    ],
    note: 'Run chmod +x on the AppImage before first launch.',
    noteHref: '#security',
  },
]

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 bg-[#10101e]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#8b82f0] mb-3">Download</p>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight leading-tight mb-4">
          Available for every platform
        </h2>
        <p className="text-[16px] text-[#8888b8] max-w-[440px] leading-relaxed">
          Free, open source, no account required.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {platforms.map(({ emoji, name, version, downloads, note, noteHref }) => (
            <div key={name} className="bg-[#16162a] border border-[#1f1f38] rounded-xl p-7 flex flex-col gap-5 hover:border-[#6c5ce7] transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#10101e] border border-[#1f1f38] flex items-center justify-center text-2xl">
                  {emoji}
                </div>
                <div>
                  <p className="font-bold text-[17px]">{name}</p>
                  <p className="text-[12px] text-[#8888b8] mt-0.5">{version}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  href={RELEASES}
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#6c5ce7] to-[#8b7cf8] text-white rounded-lg py-2.5 text-[13px] font-bold shadow-[0_4px_16px_rgba(108,92,231,0.35)] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(108,92,231,0.45)] transition-all"
                >
                  Download for {name}
                </Link>
                {downloads.map(({ label, size, href }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    className="flex items-center justify-between bg-[#10101e] border border-[#1f1f38] rounded-lg px-3.5 py-2.5 text-[13px] font-medium hover:border-[#8b82f0] hover:bg-[#16162a] transition-all"
                  >
                    <span>{label}</span>
                    <span className="text-[11px] text-[#44446a]">{size}</span>
                  </Link>
                ))}
              </div>

              <p className="text-[11px] text-[#44446a] leading-relaxed">
                {note}{' '}
                <Link href={noteHref} className="text-[#8b82f0] hover:text-[#ededf5] transition-colors">
                  See why.
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
