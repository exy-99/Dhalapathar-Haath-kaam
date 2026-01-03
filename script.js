const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const hamburgerIcon = hamburger.querySelector("i");
const backToTop = document.getElementById('backToTop');
const nav = document.querySelector("nav"); 

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburgerIcon.classList.toggle("fa-bars");
  hamburgerIcon.classList.toggle("fa-times");
});

// Scroll effects
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

// Back to top button
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});

// Image slider
let currentSlide = 0;
const slides = document.querySelectorAll(".visual-content .slide");
const slideInterval = 3000;

function showNextSlide() {
  if (slides.length > 0) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }
}

if (slides.length > 0) {
  setInterval(showNextSlide, slideInterval);
}
// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove("active");
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");
  });
});

// Load products from JSON
document.addEventListener('DOMContentLoaded', function() {
  fetch('products.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(products => {
      const container = document.getElementById('product-container');
      container.innerHTML = ''; // Clear loading message
      
      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-description">${product.description}</p>
          <p class="product-price">${product.price}</p>
          <button class="product-button">View Details</button>
        `;
        container.appendChild(productCard);
      });
    })
    .catch(error => {
      console.error('Error loading products:', error);
      const container = document.getElementById('product-container');
      container.innerHTML = '<p style="text-align: center; color: #8b4513;">Failed to load products. Please try again later.</p>';
    });
});