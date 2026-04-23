import Image from 'next/image'
import Link from 'next/link'

const links = {
  App:     [
    { label: 'Features',     href: '/#features' },
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'Download',     href: '/download' },
    { label: 'Security',     href: '/#security' },
  ],
  Project: [
    { label: 'GitHub',        href: 'https://github.com/Scottlexium/scrcpy' },
    { label: 'Releases',      href: 'https://github.com/Scottlexium/scrcpy/releases' },
    { label: 'Report an issue', href: 'https://github.com/Scottlexium/scrcpy/issues' },
    { label: 'Upstream scrcpy', href: 'https://github.com/Genymobile/scrcpy' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f38] bg-[#10101e] pt-12 pb-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10 justify-between mb-10">
          <div className="max-w-[260px]">
            <div className="flex items-center gap-2.5 font-bold text-[15px] mb-3">
              <Image src="/icon.png" alt="icon" width={28} height={28} className="rounded-[7px]" />
              scrcpy GUI
            </div>
            <p className="text-[13px] text-[#8888b8] leading-relaxed">
              Free, open-source GUI wrapper for scrcpy. Mirror and control your Android device without touching a terminal.
            </p>
          </div>

          <div className="flex gap-12">
            {Object.entries(links).map(([section, items]) => (
              <div key={section} className="flex flex-col gap-2.5">
                <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#44446a] mb-1">
                  {section}
                </span>
                {items.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    className="text-[13px] text-[#8888b8] hover:text-[#ededf5] transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#1f1f38] flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#44446a]">
          <span>
            Built on top of{' '}
            <Link href="https://github.com/Genymobile/scrcpy" target="_blank" className="text-[#8888b8] hover:text-[#ededf5]">
              scrcpy
            </Link>{' '}
            by Genymobile. GUI by Scottlexium.
          </span>
          <Link
            href="https://github.com/Scottlexium/scrcpy/blob/master/LICENSE"
            target="_blank"
            className="text-[#8888b8] hover:text-[#ededf5]"
          >
            Apache 2.0 License
          </Link>
        </div>
      </div>
    </footer>
  )
}
