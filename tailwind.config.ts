import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        app: {
          bg:        '#0b0b14',
          surface:   '#10101e',
          card:      '#16162a',
          'card-hi': '#1c1c32',
          border:    '#1f1f38',
          accent:    '#6c5ce7',
          'accent-hi': '#8b82f0',
          'accent-gl': 'rgba(108,92,231,0.15)',
          green:     '#00cba9',
          red:       '#f0476a',
          sub:       '#8888b8',
          muted:     '#44446a',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'Segoe UI', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #6c5ce7 0%, #8b7cf8 100%)',
        'text-gradient':   'linear-gradient(135deg, #a598ff 0%, #6c5ce7 100%)',
        'hero-glow':       'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(108,92,231,0.15), transparent)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'pulse-dot': 'pulseDot 1.4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.75)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
