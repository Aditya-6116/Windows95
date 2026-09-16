// Tailwind CSS configuration
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        system: ['"MS Sans Serif"', '"Tahoma"', '"Arial"', 'sans-serif'],
        mono: ['"Courier New"', 'monospace'],
      },
      colors: {
        win: {
          bg: '#008080',        // Classic teal desktop
          surface: '#c0c0c0',  // Classic grey
          darker: '#808080',   // Dark grey
          darkest: '#404040',  // Very dark
          blue: '#000080',     // Classic dark blue
          titleActive: '#000080',
          titleInactive: '#808080',
          titleText: '#ffffff',
          border: '#ffffff',
          borderDark: '#404040',
          borderMid: '#808080',
          highlight: '#000080',
          highlightText: '#ffffff',
          text: '#000000',
        },
      },
    },
  },
  plugins: [],
}
