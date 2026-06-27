// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

if (hamburger && navbar) {
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    
    const icon = hamburger.querySelector('i');
    if (navbar.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default jump
    
    const targetId = link.getAttribute('href').substring(1); // Remove #
    
    if (targetId === "") {
      // Home - scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    
    // Close mobile menu after clicking a link
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      const icon = hamburger.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
});

// Logo Click - Scroll to Top (Home)
const logo = document.querySelector('.logo');
if (logo) {
  logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      const icon = hamburger.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
}

// Experiment HC
const button = document.getElementById("hello-btn")

button.addEventListener('click', doSomething)

function doSomething(){
  alert("Hello, welcome to my website!")
}