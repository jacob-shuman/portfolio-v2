import { Project } from "../types/project";
import ProjectCard from "../components/ProjectCard";
import { tw } from "twind";

const projects: Project[] = [
  {
    name: "Pomodoro",
    description: "Minimalistic web-based pomodoro timer",
    link: "https://pomodoro.jacob-shuman.ca",
  },
];

export default function Home() {
  return (
    <main className={tw`flex h-screen w-screen justify-center`}>
      <section className={tw`flex flex-col my-auto text-center`}>
        <h1 className={tw`text-6xl font-poppins font-bold text-blue-500`}>
          Jacob Shuman
        </h1>
        <h2 className={tw`text-2xl font-italic font-raleway`}>
          Senior Software Developer
        </h2>
      </section>

      {/* <section className={tw`flex flex-col`}>
        <h1>Projects</h1>

        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </section> */}
    </main>
  );
}
