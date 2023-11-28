const linkForm = document.getElementById('link-form');
const input = document.getElementById('link-input');
const errorMessage = document.getElementById('error-message');

const menuButton = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => toggleMenu());

function toggleMenu() {
  menuButton.classList.toggle('open');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
}

linkForm.addEventListener('submit', handleSubmit);

function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    '((\\d{1,3}\\.){3}\\d{1,3}))' +
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    '(\\?[;&a-z\\d%_.~+=-]*)?' +
    '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return !!pattern.test(str)
}

function handleSubmit(event) {
  event.preventDefault();

  if (input.value === "") {
    input.classList.add('border-red-500');
    errorMessage.innerHTML = "Please enter something";
  } else if (!validURL(input.value)) {
    input.classList.add('border-red-500');
    errorMessage.innerHTML = "Please enter a valid URL";
  } else {
    input.classList.remove('border-red-500');
    errorMessage.innerHTML = "";
    alert('success');
  }
}