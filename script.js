document.addEventListener('DOMContentLoaded', function() {
  // Animate fade-in and slide-in elements
  document.querySelectorAll('.fade-in, .slide-in').forEach(function(el) {
    el.style.opacity = 1;
  });

  // WhatsApp button click handler
  var whatsappBtn = document.getElementById('whatsapp-btn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function() {
      // Replace with your WhatsApp number if needed
      var phone = '';
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

  // Multi-color animation for the name 'Inthiyaz'
  var titleEl = document.querySelector('.title');
  if (titleEl) {
    var colors = [
      '#ff4b2b', // red
      '#ffb400', // orange
      '#00c6ff', // blue
      '#43e97b', // green
      '#f441a5', // pink
      '#7f53ac', // purple
      '#ffe53b', // yellow
      '#00f2fe'  // cyan
    ];
    var colorIndex = 0;
    setInterval(function() {
      titleEl.style.transition = 'color 0.5s';
      titleEl.style.color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);
  }
});