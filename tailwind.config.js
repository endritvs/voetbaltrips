/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',    
        lg: '960px',
        xl: '1100px'  
      },
    },
    extend: {},
  },
  plugins: [],
};
