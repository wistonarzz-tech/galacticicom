/**
 * Galactic Icom — Interactive Script
 * Pure vanilla JS: particles, mobile nav, calculator, subtle enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
  initStarsCanvas();
  initMobileNav();
  initCalculator();
  initScrollEnhancements();
  initActiveNavLink();
});

/* ========================================
   Subtle Animated Stars / Particles in Hero
   ======================================== */
function initStarsCanvas() {
  const canvas = document.getElementById('stars');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let width, height;
  let stars = [];
  let animationFrame;

  function resize() {
    const hero = canvas.parentElement;
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }

  function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.92,
        radius: Math.random() * 1.35 + 0.35,
        alpha: Math.random() * 0.65 + 0.25,
        twinkleSpeed: Math.random() * 0.035 + 0.012,
        twinklePhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.022,
        vy: (Math.random() - 0.5) * 0.012,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = '#ffffff';

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];

      // Gentle drift
      s.x += s.vx;
      s.y += s.vy;

      // Wrap around edges (subtle infinite space)
      if (s.x < 0) s.x = width;
      if (s.x > width) s.x = 0;
      if (s.y < 0) s.y = height * 0.92;
      if (s.y > height * 0.92) s.y = 0;

      // Twinkle
      s.twinklePhase += s.twinkleSpeed;
      const twinkle = Math.sin(s.twinklePhase) * 0.45 + 0.55;
      const currentAlpha = s.alpha * twinkle;

      ctx.globalAlpha = currentAlpha;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();

      // Occasional brighter core
      if (s.radius > 1.1) {
        ctx.globalAlpha = currentAlpha * 0.5;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.globalAlpha = 1;
    animationFrame = requestAnimationFrame(draw);
  }

  function start() {
    resize();
    createStars(Math.floor((width * height) / 2200)); // density ~150-200 stars
    if (animationFrame) cancelAnimationFrame(animationFrame);
    draw();
  }

  // Init + listeners
  start();

  window.addEventListener('resize', () => {
    const oldWidth = width;
    resize();
    if (Math.abs(width - oldWidth) > 80) {
      createStars(Math.floor((width * height) / 2200));
    }
  });

  // Pause animation when tab is hidden (performance)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrame);
    } else {
      draw();
    }
  });
}

/* ========================================
   Mobile Navigation Toggle
   ======================================== */
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    // Simple hamburger animation
    toggle.classList.toggle('open', isOpen);
  });

  // Close menu when clicking a nav link (mobile)
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('active');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('active')) {
      links.classList.remove('active');
      toggle.classList.remove('open');
    }
  });
}

/* ========================================
   Calculator Form Handler
   ======================================== */
function initCalculator() {
  const form = document.getElementById('chart-form');
  const result = document.getElementById('calculator-result');
  const resultMessage = document.getElementById('result-message');
  const resetBtn = document.getElementById('reset-form');

  if (!form || !result || !resultMessage) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const ciudad = document.getElementById('ciudad').value.trim();
    const pais = document.getElementById('pais').value.trim();

    // Elegant "coming soon" message with personalization
    let message = '';
    if (nombre) {
      message = `Estimado/a ${nombre.split(' ')[0]}, `;
    }
    message += `tu solicitud de carta astral ha sido registrada. `;

    if (fecha && ciudad) {
      message += `Los datos de nacimiento del ${fecha} en ${ciudad} serán procesados en cuanto la herramienta completa esté disponible. `;
    }

    message += `Nuestro equipo se pondrá en contacto contigo a la brevedad para entregarte tu interpretación detallada.`;

    resultMessage.textContent = message;

    // Hide form, show result with smooth transition
    form.style.transition = 'opacity 0.25s ease';
    form.style.opacity = '0';

    setTimeout(() => {
      form.style.display = 'none';
      result.style.display = 'block';
      result.style.opacity = '0';
      result.style.transition = 'opacity 0.4s ease';
      requestAnimationFrame(() => {
        result.style.opacity = '1';
      });
    }, 260);
  });

  // Reset form functionality
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      result.style.transition = 'opacity 0.2s ease';
      result.style.opacity = '0';

      setTimeout(() => {
        result.style.display = 'none';
        form.style.display = 'block';
        form.style.opacity = '1';
        form.reset();
        // focus first field
        const firstInput = form.querySelector('input');
        if (firstInput) firstInput.focus();
      }, 220);
    });
  }
}

/* ========================================
   Subtle Scroll + Section Fade-ins
   ======================================== */
function initScrollEnhancements() {
  // Add fade-in animation to key elements on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  // Observe service cards, pillars, quote, etc.
  document.querySelectorAll('.service-card, .pillar, .quote, .contact-cta').forEach(el => {
    el.style.opacity = '0.85';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.4,0,0.2,1)';
    observer.observe(el);
  });

  // Add the in-view styles dynamically (keeps CSS clean)
  const style = document.createElement('style');
  style.textContent = `
    .service-card.in-view,
    .pillar.in-view,
    .quote.in-view,
    .contact-cta.in-view {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
}

/* ========================================
   Active Navigation Link on Scroll
   ======================================== */
function initActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (!navLinks.length || !sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.35,
    rootMargin: '-80px 0px -40% 0px'
  });

  sections.forEach(section => observer.observe(section));

  // Add minimal active style via JS (cleaner than bloating CSS for this)
  const activeStyle = document.createElement('style');
  activeStyle.textContent = `
    .nav-link.active {
      color: var(--text) !important;
    }
    .nav-link.active::after {
      width: 100% !important;
      background: var(--gold);
    }
  `;
  document.head.appendChild(activeStyle);
}

// Optional: Keyboard accessibility hint (future-proof)
console.log('%c[Galactic Icom] Static site ready. All interactions are vanilla JS.', 'color:#555');
