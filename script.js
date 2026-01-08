// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========== TYPING ANIMATION FOR NAME ==========
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  element.style.opacity = '1';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Start typing animation when page loads
window.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.querySelector('.name-email h1');
  if (nameElement) {
    const originalText = nameElement.textContent;
    typeWriter(nameElement, originalText, 80);
  }
});

// ========== FADE-IN ON SCROLL ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
    }
  });
}, observerOptions);

// Observe elements when page loads
window.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll(
    '#objective, #education, #projects, .skills, #awards, .card, footer'
  );
  
  animatedElements.forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
  });
});

// ========== BACK TO TOP BUTTON ==========
// Create back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.className = 'back-to-top';
backToTopButton.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopButton);

// Show/hide button on scroll
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Scroll to top on click
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
