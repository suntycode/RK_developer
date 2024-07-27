/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        bg_color:"#282C33",
        light_red:"#E06B74",
        light_green:"#98C379",
        light_skin:"#E5C07A",
        light_blue:"#62AEEF",
        light_pink:"#C778DD",
        dark_green:"#55B6C2",
        light_gray:"#ABB2BF"

      ,
    },

    fontSize:{
      heading :"32px",
      paragraph :"16px",
      subheading:"24px"
    }

    },
  },
  plugins: [],
}