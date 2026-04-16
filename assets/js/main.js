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

// ===================== REVIEW SYSTEM =====================
const reviewModal = document.getElementById('reviewModal');
const reviewForm = document.getElementById('reviewForm');
const starIcons = document.querySelectorAll('#starRating i');
const testiSlides = document.getElementById('testiSlides');
const testiDotsContainer = document.getElementById('testiDots');
let selectedRating = 0;
let testiCurrent = 0;

// Build dots and activate 2 slides at once
function rebuildTestiDots() {
  const allSlides = testiSlides.querySelectorAll('.testi-slide');
  testiDotsContainer.innerHTML = '';
  allSlides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('team-dot');
    dot.addEventListener('click', () => goToTestiSlide(i));
    testiDotsContainer.appendChild(dot);
  });
  if (isNaN(testiCurrent) || testiCurrent >= allSlides.length) testiCurrent = 0;
  goToTestiSlide(testiCurrent);
}

function goToTestiSlide(index) {
  const allSlides = testiSlides.querySelectorAll('.testi-slide');
  if (allSlides.length === 0) return;

  allSlides.forEach(s => s.classList.remove('active'));
  Array.from(testiDotsContainer.children).forEach(d => d.classList.remove('active'));

  testiCurrent = (index + allSlides.length) % allSlides.length;
  allSlides[testiCurrent].classList.add('active');

  if (allSlides.length > 1) {
    const second = (testiCurrent + 1) % allSlides.length;
    allSlides[second].classList.add('active');
  }

  if (testiDotsContainer.children[testiCurrent]) {
    testiDotsContainer.children[testiCurrent].classList.add('active');
  }
}

document.getElementById('testiPrev').addEventListener('click', () => goToTestiSlide(testiCurrent - 1));
document.getElementById('testiNext').addEventListener('click', () => goToTestiSlide(testiCurrent + 1));

rebuildTestiDots();

// Modal open/close
document.getElementById('openReviewModal').addEventListener('click', () => {
  reviewModal.classList.add('open');
  document.body.style.overflow = 'hidden';
});

document.getElementById('closeReviewModal').addEventListener('click', closeModal);

reviewModal.addEventListener('click', e => {
  if (e.target === reviewModal) closeModal();
});

function closeModal() {
  reviewModal.classList.remove('open');
  document.body.style.overflow = '';
}

// Star rating interaction
starIcons.forEach(star => {
  star.addEventListener('mouseover', () => highlightStars(+star.dataset.value));
  star.addEventListener('mouseout', () => highlightStars(selectedRating));
  star.addEventListener('click', () => {
    selectedRating = +star.dataset.value;
    highlightStars(selectedRating);
  });
});

function highlightStars(count) {
  starIcons.forEach(s => {
    const val = +s.dataset.value;
    s.classList.toggle('active', val <= count);
    s.classList.toggle('hovered', val <= count);
  });
}

function formatReviewDate(date) {
  if (!date) return '';
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function buildReviewSlide(name, location, rating, text, date) {
  const slide = document.createElement('div');
  slide.className = 'testi-slide';
  const stars = Array.from({length: 5}, (_, i) =>
    `<i class="fa fa-star" style="color:${i < rating ? 'var(--gold)' : 'rgba(255,255,255,0.15)'}; font-size:0.75rem;"></i>`
  ).join('');
  const dateStr = date ? `<div class="testi-date"><i class="fa fa-calendar-alt"></i> ${formatReviewDate(date)}</div>` : '';
  slide.innerHTML = `
    <div class="testi-card">
      <div class="testi-quote">"</div>
      <div class="testi-stars">${stars}</div>
      <p>${text}</p>
      <div class="testi-author">
        <div class="testi-avatar">${name.charAt(0).toUpperCase()}</div>
        <div>
          <div class="testi-name">${name}</div>
          <div class="testi-loc"><i class="fa fa-map-marker-alt" style="color:var(--gold);font-size:0.65rem;margin-right:4px;"></i>${location}</div>
        </div>
        ${dateStr}
      </div>
    </div>`;
  return slide;
}

function addReviewSlide(name, location, rating, text, date, prepend) {
  const slide = buildReviewSlide(name, location, rating, text, date);
  if (prepend) {
    testiSlides.insertBefore(slide, testiSlides.firstChild);
  } else {
    testiSlides.appendChild(slide);
  }
  rebuildTestiDots();
}

function loadStoredReviews() {
  db.collection('reviews').orderBy('createdAt', 'desc').get().then(snapshot => {
    if (snapshot.empty) {
      testiSlides.innerHTML = `<div class="testi-empty"><i class="fa fa-comment-dots"></i><p>No reviews yet. Be the first to share your experience!</p></div>`;
      return;
    }
    snapshot.forEach(doc => {
      const r = doc.data();
      const date = r.createdAt ? r.createdAt.toDate() : null;
      addReviewSlide(r.name, r.location, r.rating, r.text, date, false);
    });
  });
}

reviewForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('reviewName').value.trim();
  const location = document.getElementById('reviewLocation').value.trim();
  const text = document.getElementById('reviewText').value.trim();
  const errorEl = document.getElementById('reviewError');

  if (!name || !location || !text) { errorEl.textContent = 'Please fill in all fields.'; return; }
  if (selectedRating === 0) { errorEl.textContent = 'Please select a star rating.'; return; }
  errorEl.textContent = '';

  const submitBtn = reviewForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Submitting...';

  db.collection('reviews').add({
    name, location, rating: selectedRating, text,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    const emptyEl = testiSlides.querySelector('.testi-empty');
    if (emptyEl) emptyEl.remove();
    addReviewSlide(name, location, selectedRating, text, new Date(), true);
    goToTestiSlide(0);
    reviewForm.reset();
    selectedRating = 0;
    highlightStars(0);
    closeModal();
    document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }).catch(() => {
    errorEl.textContent = 'Something went wrong. Please try again.';
  }).finally(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fa fa-paper-plane"></i> Submit Review';
  });
});

loadStoredReviews();

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
