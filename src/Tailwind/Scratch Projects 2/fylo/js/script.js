const toggleModeBtn = document.getElementById('toggle-theme-btn');
const themeDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeLightIcon = document.getElementById('theme-toggle-light-icon');

if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  // Show the light icon
  themeLightIcon.classList.remove('hidden');
} else {
  themeDarkIcon.classList.remove('hidden');
}

// Listen for toggle theme button
toggleModeBtn.addEventListener('click', toggleMode);

function toggleMode() {
  // Toggle icon
  themeDarkIcon.classList.toggle('hidden');
  themeLightIcon.classList.toggle('hidden');

  // If set in local storage
  if (localStorage.getItem('color-theme')) {
    // If is set in localStorage
    if (localStorage.getItem('color-theme')) {
      // If light, make dark
      if (localStorage.getItem('color-theme') == 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    } else {
      // If not in localstorage
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  }
}