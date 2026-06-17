import Link from 'next/link'
import AppleIcon from '@/components/icons/AppleIcon'
import WindowsIcon from '@/components/icons/WindowsIcon'
import LinuxIcon from '@/components/icons/LinuxIcon'

const DL = (file: string) =>
  `https://github.com/scott-lexium/scrcpy/releases/latest/download/${file}`

const allFiles = [
  { file: 'scrcpy-gui-mac-arm64.dmg',         platform: 'macOS',   arch: 'arm64', size: '~85 MB' },
  { file: 'scrcpy-gui-mac-x64.dmg',           platform: 'macOS',   arch: 'x64',   size: '~88 MB' },
  { file: 'scrcpy-gui-win-x64.exe',           platform: 'Windows', arch: 'x64',   size: '~78 MB' },
  { file: 'scrcpy-gui-win-x64-portable.exe',  platform: 'Windows', arch: 'x64',   size: '~78 MB' },
  { file: 'scrcpy-gui-linux-x64.AppImage',    platform: 'Linux',   arch: 'x64',   size: '~90 MB' },
  { file: 'scrcpy-gui-linux-x64.deb',         platform: 'Linux',   arch: 'x64',   size: '~65 MB' },
]

type GuideStep = { title: string; body?: string; code?: string }

const guides: Record<string, { label: string; steps: GuideStep[] }> = {
  mac: {
    label: 'macOS',
    steps: [
      { title: 'Download the DMG for your Mac', body: 'M1/M2/M3/M4 → download arm64. Older Intel Mac → download x64. Not sure? Apple menu → About This Mac.' },
      { title: 'Open the DMG and drag to Applications', body: 'Double-click the downloaded .dmg, then drag scrcpy GUI to your Applications folder.' },
      { title: 'Right-click → Open on first launch', body: 'In Finder (not Launchpad), right-click the app and choose Open. Then click Open in the dialog. You only need to do this once.' },
      { title: 'Allow it in System Settings if needed', body: 'If you see "cannot be opened", go to System Settings → Privacy & Security and click Open Anyway next to scrcpy GUI.' },
    ],
  },
  win: {
    label: 'Windows',
    steps: [
      { title: 'Download the installer', body: 'Download scrcpy-gui-win-x64.exe (installer) or the portable .exe if you prefer not to install.' },
      { title: 'Bypass Windows SmartScreen', body: 'When the blue "Windows protected your PC" screen appears, click More info, then Run anyway. SmartScreen warns about any unsigned executable — the app is safe.' },
      { title: 'Complete the installer', body: 'Follow the installer steps. It installs to C:\\Program Files\\scrcpy GUI and creates a Start Menu shortcut.' },
      { title: 'Launch from the Start Menu', body: 'Search for scrcpy GUI in the Start Menu or use the desktop shortcut.' },
    ],
  },
  linux: {
    label: 'Linux',
    steps: [
      { title: 'Download the AppImage or .deb', body: 'Use the AppImage for any distro. Use the .deb for Debian, Ubuntu, Pop!_OS, and compatible systems.' },
      { title: 'Make the AppImage executable', code: 'chmod +x scrcpy-gui-linux-x64.AppImage' },
      { title: 'Run it', body: 'Double-click in your file manager, or:', code: './scrcpy-gui-linux-x64.AppImage' },
      { title: 'Or install the .deb', code: 'sudo dpkg -i scrcpy-gui-linux-x64.deb' },
    ],
  },
}

