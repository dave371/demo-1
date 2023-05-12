/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#81C782',
        secondary: '#2E472F',
        alert: '#609461',
        'main-text-color': '#FFFFFF',
        'accent-color': '#19471A',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
