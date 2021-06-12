import { tw } from "twind";

export interface NavProps {}

export const Nav: React.FC<NavProps> = ({ children }) => {
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

export default Nav;
