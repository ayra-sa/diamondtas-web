/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '20px',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1024px',
        '2xl': '1024px',
      }
    },
    extend: {
      fontFamily: {
        dosis: ['Dosis', 'serif'],
        pacifico: ["Pacifico", 'serif']
      },
      animation: {
        "spin-pop": "spinPop .3s ease-out forwards", // Gabungan animasi
      },
      keyframes: {
        spinPop: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5) rotate(0deg)", // Kecil dan tidak terlihat
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(360deg)", // Ukuran normal dan rotasi penuh
          },
        },
      },
    },
  },
  plugins: [],
}

