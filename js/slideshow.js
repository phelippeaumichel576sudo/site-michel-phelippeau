// ===========================================================
// Michel Phelippeau — Diaporama + Lightbox v9
// ===========================================================

// --- DIAPORAMA ---
function initSlideshow() {
  const slides      = document.querySelectorAll('.hero-slideshow .slide');
  const indicators  = document.querySelectorAll('.slideshow-indicators button');
  const cartelTitre = document.querySelector('.hero-cartel .titre');
  const cartelDetail= document.querySelector('.hero-cartel .detail');
  const btnPrev     = document.getElementById('slide-prev');
  const btnNext     = document.getElementById('slide-next');

  if (!slides.length) return;

  let current = 0;
  let timer = null;
  const INTERVAL = 2800;

  function goTo(index) {
    slides[current].classList.remove('active');
    if (indicators[current]) indicators[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (indicators[current]) indicators[current].classList.add('active');
    if (cartelTitre)  cartelTitre.textContent  = slides[current].dataset.titre  || '';
    if (cartelDetail) cartelDetail.textContent = slides[current].dataset.detail || '';
  }

  function start() { timer = setInterval(() => goTo(current + 1), INTERVAL); }
  function stop()  { clearInterval(timer); }

  goTo(0);
  start();

  indicators.forEach((btn, i) => btn.addEventListener('click', () => { stop(); goTo(i); start(); }));
  if (btnPrev) btnPrev.addEventListener('click', () => { stop(); goTo(current - 1); start(); });
  if (btnNext) btnNext.addEventListener('click', () => { stop(); goTo(current + 1); start(); });

  const hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);
  }
}

// --- LIGHTBOX ---
function initLightbox() {
  const items = Array.from(document.querySelectorAll('.gallery-item:not(.placeholder-item)'));
  if (!items.length) return;

  const lb        = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lightbox-img');
  const lbTitre   = document.getElementById('lightbox-titre');
  const lbDetail  = document.getElementById('lightbox-detail');
  const lbClose   = document.getElementById('lightbox-close');
  const lbPrev    = document.getElementById('lightbox-prev');
  const lbNext    = document.getElementById('lightbox-next');

  if (!lb || !lbImg) return;

  let currentIdx = 0;

  function open(idx) {
    currentIdx = idx;
    const item = items[idx];
    const img  = item.querySelector('img');
    const titre  = item.querySelector('.cartel .titre')?.textContent || '';
    const detail = item.querySelector('.cartel .detail')?.textContent || '';
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    if (lbTitre)  lbTitre.textContent  = titre;
    if (lbDetail) lbDetail.textContent = detail;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  function prev() { open((currentIdx - 1 + items.length) % items.length); }
  function next() { open((currentIdx + 1) % items.length); }

  items.forEach((item, i) => item.addEventListener('click', () => open(i)));

  if (lbClose) lbClose.addEventListener('click', close);
  if (lbPrev)  lbPrev.addEventListener('click',  prev);
  if (lbNext)  lbNext.addEventListener('click',  next);

  lb.addEventListener('click', e => { if (e.target === lb) close(); });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initSlideshow();
  initLightbox();
});
