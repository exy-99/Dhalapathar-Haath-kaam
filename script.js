const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const hamburgerIcon = hamburger.querySelector("i");
const backToTop = document.getElementById('backToTop');
const nav = document.querySelector("nav"); 

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburgerIcon.classList.toggle("fa-bars");
  hamburgerIcon.classList.toggle("fa-times");
});

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  if (window.scrollY > 250) {
    backToTop.classList.add('active');
  } else {
    backToTop.classList.remove('active');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});


