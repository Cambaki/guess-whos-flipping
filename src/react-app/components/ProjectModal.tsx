import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  type?: 'before-after' | 'gallery';
  beforeImage?: string;
  afterImage?: string;
  images?: string[];
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  type = 'before-after',
  beforeImage,
  afterImage,
  images = [],
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    if (type === 'gallery') {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (type === 'gallery') {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>

        {type === 'gallery' ? (
          <div className="modal-gallery">
            <div className="modal-gallery-container">
              <img src={images[currentImageIndex]} alt={`${title} - Photo ${currentImageIndex + 1}`} className="modal-image" />
              {images.length > 1 && (
                <>
                  <button className="modal-nav prev" onClick={prevImage} aria-label="Previous photo">
                    <ChevronLeft size={32} />
                  </button>
                  <button className="modal-nav next" onClick={nextImage} aria-label="Next photo">
                    <ChevronRight size={32} />
                  </button>
                  <div className="modal-indicators">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`View photo ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="modal-before-after">
            <div className="before-after-container">
              <div className="before-section">
                <img src={beforeImage} alt={`${title} - Before`} className="modal-image" />
                <div className="ba-label">Before</div>
              </div>
              <div className="after-section">
                <img src={afterImage} alt={`${title} - After`} className="modal-image" />
                <div className="ba-label">After</div>
              </div>
            </div>
          </div>
        )}

        <div className="modal-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
