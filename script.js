const buttons = document.querySelectorAll('nav button');
  const sections = document.querySelectorAll('section');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      const current = document.querySelector('section.active');
      const next = document.getElementById(targetId);

      if (current === next) return;

      // Fade out current section
      current.style.opacity = 0;
      setTimeout(() => {
        current.classList.remove('active');

        // Show next section
        next.classList.add('active');
        next.style.opacity = 0;

        // Trigger fade in
        requestAnimationFrame(() => {
          next.style.opacity = 1;
        });
      }, 200); // matches the fadeOut duration

      // Update active nav button
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Initialize sections opacity
  sections.forEach(sec => {
    if (!sec.classList.contains('active')) {
      sec.style.opacity = 0;
    } else {
      sec.style.opacity = 1;
    }
  });