const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.menu-icon');
const horn = document.getElementById('horn');
const five = document.querySelector('.five');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menu.style.display = 'none';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menu.style.display = 'block';
  }
}

hamburger.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu);
});

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = '';
  }
  document.getElementById(pageName).style.display = 'block';
  elmnt.style.backgroundColor = color;
}
document.getElementById('defaultOpen').click();
function changeImage(img) {
  horn.src = img.src.replace('img/icon-1.png', 'img/green-horn.png');
  five.style.display = 'none';
}
