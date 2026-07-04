// ===========================================================
// Michel Phelippeau — script commun à toutes les pages
// ===========================================================

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav.main-nav');

  // Header qui se compacte au scroll
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  // Menu mobile
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll(':scope > a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
    nav.querySelectorAll('.dropdown-menu a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
    // Sur mobile, un tap sur le libellé "Œuvres" ouvre/ferme le sous-menu
    document.querySelectorAll('.nav-item-dropdown > .dropdown-toggle').forEach(toggleLink => {
      toggleLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 700) {
          e.preventDefault();
          toggleLink.closest('.nav-item-dropdown').classList.toggle('open');
        }
      });
    });
  }
});
