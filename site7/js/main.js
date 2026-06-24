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

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function animateCounter(el, target, duration) {
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      el.textContent = Math.round(easeOutCubic(progress) * target);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var statNums = document.querySelectorAll('.stat-num[data-target]');
  if ('IntersectionObserver' in window && statNums.length) {
    var statObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var target = parseInt(e.target.getAttribute('data-target'), 10);
          animateCounter(e.target, target, 1400);
          statObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    statNums.forEach(function (el) { statObs.observe(el); });
  } else {
    statNums.forEach(function (el) { el.textContent = el.getAttribute('data-target'); });
  }
})();
