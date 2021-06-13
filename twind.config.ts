import { Configuration } from "twind";

export default {
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#489CFF",
          200: "#4584FF",
        },
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
