// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function (){

    // Get DOM elements
    const hamburger = document.querySelector('.hamburgger');
    const navMenu = document.querySelector('.nav-menu');

    //Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function (){
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Handle wimdow resize: auto-close mobile menu on desktop view
    window.addEventListener('resize', function(){
        if (window.innerWidth > 768) {
            // On desktop, ensure menu is visible and hambugger is reset
            navMenu.classList.remove('active')
            hamburger.classList.remove('active')
        };
    });
});