/**
 * 10X Hotels - Main JavaScript
 * Premium book website interactions
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  initMobileNav();
  
  // Scroll Reveal Animations
  initScrollReveal();
  
  // Book 3D Tilt Effect
  initBookTilt();
  
  // Smooth Scroll for Anchor Links
  initSmoothScroll();
  
  // Navigation Background on Scroll
  initNavScroll();
});

/**
 * Mobile Navigation
 */
function initMobileNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const links = navLinks.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }
}

/**
 * Scroll Reveal Animations
 */
function initScrollReveal() {
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
}

/**
 * Book 3D Tilt Effect
 */
function initBookTilt() {
  const bookWrapper = document.querySelector('.book-wrapper');
  
  if (bookWrapper) {
    const bookContainer = bookWrapper.closest('.book-container');
    
    bookContainer.addEventListener('mousemove', function(e) {
      const rect = bookContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      bookWrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY - 8}deg)`;
      bookWrapper.style.transition = 'transform 0.1s ease';
    });
    
    bookContainer.addEventListener('mouseleave', function() {
      bookWrapper.style.transform = 'rotateY(-8deg) rotateX(2deg)';
      bookWrapper.style.transition = 'transform 0.6s ease';
    });
  }
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]');
  
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const navHeight = document.querySelector('.nav').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

/**
 * Navigation Background on Scroll
 */
function initNavScroll() {
  const nav = document.querySelector('.nav');
  
  if (nav) {
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        nav.style.background = nav.classList.contains('nav-light') 
          ? 'rgba(250, 249, 246, 0.95)' 
          : 'rgba(10, 10, 10, 0.95)';
      } else {
        nav.style.background = nav.classList.contains('nav-light')
          ? 'rgba(250, 249, 246, 0.9)'
          : 'rgba(10, 10, 10, 0.7)';
      }
      
      lastScroll = currentScroll;
    });
  }
}

/**
 * JotForm Embed Handler
 */
function initJotFormHandler() {
  const iframe = document.querySelector('#JotFormIFrame-260952733297062');
  
  if (iframe) {
    // Handle iframe resize if needed
    window.addEventListener('message', function(e) {
      if (e.origin === 'https://form.jotform.com') {
        try {
          const data = JSON.parse(e.data);
          if (data.action === 'resize') {
            iframe.style.height = data.height + 'px';
          }
        } catch (err) {
          // Ignore parsing errors
        }
      }
    });
  }
}

// Initialize JotForm handler if on signup page
if (document.querySelector('#JotFormIFrame-260952733297062')) {
  initJotFormHandler();
}
