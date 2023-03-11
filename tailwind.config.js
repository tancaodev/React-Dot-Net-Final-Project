/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      backgroundImage: {
        'login':
          `url(https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80)`,
      },
    },
  },
  variants: {
    extend: {
      display: ['hover', 'focus', 'group-hover'],
      margin: ['group-hover'],
      visibility: ['group-hover'],
    },
  },
  plugins: [],
};
