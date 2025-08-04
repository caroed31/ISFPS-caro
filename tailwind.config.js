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
        primary: '#206ec0',
        'primary-light': '#3481d2',
        'primary-dark': '#1a5a9e',
        secondary: '#0ba9c6',
        'secondary-light': '#21bbd8',
        'secondary-dark': '#0990a9',
        accent: '#ee8e99',
        'accent-light': '#f1a4ad',
        'accent-dark': '#e77985',
        'light-bg': '#f8fafd',
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px 0 rgba(0, 0, 0, 0.08)',
        'hover': '0 10px 25px 0 rgba(32, 110, 192, 0.1)',
        'glow': '0 0 15px rgba(11, 169, 198, 0.6)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to right, #f8fafd, #ffffff)',
      },
    },
  },
  plugins: [],
};