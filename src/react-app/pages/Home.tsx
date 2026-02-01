import { Link } from "react-router";
import { ArrowRight, Eye, Phone } from "lucide-react";

export default function Home() {
  const stats = [
    { value: "9", label: "Years of Renovations" },
    { value: "3", label: "Active Business Years" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Guess Who's Flipping</h1>
          <p className="hero-subtitle">High-quality renovations. Real transformations.</p>
          
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">
              <Eye size={20} />
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <Phone size={20} />
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="hero-background"></div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="value-prop">
        <div className="value-prop-content">
          <h2>Building Value Through Quality</h2>
          <p>
            Every property has potential. We specialize in uncovering it through strategic 
            renovations that combine expert craftsmanship with smart design decisions. Our 
            approach maximizes both aesthetic appeal and investment returns.
          </p>
          <Link to="/about" className="text-link">
            Learn more about our process
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
