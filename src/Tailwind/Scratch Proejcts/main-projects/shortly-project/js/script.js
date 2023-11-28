const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errorMessage = document.getElementById('error-message');

const menuButton = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

function menuToggle() {
  menuButton.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}

menuButton.addEventListener('click', () => menuToggle());
linkForm.addEventListener('submit', handleSubmit);

// Validate a URL
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

  console.log('input.value', input.value);

  if (input.value === "") {
    errorMessage.innerHTML = "Please enter something";
    input.classList.add('border-red-500');
  } else if (!validURL(input.value)) {
    errorMessage.innerHTML = "Please enter a valid URL";
    input.classList.add('border-red-500');
  } else {
    errorMessage.innerHTML = "";
    input.classList.remove('border-red-500');
    alert('success');
  }
}