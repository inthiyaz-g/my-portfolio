  document.addEventListener('DOMContentLoaded', function() {
    // Animate fade-in and slide-in elements
    document.querySelectorAll('.fade-in, .slide-in').forEach(function(el) {
      el.style.opacity = 1;
    });

    // WhatsApp button click handler
    var whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', function() {
        var phone = ''; // Add your number if needed
        var message = encodeURIComponent('Hi Inthiyaz, I found your portfolio and would like to connect!');
        var url = 'https://wa.me/' + phone + '?text=' + message;
        window.open(url, '_blank');
      });
    }

    // Scroll-triggered animations for skills and projects
    function revealOnScroll() {
      var reveals = document.querySelectorAll('.skills-list li, .project-card');
      var windowHeight = window.innerHeight;
      reveals.forEach(function(el) {
        var elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 60) {
          el.classList.add('animated');
        }
      });
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Change name color to red
    const titleEl = document.querySelector('.text-inthiyaz');
    if (titleEl) {
      titleEl.classList.add('gradient-text');
    }
  });
