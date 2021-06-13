import { Project } from "../types/project";
import { tw } from "twind";
import useTheme from "../hooks/useTheme";
import { IoLogoGithub, IoLogoNpm } from "react-icons/io5";

const projects: Project[] = [
  {
    name: "Pomodoro",
    description: "Minimalistic web-based pomodoro timer",
    link: "https://pomodoro.jacob-shuman.ca",
  },
];

export default function Home() {
  const { theme } = useTheme();

  return (
    <main
      className={tw(
        tw`flex h-screen w-screen justify-center`,

        theme === "light" ? tw`bg-light-200` : tw`bg-dark-200`
      )}
    >
      <section
        className={tw`flex flex-col space-y-4 my-auto font-semibold font-poppins`}
      >
        <div>
          <h1 className={tw`text-6xl font-bold text-blue-500`}>
            Hi, I'm Jacob
          </h1>

          <h2
            className={tw(
              tw`text-2xl font-italic`,
              theme === "light" ? tw`text-gray-900` : tw`text-gray-300`
            )}
          >
            Professional Developer, Designer, and Mentor
          </h2>
        </div>

        <div className={tw`flex justify-center space-x-4`}>
          <a href="https://github.com/jacob-shuman/portfolio-v2">
            <IoLogoGithub className={tw`w-8 h-8`} />
          </a>

          <a href="https://www.npmjs.com/~jacob.shuman">
            <IoLogoNpm className={tw`w-8 h-8`} />
          </a>
        </div>
      </section>
    </main>
  );
}
