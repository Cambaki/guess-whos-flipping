import ProjectCard from "@/react-app/components/ProjectCard";
import projectsData from "@/data/projects.json";

interface Project {
  id: number;
  title: string;
  location?: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export default function Projects() {
  const projects: Project[] = projectsData;

  return (
    <div className="page-container">
      <div className="projects-header">
        <h1>Our Projects</h1>
        <p className="projects-subtitle">
          Real transformations. Quality craftsmanship. Every project tells a story of dedication and expertise.
        </p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            location={project.location}
            description={project.description}
            beforeImage={project.beforeImage}
            afterImage={project.afterImage}
          />
        ))}
      </div>
    </div>
  );
}
