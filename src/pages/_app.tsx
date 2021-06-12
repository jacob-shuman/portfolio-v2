import withTwindApp from "@twind/next/app";
import { tw } from "twind";
import twindConfig from "../../twind.config";
import { Nav, NavButton } from "../components/Nav";
import { IoSunny, IoMoon } from "react-icons/io5";
import useTheme, { ThemeProvider } from "../hooks/useTheme";

const AppWrapper: React.FC = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Nav>
        <NavButton onClick={() => toggleTheme()}>
          {theme === "light" && <IoSunny className={tw`w-8 h-8 text-black`} />}
          {theme === "dark" && <IoMoon className={tw`w-8 h-8 text-white`} />}
        </NavButton>
      </Nav>

      {children}
    </>
  );
};

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default withTwindApp(twindConfig, App);
