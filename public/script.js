'use strict';

const menuToggle = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#main-nav');
const menuIcon = menuToggle.querySelector('span');
function setMenu(open) {
  navigation.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  menuIcon.textContent = open ? 'close' : 'menu';
}
menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (link) {
    setMenu(false);
    // Keep keyboard focus in the destination rather than in the closed menu.
    document.querySelector(link.hash)?.focus({ preventScroll: true });
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('header')) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuToggle.focus();
  }
});
window.matchMedia('(min-width: 768px)').addEventListener('change', () => setMenu(false));

// Reflect the section currently visible below the fixed navigation.
const sections = [...document.querySelectorAll('main section[id]')];
const menuLinks = [...navigation.querySelectorAll('a')];
let scrollScheduled = false;
function updateActiveSection() {
  let current = sections[0].id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 160) current = section.id;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = sections.at(-1).id;
  menuLinks.forEach(link => {
    if (link.hash === '#' + current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scrollScheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scrollScheduled) {
    scrollScheduled = true;
    requestAnimationFrame(updateActiveSection);
  }
}, { passive: true });
window.addEventListener('resize', updateActiveSection);
updateActiveSection();

let copyTimer;
document.querySelector('#copyEmailBtn').addEventListener('click', async () => {
  const feedback = document.querySelector('#copyFeedback');
  clearTimeout(copyTimer);
  try {
    await navigator.clipboard.writeText(document.querySelector('#emailText').textContent.trim());
    feedback.textContent = '복사됨!';
  } catch {
    feedback.textContent = '주소를 선택해 복사해 주세요';
  }
  copyTimer = setTimeout(() => { feedback.textContent = '복사'; }, 3000);
});

document.querySelector('#contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = String(data.get('subject')).trim() || '포트폴리오 협업 문의';
  const body = `이름: ${String(data.get('name')).trim()}\n회신 이메일: ${String(data.get('email')).trim()}\n\n${String(data.get('message')).trim()}`;
  window.location.href = `mailto:aczacz1014@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-status').textContent = '메일 앱에서 내용을 확인한 후 전송해 주세요. 작성창이 열리지 않으면 aczacz1014@gmail.com 주소를 복사해 이용해 주세요.';
});
