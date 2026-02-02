import { MapPin, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  title: string;
  location?: string;
  description: string;
  type?: 'before-after' | 'gallery' | 'video';
  beforeImage?: string;
  afterImage?: string;
  images?: string[];
  videos?: string[];
}

export default function ProjectCard({
  title,
  location,
  description,
  type = 'before-after',
  beforeImage,
  afterImage,
  images = [],
  videos = [],
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const nextImage = () => {
    if (type === 'video') {
      setCurrentImageIndex((prev) => (prev + 1) % videos.length);
    } else if (type === 'gallery') {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (type === 'video') {
      setCurrentImageIndex((prev) => (prev - 1 + videos.length) % videos.length);
    } else if (type === 'gallery') {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };
  return (
    <>
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={title}
        description={description}
        type={type}
        beforeImage={beforeImage}
        afterImage={afterImage}
        images={images}
        videos={videos}
      />
      <div className="project-card" onClick={() => setModalOpen(true)}>
        {type === 'video' ? (
          <div className="project-gallery">
            <div className="gallery-image-container">
              <iframe
                src={`https://www.youtube.com/embed/${videos[currentImageIndex]}`}
                className="gallery-image youtube-embed"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="video-play-overlay">
                <Play size={48} />
              </div>
              {videos.length > 1 && (
                <>
                  <button 
                    className="gallery-nav prev" 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }} 
                    aria-label="Previous video"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    className="gallery-nav next" 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }} 
                    aria-label="Next video"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
          </div>
        ) : type === 'gallery' ? (
          <div className="project-gallery">
            <div className="gallery-image-container">
              <img src={images[currentImageIndex]} alt={`${title} - Photo ${currentImageIndex + 1}`} className="gallery-image" />
              {images.length > 1 && (
                <>
                  <button 
                    className="gallery-nav prev" 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }} 
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    className="gallery-nav next" 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }} 
                    aria-label="Next photo"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
          </div>
        ) : (
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
        )}
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          {location ? (
            <div className="project-location">
              <MapPin size={16} />
              <span>{location}</span>
            </div>
          ) : null}
          <p className="project-description">{description}</p>
          <div className="view-details-btn">Click to view details</div>
        </div>
      </div>
    </>
  );
}
