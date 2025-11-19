// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const themeToggle = document.getElementById('themeToggle');

  navToggle?.addEventListener('click', () => nav.classList.toggle('show'));

  // 主题切换并保存
  const saved = localStorage.getItem('site-theme');
  if (saved === 'light') document.body.classList.add('light');

  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('site-theme', isLight ? 'light' : 'dark');
  });

  // 平滑滚动（支持锚点）
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({behavior:'smooth',block:'start'});
        nav.classList.remove('show');
      }
    });
  });

  // 简单的滚动 reveal 动画（IntersectionObserver）
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});
// ...existing code...