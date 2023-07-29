/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*{html,js}"],
  theme: {
    colors: {
      white: '#fff',
      DarkGrayishBlue: 'hsl(210, 10%, 33%)',
      GrayishBlue: 'hsl(201, 11%, 66%)',
      StrongCyan: 'hsl(171, 66%, 44%)',
      LightBlue: 'hsl(233, 100%, 69%)',
      },
    extend: {
      backgroundImage: {
        'mobile': "url('/images/bg-header-mobile.png')",
        'desktop': "url('/images/bg-header-desktop.png')",
      }
    },
  },
  plugins: [],
}

