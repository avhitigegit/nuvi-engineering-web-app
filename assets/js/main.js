// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu
function openMobileMenu() {
  document.getElementById('mobileMenu').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

// Intersection Observer for fade-up animations
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => observer.observe(el));

// Contact form (Formspree AJAX)
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      form.reset();
      successMsg.style.display = 'flex';
      btn.innerHTML = '<i class="fa fa-check"></i> Message Sent!';
      setTimeout(() => {
        btn.innerHTML = '<i class="fa fa-paper-plane"></i> Send Message';
        btn.disabled = false;
        successMsg.style.display = 'none';
      }, 5000);
    } else {
      throw new Error();
    }
  } catch {
    btn.innerHTML = '<i class="fa fa-paper-plane"></i> Send Message';
    btn.disabled = false;
    alert('Something went wrong. Please try calling us directly at +94 77 662 2922.');
  }
});

// Team slider
const slides = document.querySelectorAll('.team-slide');
const dotsContainer = document.getElementById('teamDots');
let current = 0;

// Build dots
slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('team-dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

function goToSlide(index) {
  slides[current].classList.remove('active');
  dotsContainer.children[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
  dotsContainer.children[current].classList.add('active');
}

document.getElementById('teamPrev').addEventListener('click', () => goToSlide(current - 1));
document.getElementById('teamNext').addEventListener('click', () => goToSlide(current + 1));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
