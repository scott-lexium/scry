import AppleIcon from '@/components/icons/AppleIcon'
import WindowsIcon from '@/components/icons/WindowsIcon'
import LinuxIcon from '@/components/icons/LinuxIcon'

const platforms = [
  {
    Icon: AppleIcon,
    iconColor: 'text-[#ededf5]',
    name: 'macOS',
    badge: 'Gatekeeper',
    warning: '"Scry cannot be opened because it is from an unidentified developer."',
    steps: [
      <>Find the app in <strong className="text-[#ededf5]">Finder</strong> (not Launchpad)</>,
      <>
        <strong className="text-[#ededf5]">Right-click</strong> the app →{' '}
        <strong className="text-[#ededf5]">Open</strong>
      </>,
      <>Click <strong className="text-[#ededf5]">Open</strong> in the dialog that appears</>,
      <>The app opens normally from now on</>,
    ],
  },
  {
    Icon: WindowsIcon,
    iconColor: 'text-[#00adef]',
    name: 'Windows',
    badge: 'SmartScreen',
    warning: '"Windows protected your PC — Microsoft Defender SmartScreen prevented an unrecognized app."',
    steps: [
      <>Click <strong className="text-[#ededf5]">More info</strong> in the blue dialog</>,
      <>Click <strong className="text-[#ededf5]">Run anyway</strong></>,
      <>The installer proceeds normally</>,
    ],
  },
  {
    Icon: LinuxIcon,
    iconColor: 'text-[#f5a623]',
    name: 'Linux',
    badge: 'AppImage',
    warning: 'The AppImage may not be executable after downloading.',
    steps: [
      <>Open a terminal in your Downloads folder</>,
      <>
        Run{' '}
        <code className="font-mono text-[11px] text-[#00cba9] bg-[#0b0b14] border border-[#1f1f38] rounded px-1.5 py-0.5">
          chmod +x scry-*.AppImage
        </code>
      </>,
      <>Double-click to launch, or run it from the terminal</>,
    ],
  },
]

export default function SecuritySection() {
  return (
    <section id="security" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#8b82f0] mb-3">Security</p>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight leading-tight mb-4">
          You may see a security warning
        </h2>
        <p className="text-[16px] text-[#8888b8] max-w-[540px] leading-relaxed">
          macOS and Windows warn about apps without a paid signing certificate. Scry is completely safe —
          here's exactly what to click on each platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {platforms.map(({ Icon, iconColor, name, badge, warning, steps }) => (
            <div key={name} className="bg-[#16162a] border border-[#1f1f38] rounded-xl overflow-hidden">
              <div className="px-5 py-3.5 border-b border-[#1f1f38] flex items-center gap-2.5 text-[13px] font-bold">
                <Icon className={`w-4 h-4 ${iconColor}`} />
                <span>{name}</span>
                <span className="ml-auto text-[10px] font-bold bg-[rgba(108,92,231,0.15)] text-[#8b82f0] px-2 py-0.5 rounded-full">
                  {badge}
                </span>
              </div>
              <div className="p-5">
                <p className="bg-[#0b0b14] border border-[#1f1f38] rounded-lg p-3 text-[12px] text-[#8888b8] italic mb-4 leading-relaxed">
                  {warning}
                </p>
                <ol className="space-y-2.5" style={{ counterReset: 'step' }}>
                  {steps.map((step, i) => (
                    <li key={i} className="flex gap-2.5 text-[13px] text-[#8888b8] leading-relaxed">
                      <span className="w-[18px] h-[18px] flex-shrink-0 mt-0.5 bg-[rgba(108,92,231,0.15)] text-[#8b82f0] rounded-full text-[10px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
