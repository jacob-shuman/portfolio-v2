import { tw } from "twind";
import useTheme from "../hooks/useTheme";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export interface NavContainerProps {}

export const NavContainer: React.FC<NavContainerProps> = ({ children }) => {
  return (
    <div
      className={tw`flex flex-row-reverse p-4 justify-between absolute top-0 left-0 w-full`}
    >
      {children}
    </div>
  );
};

export interface NavButtonProps {}

export const NavButton: React.FC<
  React.ClassAttributes<HTMLButtonElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    NavButtonProps
> = ({ children, ...props }) => (
  <button
    {...props}
    className={tw`rounded-xl p-2 hover:(outline-none ring(2 offset-2 offset-transparent blue-500)) focus:(outline-none ring(2 offset-2 offset-transparent blue-700))`}
  >
    {children}
  </button>
);

export interface NavProps {}

export const Nav: React.FC<NavProps> = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <NavContainer>
      <NavButton onClick={() => toggleTheme()}>
        {theme === "light" && (
          <IoSunnyOutline className={tw`w-8 h-8 text-black`} />
        )}
        {theme === "dark" && (
          <IoMoonOutline className={tw`w-8 h-8 text-white`} />
        )}
      </NavButton>
    </NavContainer>
  );
};

export default Nav;
