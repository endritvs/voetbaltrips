/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
    './src/assets/images/**/*',
    './src/assets/css/**/*.css',  
    './src/assets/svg/**/*.svg',  
  ],
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
