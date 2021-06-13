import withTwindApp from "@twind/next/app";
import { tw } from "twind";
import twindConfig from "../../twind.config";
import { Nav, NavButton } from "../components/Nav";
import { ThemeProvider } from "../hooks/useTheme";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Nav />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default withTwindApp(twindConfig, App);
