// ===========================================================
// Michel Phelippeau — Script principal v9
// ===========================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Curseur personnalisé ---
  const cursor = document.getElementById('cursor');
  if (cursor) {
    let mx = 0, my = 0;
    let cx = 0, cy = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
    });

    (function animateCursor() {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cursor.style.left = cx + 'px';
      cursor.style.top  = cy + 'px';
      requestAnimationFrame(animateCursor);
    })();

    document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
    document.addEventListener('mouseup',   () => cursor.classList.remove('clicking'));

    document.querySelectorAll('a, button, .gallery-item').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  // --- Header au scroll ---
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Menu mobile ---
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll(':scope > a').forEach(l => l.addEventListener('click', () => nav.classList.remove('open')));
    nav.querySelectorAll('.dropdown-menu a').forEach(l => l.addEventListener('click', () => nav.classList.remove('open')));
    document.querySelectorAll('.nav-item-dropdown > .dropdown-toggle').forEach(t => {
      t.addEventListener('click', e => {
        if (window.innerWidth <= 700) {
          e.preventDefault();
          t.closest('.nav-item-dropdown').classList.toggle('open');
        }
      });
    });
  }

  // --- Reveal au scroll ---
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => obs.observe(el));
  }

  // --- Blur-to-sharp sur les images ---
  document.querySelectorAll('img').forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'));
    }
  });

  // --- Année footer ---
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

});
