/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        mont:['Mont']
      },
      maxWidth: {
        "1360": "1392px"
      },
      padding: {
        "85": "340px"
      },
      colors:{
        brend:{
          gray:{
            "#b2abc3":"#b2abc3",
            "#b2abc3":"#b2abc3"
          }
        }
      },
      backgroundImage: {
        'bgmin': "url('../assets/img/bgmin.png')",
        'button': "url('../assets/img/default.png')",
        'button-hover': "url('../assets/img/hover.png')",
        'min7': "url('../assets/img/min7.png')",
      }
   
    },
  },
  plugins: [],
}

