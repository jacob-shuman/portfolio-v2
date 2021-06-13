import { Configuration } from "twind";

export default {
  theme: {
    extend: {
      colors: {
        light: {
          100: "#ffffff",
          200: "#E2E2E2",
        },
        dark: {
          100: "#303030",
          200: "#202020",
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
        raleway: ["Raleway"],
      },
    },
  },
} as Configuration;
