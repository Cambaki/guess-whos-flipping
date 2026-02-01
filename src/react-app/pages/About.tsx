import { Hammer, Award, TrendingUp, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Hammer,
      title: "Craftsmanship",
      description: "Every detail matters. We take pride in delivering work that stands the test of time.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "No shortcuts. No compromises. Just exceptional renovation work that exceeds expectations.",
    },
    {
      icon: TrendingUp,
      title: "Smart Investment",
      description: "We understand the numbers. Our renovations maximize value and deliver strong returns.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Your vision becomes our mission. We work closely with you at every stage of the project.",
    },
  ];

  return (
    <div className="page-container">
      <div className="about-header">
        <h1>About Guess Who's Flipping</h1>
        <p className="about-intro">
          We're not just flipping houses—we're transforming spaces and creating value through 
          exceptional craftsmanship and strategic renovation.
        </p>
      </div>

      <div className="about-story">
        <h2>Our Story</h2>
        <p>
          Founded on the belief that every property has untapped potential, Guess Who's Flipping 
          brings together expertise in construction, design, and real estate investment. We saw too 
          many properties being renovated with a "good enough" mentality, and we knew there was a 
          better way.
        </p>
        <p>
          Our approach combines old-school craftsmanship with modern design sensibility. We don't 
          just update properties—we reimagine them. From structural improvements to thoughtful 
          design choices, every decision is made with both aesthetics and value in mind.
        </p>
        <p>
          What started as a passion project has grown into a portfolio of successful transformations 
          across the region. Each property tells a story of dedication, expertise, and the belief 
          that quality work creates lasting value.
        </p>
      </div>

      <div className="about-values">
        <h2>What Drives Us</h2>
        <div className="values-grid">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <Icon size={32} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="about-cta">
        <h2>Let's Work Together</h2>
        <p>
          Whether you're looking to partner on a project or want to see what we can do with your 
          property, we'd love to hear from you.
        </p>
      </div>
    </div>
  );
}
