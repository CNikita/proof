/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        proof: '0px 4px 24px rgba(0, 0, 0, 0.06);',
      },
    },
    borderRadius: {
      5: '5px',
    },
  },
  plugins: [],
}
