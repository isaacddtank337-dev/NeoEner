// Fixed WhatsApp destinations; keep the existing message on every CTA.
const message = encodeURIComponent('Atendimento online');
document.querySelectorAll('.whatsapp-link').forEach((link) => {
  const number = link.matches('.hero-actions .whatsapp-link')
    ? '5511984260037'
    : '5512992307033';
  link.href = `https://wa.me/${number}?text=${message}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  nav?.classList.toggle('open', !expanded);
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('#year').forEach((element) => element.textContent = new Date().getFullYear());