export default function DownloadPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 text-center border-b border-[#1f1f38]">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold tracking-tight mb-3">
            Download scrcpy GUI
          </h1>
          <p className="text-[17px] text-[#8888b8]">Free, open source. No account required.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { Icon: AppleIcon, iconColor: 'text-[#ededf5]', name: 'macOS',   version: 'Monterey 12+',          note: 'Requires right-click → Open on first launch.', primaryHref: DL('scrcpy-gui-mac-arm64.dmg'),     downloads: [{ label: 'Apple Silicon (arm64)', size: '~85 MB', href: DL('scrcpy-gui-mac-arm64.dmg') }, { label: 'Intel (x64)',            size: '~88 MB', href: DL('scrcpy-gui-mac-x64.dmg') }] },
            { Icon: WindowsIcon, iconColor: 'text-[#00adef]', name: 'Windows', version: 'Windows 10/11 64-bit', note: 'Click "More info → Run anyway" if SmartScreen blocks it.', primaryHref: DL('scrcpy-gui-win-x64.exe'), downloads: [{ label: 'Installer (.exe)',       size: '~78 MB', href: DL('scrcpy-gui-win-x64.exe') }, { label: 'Portable (no install)', size: '~78 MB', href: DL('scrcpy-gui-win-x64-portable.exe') }] },
            { Icon: LinuxIcon, iconColor: 'text-[#f5a623]', name: 'Linux',   version: 'x86-64 · Ubuntu 20.04+', note: 'Run chmod +x on the AppImage before launching.',   primaryHref: DL('scrcpy-gui-linux-x64.AppImage'), downloads: [{ label: 'AppImage',               size: '~90 MB', href: DL('scrcpy-gui-linux-x64.AppImage') }, { label: 'Debian / Ubuntu (.deb)', size: '~65 MB', href: DL('scrcpy-gui-linux-x64.deb') }] },
          ].map(({ Icon, iconColor, name, version, note, primaryHref, downloads }) => (
            <div key={name} className="bg-[#16162a] border border-[#1f1f38] rounded-xl p-6 flex flex-col gap-5 hover:border-[#6c5ce7] transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#10101e] border border-[#1f1f38] flex items-center justify-center drop-shadow-sm">
                  <Icon className={`w-[22px] h-[22px] ${iconColor}`} />
                </div>
                <div>
                  <p className="font-bold text-[17px]">{name}</p>
                  <p className="text-[12px] text-[#8888b8] mt-0.5">{version}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Link href={primaryHref} target="_blank" className="flex items-center justify-center bg-gradient-to-r from-[#6c5ce7] to-[#8b7cf8] text-white rounded-lg py-2.5 text-[13px] font-bold hover:-translate-y-px transition-all shadow-[0_4px_16px_rgba(108,92,231,0.35)]">
                  Download for {name}
                </Link>
                {downloads.map(({ label, size, href }) => (
                  <Link key={label} href={href} target="_blank" className="flex items-center justify-between bg-[#10101e] border border-[#1f1f38] rounded-lg px-3.5 py-2.5 text-[13px] font-medium hover:border-[#8b82f0] transition-all">
                    <span>{label}</span>
                    <span className="text-[11px] text-[#44446a]">{size}</span>
                  </Link>
                ))}
              </div>
              <p className="text-[11px] text-[#44446a] leading-relaxed">
                {note}{' '}
                <Link href="#install-guide" className="text-[#8b82f0] hover:text-[#ededf5] transition-colors">See guide.</Link>
              </p>
            </div>
          ))}
        </div>

        {/* All releases table */}
        <div>
          <h2 className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#44446a] mb-4">All release files</h2>
          <div className="bg-[#16162a] border border-[#1f1f38] rounded-xl overflow-hidden">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-[#1f1f38]">
                  {['File', 'Platform', 'Arch', 'Size', ''].map(h => (
                    <th key={h} className="text-left px-4 py-3 text-[11px] font-bold tracking-[0.06em] uppercase text-[#44446a]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFiles.map(({ file, platform, arch, size }) => (
                  <tr key={file} className="border-b border-[#1f1f38] last:border-0 hover:bg-[#1c1c32] transition-colors">
                    <td className="px-4 py-3.5 font-medium font-mono text-[12px]">{file}</td>
                    <td className="px-4 py-3.5 text-[#8888b8]">{platform}</td>
                    <td className="px-4 py-3.5">
                      <span className="text-[10px] font-bold bg-[#10101e] border border-[#1f1f38] rounded-full px-2 py-0.5 text-[#8888b8]">{arch}</span>
                    </td>
                    <td className="px-4 py-3.5 text-[#44446a]">{size}</td>
                    <td className="px-4 py-3.5">
                      <Link href={DL(file)} target="_blank" className="font-semibold text-[#8b82f0] hover:text-[#ededf5] transition-colors">↓ Download</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Install guide */}
        <div id="install-guide">
          <h2 className="text-[28px] font-extrabold tracking-tight mb-8">Installation guide</h2>

          <div className="space-y-10">
            {Object.entries(guides).map(([key, { label, steps }]) => (
              <div key={key}>
                <h3 className="text-[16px] font-bold mb-5 flex items-center gap-2">
                  <span className="text-[11px] font-bold tracking-[0.08em] uppercase bg-[rgba(108,92,231,0.15)] text-[#8b82f0] px-3 py-1 rounded-full">
                    {label}
                  </span>
                </h3>
                <div className="flex flex-col divide-y divide-[#1f1f38]">
                  {steps.map(({ title, body, code }, i) => (
                    <div key={title} className="flex gap-5 py-5 first:pt-0 last:pb-0">
                      <div className="w-7 h-7 flex-shrink-0 bg-[rgba(108,92,231,0.15)] text-[#8b82f0] rounded-lg flex items-center justify-center text-[12px] font-bold">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[14px] mb-1">{title}</p>
                        {body && <p className="text-[13px] text-[#8888b8] leading-relaxed">{body}</p>}
                        {code && (
                          <code className="mt-2 block bg-[#0b0b14] border border-[#1f1f38] rounded-md px-3 py-2 font-mono text-[12px] text-[#00cba9]">
                            {code}
                          </code>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
