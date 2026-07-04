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
        primary: {
          50: '#fdf8f3',
          100: '#faf0e6',
          200: '#f5dcc9',
          300: '#efc7ac',
          400: '#e9a878',
          500: '#d4844a',
          600: '#b8663a',
          700: '#8f4e28',
          800: '#6b3a1f',
          900: '#4a2814',
        },
        accent: {
          50: '#faf9f7',
          100: '#f3f1ed',
          200: '#e8e3d9',
          300: '#ddd5c5',
          400: '#c8b7a0',
          500: '#a89680',
          600: '#8c7a66',
          700: '#6b5a4a',
          800: '#524638',
          900: '#3d342a',
        },
        dark: '#2d2520',
        light: '#f9f7f4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
