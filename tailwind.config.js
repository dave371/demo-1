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
        primary: '#FD5F00',
        secondary: '#00204A',
        alert: '#005792',
        'main-text-color': '#FFFFFF',
        'accent-color': '#00204A',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
