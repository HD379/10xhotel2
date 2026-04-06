import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
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
          <li><Link to="/invitation" className={`nav-link ${location.pathname === '/invitation' ? 'active' : ''}`} data-testid="nav-link-invitation" onClick={() => setMenuOpen(false)}>Invitation</Link></li>
          <li><Link to="/signup" className={`nav-link ${location.pathname === '/signup' ? 'active' : ''}`} data-testid="nav-link-signup" onClick={() => setMenuOpen(false)}>Sign Up</Link></li>
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
          <Link to="/invitation" className="footer-link">Invitation</Link>
          <Link to="/signup" className="footer-link">Sign Up</Link>
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
  const PDF_URL = "https://customer-assets.emergentagent.com/job_luxury-tenx-book/artifacts/c09vgcva_10%20X%20Hotels.pdf";
  const BOOK_COVER = "https://customer-assets.emergentagent.com/job_luxury-tenx-book/artifacts/15b0toe5_10X%20Hotels%20book%20cover.png";
  
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
            <div className="book-wrapper">
              <img src={BOOK_COVER} 
                   alt="10X Hotels Book Cover" 
                   className="book-cover"
                   data-testid="book-cover-image" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

// Invitation Page
const InvitationPage = () => {
  return (
    <div className="invitation-page">
      <Navigation />
      
      {/* Simple Content */}
      <section className="invitation-simple" data-testid="invitation-content">
        <h1 className="invitation-title" data-testid="invitation-title">Invitation</h1>
        <p className="invitation-text">
          Thank you for reading 10X Hotels. More content coming soon.
        </p>
      </section>

      <Footer />
    </div>
  );
};

// Sign Up Page
const SignUpPage = () => {
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
    <div className="signup-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="signup-hero" data-testid="signup-hero">
        <div className="signup-hero-content">
          <p className="signup-overline">Join the Community</p>
          <h1 className="signup-hero-title" data-testid="signup-title">Begin Your Transformation</h1>
          <p className="signup-description">
            Connect with fellow hospitality professionals and receive exclusive insights, 
            updates, and resources to accelerate your journey.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="signup-form-section" data-testid="signup-form-section">
        <div className="signup-form-container" data-testid="signup-form-container">
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invitation" element={<InvitationPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
