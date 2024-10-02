import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
			fontFamily: {
				ubuntu: ["Ubuntu", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
			},
      colors: {
        customRed : "#FE4342",
				customBlue : "#5F96F7",
				customPink : "#E86AE1",
				customCream : "#FDF4EE",
				customWhite : "#F9F5F2",
				customBlack : "#282825",
        customYellow: "#F7D65F"
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
