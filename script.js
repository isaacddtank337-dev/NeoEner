// WhatsApp in international format, digits only.
const WHATSAPP_NUMBER = '5511984260037';
const message = encodeURIComponent('Atendimento online');
document.querySelectorAll('.whatsapp-link').forEach((link) => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
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



