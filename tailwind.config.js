/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primario: "#2B2B2B", //primary color
        "dark-gray": "#333333", //secondary color
        verde: "#009379", //green
        azul: "#3366FF", //blue
        rojo: "#FF6250", //red
        amarillo: "#FFDF90", //yellow
        violeta: "#BFAFF2", //purple
        "light-gray": "#C4C4C4", //light gray
        blanco: "#FFFFFF", //white
      },
    },
  },
  // daisyui: {
  //   themes: [
  //     // {
  //     //   mytheme: {
  //     //     primary: "#2B2B2B",
  //     //     secondary: "#333333",
  //     //     accent: "#37cdbe",
  //     //     neutral: "#3d4451",
  //     //     "base-100": "#ffffff",
  //     //   },
  //     // },
  //     "business",
  //   ],
  // },
  plugins: [daisyui],
};
