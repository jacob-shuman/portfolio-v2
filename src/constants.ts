import { tw } from "twind";

export const styles = {
  outline: {
    base: tw`outline-none ring(2 offset-2 offset-transparent)`,
    focus: tw`ring-blue-500`,
    hover: tw`ring-blue-700`,
  },
};
