import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        water: {
          deep: '#0A2E4D',
          navy: '#0A4D68',
          ocean: '#088395',
          turquoise: '#05BFDB',
          aqua: '#00FFCA',
          light: '#E0F7FA',
          sky: '#87CEEB',
          foam: '#F0F9FF',
        },
        gold: {
          DEFAULT: '#D4A843',
          light: '#F0D78C',
        },
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #0A2E4D 0%, #088395 50%, #05BFDB 100%)',
        'gradient-aqua': 'linear-gradient(135deg, #088395 0%, #05BFDB 50%, #00FFCA 100%)',
        'gradient-sky': 'linear-gradient(180deg, #87CEEB 0%, #E0F7FA 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(10, 46, 77, 0.85) 0%, rgba(8, 131, 149, 0.7) 50%, rgba(5, 191, 219, 0.5) 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4A843 0%, #F0D78C 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'gradient-shift': 'gradientShift 4s ease infinite',
        'countdown-pulse': 'countdownPulse 2s ease-in-out infinite',
      },
      boxShadow: {
        'water': '0 8px 32px rgba(5, 191, 219, 0.15)',
        'water-lg': '0 16px 48px rgba(5, 191, 219, 0.25)',
        'gold': '0 8px 32px rgba(212, 168, 67, 0.2)',
        'card': '0 4px 24px rgba(10, 77, 104, 0.08)',
        'card-hover': '0 12px 40px rgba(10, 77, 104, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
