import { MapPin } from "lucide-react";

interface ProjectCardProps {
  title: string;
  location?: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export default function ProjectCard({
  title,
  location,
  description,
  beforeImage,
  afterImage,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-images">
        <div className="image-container">
          <img src={beforeImage} alt={`${title} - Before`} className="project-image" />
          <div className="image-label before">Before</div>
        </div>
        <div className="image-divider"></div>
        <div className="image-container">
          <img src={afterImage} alt={`${title} - After`} className="project-image" />
          <div className="image-label after">After</div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        {location ? (
          <div className="project-location">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        ) : null}
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}
