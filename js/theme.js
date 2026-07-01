
function setTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute(
      "data-bs-theme",
      prefersDark ? "dark" : "light"
    );
  }

  setTheme();

  // Listen for system changes
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', setTheme);
