import { useEffect, useState } from "react";
import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";

// Navigation Component
const Navigation = ({ isLight }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  const navClass = isLight ? "nav nav-light" : "nav";
  
  return (
    <nav className={navClass} data-testid="main-navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo" data-testid="nav-logo">
          10<span>X</span> Hotels
        </Link>
        
        <button 
          className={`nav-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation" 
          data-testid="nav-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`} data-testid="nav-links">
          <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} data-testid="nav-link-home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} data-testid="nav-link-services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} data-testid="nav-link-contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => (
  <footer className="footer" data-testid="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-logo">10<span>X</span> Hotels</div>
        <p className="footer-text">© 2024 Dane E. Rose. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
      </div>
    </div>
  </footer>
);

// Scroll Reveal Hook
const useScrollReveal = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    reveals.forEach(el => revealObserver.observe(el));
    
    return () => reveals.forEach(el => revealObserver.unobserve(el));
  }, []);
};

// Home Page
const HomePage = () => {
  const PDF_URL = "/10X-Hotels.pdf";
  const BOOK_COVER = "/book-cover.png";
  
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero" data-testid="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-overline">A Book by Dane E. Rose</p>
            <h1 className="hero-title" data-testid="hero-title">10X Hotels</h1>
            <p className="hero-description">
              Discover the principles that revolutionize value creation in the hospitality industry — 
              for guests seeking extraordinary experiences, team members pursuing meaningful careers, 
              and investors looking for exceptional returns.
            </p>
            <div className="hero-buttons">
              <a href={PDF_URL} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn btn-primary" 
                 data-testid="hero-read-button">
                Read Now
              </a>
              <a href={PDF_URL} 
                 download="10X-Hotels.pdf" 
                 className="btn btn-secondary" 
                 data-testid="hero-download-button">
                Download PDF
              </a>
            </div>
          </div>
          
          <div className="book-container" data-testid="book-container">
            <a href={PDF_URL} target="_blank" rel="noopener noreferrer" className="book-link">
              <div className="book-wrapper">
                <img src={BOOK_COVER} 
                     alt="10X Hotels Book Cover" 
                     className="book-cover"
                     data-testid="book-cover-image" />
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};;

// Services Page
const ServicesPage = () => {
  const HERO_IMAGE = "https://images.unsplash.com/photo-1585418694458-dc80a5c20294?w=800&q=80";
  
  return (
    <div className="services-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <div className="services-hero-text">
            <p className="services-overline">Consulting Services</p>
            <h1 className="services-hero-title">Hospitality Consulting</h1>
            <p className="services-hero-description">
              Every project is customized to maximize guest experience 
              while respecting your budget. We bring decades of hospitality 
              expertise to help you create extraordinary destinations.
            </p>
          </div>
          
          <div className="services-hero-image">
            <img src={HERO_IMAGE} alt="Luxury Hotel Interior" />
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="services-cards-section">
        <div className="services-cards-container">
          <h2 className="services-section-title">Our Services</h2>
          
          <div className="services-cards-grid">
            <div className="service-card">
              <div className="service-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="service-card-title">Review Existing Properties</h3>
              <p className="service-card-text">
                Review your existing hospitality destination and provide a detailed 
                overview of ways to maximize guest experience while staying within budget.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="service-card-title">Review New Developments</h3>
              <p className="service-card-text">
                Review plans for new hospitality facilities and provide recommendations 
                to maximize guest experience for every dollar invested.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="service-card-title">Create a 10X Hotel</h3>
              <p className="service-card-text">
                Develop a complete strategy from the ground up to create a 10X hotel 
                experience for guests and staff within a defined budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="consultation-section">
        <div className="consultation-container">
          <h2 className="consultation-title">Consultation</h2>
          <div className="consultation-details">
            <p>Payment is made to a U.S.-based nonprofit.</p>
            <p className="consultation-highlight">Each <span>$225</span> donation provides one hour of consultation.</p>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="getting-started-section">
        <div className="getting-started-container">
          <h2 className="getting-started-title">How to Get Started</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Read the Book</h3>
                <p>Begin by reading 10X Hotels to understand our philosophy and approach.</p>
              </div>
            </div>
            
            <div className="timeline-connector"></div>
            
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>Share Your Project</h3>
                <p>Share as much detail as possible about your project and goals.</p>
              </div>
            </div>
          </div>
          
          <div className="getting-started-cta">
            <p>Ready to begin?</p>
            <Link to="/contact" className="btn btn-primary btn-large">Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  useEffect(() => {
    // Load JotForm handler script
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-260952733297062']", "https://form.jotform.com/");
      }
    };
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div className="contact-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="contact-hero" data-testid="contact-hero">
        <div className="contact-hero-content">
          <p className="contact-overline">Get In Touch</p>
          <h1 className="contact-hero-title" data-testid="contact-title">Contact</h1>
          <p className="contact-description">
            Ready to transform your hospitality destination? Let's start the conversation.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="contact-form-section" data-testid="contact-form-section">
        <div className="contact-form-container" data-testid="contact-form-container">
          <iframe
            id="JotFormIFrame-260952733297062"
            title="10X Hotel (Sign up)"
            onLoad={() => window.parent.scrollTo(0,0)}
            allowTransparency="true"
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/260952733297062"
            frameBorder="0"
            style={{minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none'}}
            scrolling="no"
            data-testid="jotform-iframe"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

// App Component
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
