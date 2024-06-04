/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        'green-custom': 'hsl(75, 94%, 57%)',
        'white-custom': 'hsl(0, 0%, 100%)',
        'gray-custom': 'hsl(0, 0%, 20%)',
        'dark-gray-custom': 'hsl(0, 0%, 12%)',
        'black-custom': 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        'principal': ['"Inter"', 'sans-serif'],
      },
    },
  plugins: [],
}