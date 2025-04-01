// Smooth scrolling
document.querySelectorAll('nav a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Dark mode toggle with local storage and icon change
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const toggleIcon = toggleButton.querySelector('span');

// Check local storage for dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  toggleIcon.textContent = '☀️';
  toggleButton.innerHTML = '<span>☀️</span>';
}

// Toggle dark mode and save preference
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
    toggleIcon.textContent = '☀️';
    toggleButton.innerHTML = '<span>☀️</span>';
  } else {
    localStorage.setItem('dark-mode', 'disabled');
    toggleIcon.textContent = '🌙';
    toggleButton.innerHTML = '<span>🌙</span>';
  }
});
