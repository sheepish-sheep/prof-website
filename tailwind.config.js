/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'vn-bg': '#1e293b',
        'vn-accent': '#334155',
        'vn-text': '#3b82f6',
        'vn-secondary': '#1e40af',
        'vn-soft': '#f1f5f9',
        'vn-muted': '#94a3b8',
        'vn-border': '#475569',
        'vn-light': '#e0e7ff',
        'vn-accent-light': '#1e40af',
        'vn-bg-light': '#334155',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 1s',
        'drift': 'drift 20s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'fall': 'fall 15s linear infinite',
        'fall-slow': 'fall 25s linear infinite',
        'fall-fast': 'fall 10s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        drift: {
          '0%': { transform: 'translateX(-100px) translateY(0px)' },
          '25%': { transform: 'translateX(25vw) translateY(-50px)' },
          '50%': { transform: 'translateX(50vw) translateY(0px)' },
          '75%': { transform: 'translateX(75vw) translateY(-30px)' },
          '100%': { transform: 'translateX(100vw) translateY(0px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
        fall: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
