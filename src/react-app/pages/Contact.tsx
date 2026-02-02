import { useState, FormEvent } from "react";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Frontend only - just show success message
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="page-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p className="contact-intro">
          Ready to transform a property? Have a project in mind? Let's talk about how we can 
          bring your vision to life.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <Mail size={32} />
            <h3>Email Us</h3>
            <p>We typically respond within 24 hours</p>
            <a href="mailto:Guesswhosflipping@gmail.com" className="contact-link">
              Guesswhosflipping@gmail.com
            </a>
          </div>
          
          <div className="contact-message">
            <h3>Partnership Opportunities</h3>
            <p>
              We're always looking for new investment opportunities and partnerships. Whether 
              you have a property that needs transformation or want to collaborate on a project, 
              we'd love to explore the possibilities together.
            </p>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us about your project or inquiry..."
              />
            </div>

            <button type="submit" className="submit-button">
              <Send size={20} />
              Send Message
            </button>

            {submitted && (
              <div className="success-message">
                Thanks for reaching out! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
