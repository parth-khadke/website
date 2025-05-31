document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const blogHeader = document.querySelector('.blog-header');

  // Apply saved preference (default is light mode)
  if (localStorage.getItem('darkMode') === 'dark') {
    enableDarkMode();
  }

  // Toggle button click event
  darkModeToggle.addEventListener('click', () => {
    body.classList.contains('dark-mode') ? disableDarkMode() : enableDarkMode();
  });

  function enableDarkMode() {
    body.classList.add('dark-mode');
    blogHeader.classList.add('dark-mode');
    darkModeToggle.textContent = '🌗';
    localStorage.setItem('darkMode', 'dark');
  }

  function disableDarkMode() {
    body.classList.remove('dark-mode');
    blogHeader.classList.remove('dark-mode');
    darkModeToggle.textContent = '🌗';
    localStorage.setItem('darkMode', 'light');
  }
});