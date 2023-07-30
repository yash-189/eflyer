/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'java': {
          '50': '#f0fdfa',
          '100': '#cafdf4',
          '200': '#96f9e9',
          '300': '#59efdc',
          '400': '#22c7b8',
          '500': '#0ebeb1',
          '600': '#089991',
          '700': '#0b7a75',
          '800': '#0e615e',
          '900': '#11504e',
          '950': '#023131',
      }
     
      },
      fontFamily: {
        'arimo': ['Arimo', 'sans-serif'],
        
       },
    },
  },
  plugins: [require("flowbite/plugin.js")],
}