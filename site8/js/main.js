(function () {
  'use strict';

  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  var toggle = document.getElementById('nav-toggle');
  var drawer = document.getElementById('drawer');
  toggle.addEventListener('click', function () {
    var open = drawer.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    drawer.setAttribute('aria-hidden', String(!open));
  });
  drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      drawer.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    });
  });

  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { obs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  // Counter animation — fires once when hero enters view
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateCounter(el, target, suffix, duration) {
    if (reducedMotion) { el.textContent = target + suffix; return; }
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var counters = [
    { el: document.getElementById('counter1'), target: 500, suffix: '+' },
    { el: document.getElementById('counter2'), target: 28, suffix: '' }
  ];

  if ('IntersectionObserver' in window) {
    var heroEl = document.querySelector('.hero');
    var counterObs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        counters.forEach(function (c) {
          if (c.el) animateCounter(c.el, c.target, c.suffix, 1600);
        });
        counterObs.disconnect();
      }
    }, { threshold: 0.3 });
    if (heroEl) counterObs.observe(heroEl);
  } else {
    counters.forEach(function (c) {
      if (c.el) c.el.textContent = c.target + c.suffix;
    });
  }
})();
