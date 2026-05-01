/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#172554',
        },
        purple: {
          50:  '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
        },
        navy: {
          DEFAULT: '#1e1b4b',
          50:  '#EEECFB',
          100: '#C5BFEF',
          500: '#312e81',
          700: '#1e1b4b',
          900: '#0d0b2e',
        },
        /* ── Hot-pink / magenta accent (Cotiviti-style) ── */
        accent: {
          50:  '#FFF0F7',
          100: '#FFD6EC',
          200: '#FFADD9',
          300: '#FF75BE',
          400: '#F03699',
          500: '#E91E8C',
          600: '#C8006F',
          700: '#A50059',
          800: '#7C0043',
          900: '#52002C',
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)',
        'cta-gradient':  'linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #0EA5E9 100%)',
      },
      animation: {
        'float':    'float 5s ease-in-out infinite',
        'shimmer':  'shimmer 2.5s linear infinite',
        'fade-up':  'fadeUp .55s ease forwards',
        'fade-in':  'fadeIn .4s ease forwards',
        'slide-in': 'slideIn .5s ease forwards',
        'gshift':   'gradientShift 6s ease infinite',
        'spin-slow':'spinSlow 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'card':       '0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
        'card-hover': '0 20px 48px rgba(99,102,241,0.14), 0 4px 12px rgba(0,0,0,0.06)',
        'brand':      '0 8px 32px rgba(37,99,235,0.30)',
        'glow':       '0 0 40px rgba(139,92,246,0.28)',
        'navy':       '0 8px 32px rgba(30,27,75,0.28)',
        'accent':     '0 8px 32px rgba(233,30,140,0.35)',
      },
    },
  },
  plugins: [],
}
