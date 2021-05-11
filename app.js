const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


// to show active menu when scrolling
const highlightMenu = () =>{
  const elem = document.querySelector('.highlight')
  const Home = document.querySelector('#home-page')
  const About = document.querySelector('#about-page')
  const Services = document.querySelector('#services-page')
  let scrollPos = window.scrollY
 // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 350) {
    Home.classList.add('highlight');
    About.classList.remove('highlight');
    Services.classList.remove('highlight');
    return;
  }
  else if (window.innerWidth > 960 && scrollPos < 1250) {
    About.classList.add('highlight');
    Home.classList.remove('highlight');
    Services.classList.remove('highlight');
    return;
  }
   else if (window.innerWidth > 960 && scrollPos < 2500) {
    Services.classList.add('highlight');
    About.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

