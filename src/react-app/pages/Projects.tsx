import ProjectCard from "@/react-app/components/ProjectCard";
import projectsData from "@/data/projects.json";

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  type?: 'before-after' | 'gallery';
  beforeImage?: string;
  afterImage?: string;
  images?: string[];
}

export default function Projects() {
  const projects: Project[] = projectsData as Project[];

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
            type={project.type || 'before-after'}
            beforeImage={project.beforeImage}
            afterImage={project.afterImage}
            images={project.images}
          />
        ))}
      </div>
    </div>
  );
}
