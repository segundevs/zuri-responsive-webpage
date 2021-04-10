
//Hamburger menu
const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav-links li');


burger.addEventListener('click', openNavBar);
//To toggle the navbar
function openNavBar(){
  nav.classList.toggle('nav-active');

//To animate the links
navLinks.forEach ((link, index) => {
  if(link.style.animation){
    link.style.animation = '';
  }else {
    link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  }
})

//To animate the burger
burger.classList.toggle('toggle');
};
