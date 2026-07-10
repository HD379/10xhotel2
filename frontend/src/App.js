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
  return (
    <div className="services-page">
      <Navigation />
      
      <section className="services-content" data-testid="services-content">
        <h1 className="services-title" data-testid="services-title">Services</h1>
        
        <div className="services-list">
          <div className="service-item">
            <p>Review your existing hospitality destination and provide a detailed overview on ways to maximize guest experience while staying within budget.</p>
          </div>
          
          <div className="service-item">
            <p>For new facilities being planned, review plans in detail, outlining all suggestions to maximize guest experience per dollar invested.</p>
          </div>
          
          <div className="service-item">
            <p>Start from scratch and develop a plan to create a 10X hotel for staff and guests within a set budget.</p>
          </div>
          
          <div className="service-item highlight">
            <p>Payment is made to a U.S. based non-profit. For every $225 donated, one hour of consultation will be provided.</p>
          </div>
        </div>
        
        <div className="services-steps">
          <h2>How to Get Started</h2>
          <div className="step">
            <span className="step-number">Step 1</span>
            <p>Read the book</p>
          </div>
          <div className="step">
            <span className="step-number">Step 2</span>
            <p>Share as much detail as possible about your project</p>
          </div>
        </div>
        
        <div className="services-cta">
          <p>To start the process...</p>
          <Link to="/contact" className="btn btn-primary" data-testid="services-contact-btn">Contact Us</Link>
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
