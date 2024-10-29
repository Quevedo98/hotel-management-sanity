import type { Config } from "tailwindcss";
import {fontFamily} from'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#038C7F',
        secondary: '#F2C641',
        terciary: {
          dark: '#F27405',
          light: '#F2C641',
        }
      },
      fontFamily: {
        poppings: ['var(--font-poppins)', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
};
export default config;
