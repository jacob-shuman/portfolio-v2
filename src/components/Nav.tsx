import { tw } from "twind";
import useTheme from "../hooks/useTheme";
import {
  IoSunnyOutline,
  IoMoonOutline,
  IoCafeOutline,
  IoLogoGithub,
  IoLogoNpm,
} from "react-icons/io5";
import React, { useEffect, useState } from "react";
import NextImage from "next/image";

export interface NavContainerProps {}

export const NavContainer: React.FC<NavContainerProps> = ({ children }) => {
  return (
    <div className={tw`flex p-8 justify-between absolute top-0 left-0 w-full`}>
      {children}
    </div>
  );
};

export interface NavButtonProps {}

export const NavButton: React.FC<
  React.ClassAttributes<HTMLButtonElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    NavButtonProps
> = ({ children, ...props }) => {
  const { theme } = useTheme();

  return (
    <button
      {...props}
      className={tw(
        tw`motion-safe:(transition duration-200 ease-in-out hover:(-translate-y-0.5 scale-105) active:(scale-95))`,
        tw`rounded-lg`,
        tw`font-semibold font-poppins`,

        tw`rounded-xl p-2 hover:(outline-none) focus:(outline-none)`
      )}
    >
      {children}
    </button>
  );
};

export interface NavProps {}

export const Nav: React.FC<NavProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const [textTheme, setTextTheme] = useState<string>();

  useEffect(() => {
    setTextTheme(theme === "light" ? "text-dark-200" : "text-light-100");
  }, [theme]);

  return (
    <NavContainer>
      <a
        href="#"
        className={tw(
          tw`flex items-center space-x-4`,
          tw`motion-safe:(transition duration-200 ease-in-out hover:(-translate-y-0.5 scale-105) active:(scale-95))`
        )}
      >
        <NextImage src="/logo.svg" alt="Logo" width={24} height={24} />

        <h1 className={tw(textTheme, tw`font-poppins font-bold`)}>
          Jacob Shuman
        </h1>
      </a>

      <div className={tw`flex space-x-8 items-center`}>
        <div className={tw`flex space-x-4`}>
          <NavButton onClick={() => toggleTheme()}>
            {theme === "light" && (
              <IoSunnyOutline className={tw(textTheme, tw`w-6 h-6`)} />
            )}
            {theme === "dark" && (
              <IoMoonOutline className={tw(textTheme, tw`w-6 h-6`)} />
            )}
          </NavButton>

          <a
            href="https://www.buymeacoffee.com/jacobshuman"
            className={tw(
              tw`motion-safe:(transition duration-200 ease-in-out hover:(-translate-y-0.5 scale-105) active:(scale-95))`,
              tw`rounded-lg`,
              tw`font-semibold font-poppins`,

              tw`rounded-xl p-2 hover:(outline-none) focus:(outline-none)`
            )}
          >
            <IoCafeOutline className={tw(textTheme, tw`w-6 h-6`)} />
          </a>

          <a
            href="https://www.github.com/jacob-shuman"
            className={tw(
              tw`motion-safe:(transition duration-200 ease-in-out hover:(-translate-y-0.5 scale-105) active:(scale-95))`,
              tw`rounded-lg`,
              tw`font-semibold font-poppins`,

              tw`rounded-xl p-2 hover:(outline-none) focus:(outline-none)`
            )}
          >
            <IoLogoGithub className={tw(textTheme, tw`w-6 h-6`)} />
          </a>

          <a
            href="https://www.npmjs.com/~jacob.shuman"
            className={tw(
              tw`motion-safe:(transition duration-200 ease-in-out hover:(-translate-y-0.5 scale-105) active:(scale-95))`,
              tw`rounded-lg`,
              tw`font-semibold font-poppins`,

              tw`rounded-xl p-2 hover:(outline-none) focus:(outline-none)`
            )}
          >
            <IoLogoNpm className={tw(textTheme, tw`w-6 h-6`)} />
          </a>
        </div>

        <a
          href="/Jacob-Shuman_Resume.pdf"
          className={tw(
            textTheme,

            theme === "light" ? tw`bg-light-100` : tw`bg-dark-100`,
            tw`motion-safe:(transition duration-200 ease-in-out hover:(-translate-y-0.5 scale-105) active:(scale-95))`,
            tw`px-12 py-2 rounded-lg`,
            tw`font-semibold font-poppins`
          )}
        >
          Resume
        </a>
      </div>
    </NavContainer>
  );
};

export default Nav;
