module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,scss}",
    "./src/**/*.{js,ts,jsx,tsx,scss}",
  ],
  theme: {
    extend: {

    },
    colors: {
      "fic-white": "#fff",
      "fic-black": "#1c1c1c",
      "green-dark": "#45635f",
      "green-dark-hover": "#38504d",
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: {
        DEFAULT: '1rem',
      },

      // default breakpoints but with 40px removed
      screens: {
        "sm": '640px',
        "md": '768px',
        "lg": '1024px',
        "xl": '1280px',
        "2xl": '1440px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
        
          '@screen md': {
            maxWidth: 'calc(100% - 140px)'
          },
         
          '@screen 2xl': {
            maxWidth: 'calc(100% - 170px)',
          },
        }
      })
    }
  ],
}
