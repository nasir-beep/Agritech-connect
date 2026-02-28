export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
 
        primary: {
          50: '#f0f9f1',
          100: '#dcf0e1',
          200: '#b8e0c3',
          300: '#8ec9a1',
          400: '#5fa67a',
          500: '#2D6A4F',     
          600: '#23553f',
          700: '#1a4030',
          800: '#122b20',
          900: '#091510',
          DEFAULT: '#2D6A4F',
        },
        secondary: {
          50: '#fff9e6',
          100: '#fff0c0',
          200: '#ffe599',
          300: '#ffd966',
          400: '#F9C74F',      
          500: '#e9b53f',
          600: '#c9942f',
          700: '#a9731f',
          800: '#89520f',
          900: '#693100',
          DEFAULT: '#F9C74F',
        },
       
        accent: {
          green: '#40916C',
          mint: '#A7C957',
          terracotta: '#E76F51',
          blue: '#48CAE4',
        },
       
        success: '#52B788',
        warning: '#F9844A',
        error: '#E63946',
        info: '#4895EF',
    
        gray: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
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
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/src/assets/hero-pattern.svg')",
      },
    },
  },
  plugins: [],
}