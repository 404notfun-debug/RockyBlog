document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');

  // 导航菜单切换
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => nav.classList.toggle('show'));
  }

  // 移除对不存在元素的引用，避免JavaScript错误

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

  // 直接显示所有元素，避免IntersectionObserver可能导致的问题
  document.querySelectorAll('.apple-fade-in').forEach(el => {
    el.classList.add('apple-visible');
  });
});
