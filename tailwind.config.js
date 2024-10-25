/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px', 
      'xl': '1280px',
      '2xl': '1536px',
      // Custom screen size
      '3xl': '1600px',
    },
    extend: {
      colors: {
        'custom-blue': 'rgb(34, 114, 181)',
        'custom-dark-blue': 'rgba(14, 70, 116, 1)',
        'custom-deep-blue': 'rgba(15, 73, 121, 1)',
        'black': 'rgba(0, 0, 0, 1)',
      },
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(53deg, rgba(108,221,255,1) 0%, rgba(0,224,255,1) 5%, rgba(0,91,118,1) 50%)',
        'button-gradient': 'linear-gradient(0deg, rgba(0,224,255,1) 0%, rgba(0,150,171,1) 90%)',
        'footer-gradient': 'conic-gradient(from 180deg at 95% 70%, #5CCAEB 0%, #387B8F 100%)',
      }),
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'white' },
        },
      },
      animation: {
        typing: 'typing 3.5s steps(40, end) forwards', // Typing animation for the first line
        'typing-delay': 'typing 3.5s steps(40, end) forwards', // Typing animation for the second line with a delay
      },
    },
  },
  plugins: [],
}
