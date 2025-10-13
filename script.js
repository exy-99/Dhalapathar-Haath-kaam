const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const hamburgerIcon = hamburger.querySelector("i");
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburgerIcon.classList.toggle("fa-bars");
      hamburgerIcon.classList.toggle("fa-times");

      window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        if (window.scrollY > 50) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      });
    });
    
const backToTop = document.getElementById('backToTop');
      if (window.scrollY > 300) {
                  backToTop.classList.add('active');
              } else {
                  backToTop.classList.remove('active');
              }
        