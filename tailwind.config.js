/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary orange from Figma
        primary: {
          DEFAULT: '#FF6916',
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        // Secondary dark red from Figma
        secondary: {
          DEFAULT: '#990D13',
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        // Background colors from Figma
        cream: {
          DEFAULT: '#FFF8F0',
          light: '#FFFCF7',
          dark: '#FFF5E6',
        },
        // Text colors from Figma
        text: {
          primary: '#1F2A2E',
          secondary: '#2B2B2B',
          muted: '#6B6B6B',
          light: '#8A8A8A',
        },
        // Border colors
        border: {
          light: 'rgba(255, 217, 179, 0.3)',
          orange: 'rgba(255, 115, 0, 0.3)',
          cream: 'rgba(255, 248, 240, 0.5)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'hero': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-2': ['40px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-3': ['32px', { lineHeight: '1.3' }],
        'heading-4': ['24px', { lineHeight: '1.4' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.5' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'caption': ['12px', { lineHeight: '1.4' }],
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px',
        'card': '24px',
      },
      boxShadow: {
        'card': '0px 4px 24px -4px rgba(255, 105, 22, 0.08)',
        'card-hover': '0px 12px 32px -8px rgba(255, 105, 22, 0.15)',
        'button': '0px 4px 14px 0px rgba(255, 105, 22, 0.25)',
        'soft': '0px 8px 10px -6px rgba(0, 0, 0, 0.1), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'navbar': '0px 4px 20px 0px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, #990D13 0deg, #FF6916 360deg)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(180deg, #FFF8F0 0%, #FFFFFF 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
