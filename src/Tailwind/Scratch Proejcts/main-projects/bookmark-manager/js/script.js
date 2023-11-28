const tabs = document.querySelectorAll('.tab');
const panels =  document.querySelectorAll('.panel');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

// Hamburger button listener
menuBtn.addEventListener('click', navToggle);

function onTabClick(event) {
  // Deactivate all tabs
  tabs.forEach(tab => tab.children[0].classList.remove('border-softRed', 'border-b-4', 'mb:border-b-0'));

  // Hide all panels
  panels.forEach(panel => panel.classList.add('hidden'));

  // Activate new tab and panel based on the target
  event.target.classList.add('border-softRed', 'border-b-4');
  const targetId = event.target.getAttribute('data-target');

  const panel = Array.from(panels).find(panel => panel.classList.contains(targetId));

  panel.classList.remove('hidden');
}

function navToggle() {
  menuBtn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');

  if(menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg');
  } else {
    logo.setAttribute('src', './images/logo--bookmark.svg');
  }
}


