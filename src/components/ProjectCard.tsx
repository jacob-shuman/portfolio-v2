import { tw } from "twind";
import { Project } from "../types/project";

export interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={tw`px-4 py-2 bg-gray-500 rounded-lg flex`}>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
