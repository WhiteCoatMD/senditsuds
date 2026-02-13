// ===== Hero Carousel =====
(function () {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.querySelector('.hero-prev');
  const nextBtn = document.querySelector('.hero-next');
  let currentSlide = 0;
  let autoplayInterval;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  prevBtn.addEventListener('click', function () {
    prevSlide();
    resetAutoplay();
  });

  nextBtn.addEventListener('click', function () {
    nextSlide();
    resetAutoplay();
  });

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      goToSlide(parseInt(this.dataset.slide));
      resetAutoplay();
    });
  });

  startAutoplay();
})();

// ===== Mobile Menu Toggle =====
(function () {
  const toggle = document.getElementById('mobileMenuToggle');
  const nav = document.getElementById('mainNav');

  toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile menu when a link is clicked
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.classList.remove('active');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

// ===== Sticky Header Background =====
(function () {
  var header = document.getElementById('siteHeader');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
      header.style.background = 'rgba(10, 10, 10, 0.9)';
    }
  });
})();

// ===== Smooth Scroll for Anchor Links =====
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#cart') return;
      e.preventDefault();
      var target = document.querySelector(targetId);
      if (target) {
        var headerOffset = 72;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });
})();

// ===== Newsletter Form =====
(function () {
  var form = document.getElementById('newsletterForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = form.querySelector('input[type="email"]');
    if (email.value) {
      email.value = '';
      var btn = form.querySelector('button');
      var originalText = btn.textContent;
      btn.textContent = 'Subscribed!';
      btn.style.pointerEvents = 'none';
      setTimeout(function () {
        btn.textContent = originalText;
        btn.style.pointerEvents = '';
      }, 2500);
    }
  });
})();

// ===== Scroll Reveal Animation =====
(function () {
  var revealElements = document.querySelectorAll(
    '.spotlight-card, .testimonial-card, .product-card, .bundle-wrapper, .about-wrapper, .newsletter-content'
  );

  revealElements.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  function revealOnScroll() {
    revealElements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Run on load
})();

// ===== Active Nav Highlight on Scroll =====
(function () {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.main-nav a');

  window.addEventListener('scroll', function () {
    var scrollPos = window.scrollY + 150;

    sections.forEach(function (section) {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        var id = section.getAttribute('id');
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  });
})();
