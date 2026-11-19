const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

mainNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.textContent = '☰';
  });
});

const bookingForm = document.querySelector('#bookingForm');
const formMessage = document.querySelector('#formMessage');

bookingForm?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(bookingForm);
  const name = String(data.get('name') || '').trim();
  const phone = String(data.get('phone') || '').trim();
  const service = String(data.get('service') || '').trim();

  if (!name || !/^09\d{9}$/.test(phone) || !service) {
    formMessage.textContent = 'لطفاً نام، شماره موبایل معتبر و نوع مشاوره را بررسی کنید.';
    return;
  }

  formMessage.textContent = 'درخواست شما در این پیش‌نمایش ثبت آزمایشی شد. برای دریافت درخواست واقعی، فرم باید به سامانه پیامکی یا بک‌اند متصل شود.';
  bookingForm.reset();
});
