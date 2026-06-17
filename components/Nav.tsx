'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0b0b14]/85 backdrop-blur-lg border-b border-[#1f1f38]">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-15">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-[15px]">
          <Image src="/icon.png" alt="Scry" width={28} height={28} className="rounded-[7px]" />
          Scry
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {[
            { label: 'Features',     href: '/#features' },
            { label: 'How it works', href: '/#how-it-works' },
            { label: 'Download',     href: '/download' },
            { label: 'GitHub',       href: 'https://github.com/scott-lexium/scrcpy', external: true },
          ].map(({ label, href, external }) => (
            <Link
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              className="text-[13px] text-[#8888b8] hover:text-[#ededf5] transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/download"
            className="text-[13px] font-semibold bg-[#6c5ce7] hover:opacity-90 text-white px-4 py-2 rounded-lg transition-all hover:-translate-y-px"
          >
            Download free
          </Link>
        </div>
      </div>
    </nav>
  )
}
