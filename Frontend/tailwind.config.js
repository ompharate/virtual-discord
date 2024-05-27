/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue-start': 'rgb(17, 153, 250)',
        'custom-blue-end': 'rgb(17, 208, 250)',
      },
    },
  },
  plugins: [],
}

