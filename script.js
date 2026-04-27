// ========== SHARED NAVBAR ==========
function renderSharedNavbar() {
  const navbarMount = document.getElementById('site-navbar');
  if (!navbarMount) {
    return;
  }

  const isNestedPage = /\/(projects|created)\//.test(window.location.pathname);
  const basePath = isNestedPage ? '../' : '';

  navbarMount.outerHTML = `
    <nav>
      <a href="${basePath}index.html" id="home">Home</a>

      <input
        type="checkbox"
        id="sidebar-active"
        title="Toggle sidebar navigation"
      />
      <label for="sidebar-active" class="open-sidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="32px"
          fill="#e3e3e3"
        >
          <path
            d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
          />
        </svg>
      </label>

      <label id="overlay" for="sidebar-active"></label>

      <div class="sidebar-sections">
        <label for="sidebar-active" class="close-sidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 -960 960 960"
            width="32"
          >
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
            />
          </svg>
        </label>

        <div>
          <a href="${basePath}projects.html">Projects</a>
          <a href="${basePath}creativity.html">Creative Endeavors</a>
          <a href="${basePath}AAPublicResume.pdf" target="_blank" rel="noopener"
            >Resume</a
          >
        </div>
      </div>
    </nav>
  `;
}

// ========== SHARED FOOTER ==========
function renderSharedFooter() {
  const footerMount = document.getElementById('site-footer');
  if (!footerMount) {
    return;
  }

  footerMount.outerHTML = `
    <footer>
      <p>&copy; 2025 Adriana Abreu</p>
      <a href="https://www.linkedin.com/in/adrianaea" target="_blank" rel="noopener"
        >LinkedIn</a
      >
      <a
        href="https://app.joinhandshake.com/profiles/7an2pw"
        target="_blank"
        rel="noopener"
        >HandShake</a
      >
      <a
        href="https://github.com/adrianaea"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
    </footer>
  `;
}

window.addEventListener('DOMContentLoaded', () => {
  renderSharedNavbar();
  renderSharedFooter();
});

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
  const nameElement = document.querySelector('.name-contact h1');
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

