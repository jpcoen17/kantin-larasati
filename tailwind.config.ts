import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5EDD6',
        'cream-dark': '#E8D9B5',
        wood: '#8B5E3C',
        'wood-dark': '#5C3D2E',
        sambal: '#C0392B',
        'sambal-light': '#E74C3C',
        'daun': '#4A7C59',
        'daun-light': '#6BAA7D',
        'kuning': '#F0A500',
        'kuning-light': '#F5C542',
        'warm-dark': '#1A0F0A',
        'warm-mid': '#2C1810',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        hand: ['var(--font-hand)', 'cursive'],
      },
      animation: {
        'steam-1': 'steam1 3s ease-in-out infinite',
        'steam-2': 'steam2 3.5s ease-in-out infinite 0.5s',
        'steam-3': 'steam3 4s ease-in-out infinite 1s',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 2s',
        'pulse-warm': 'pulseWarm 2s ease-in-out infinite',
      },
      keyframes: {
        steam1: {
          '0%, 100%': { transform: 'translateY(0) scaleX(1)', opacity: '0.6' },
          '50%': { transform: 'translateY(-20px) scaleX(1.3)', opacity: '0' },
        },
        steam2: {
          '0%, 100%': { transform: 'translateY(0) scaleX(1) rotate(-5deg)', opacity: '0.5' },
          '50%': { transform: 'translateY(-25px) scaleX(1.4) rotate(5deg)', opacity: '0' },
        },
        steam3: {
          '0%, 100%': { transform: 'translateY(0) scaleX(1) rotate(3deg)', opacity: '0.4' },
          '50%': { transform: 'translateY(-18px) scaleX(1.2) rotate(-3deg)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseWarm: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(192, 57, 43, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(192, 57, 43, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
