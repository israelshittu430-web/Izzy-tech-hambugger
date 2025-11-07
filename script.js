// DOM until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function(){

    //Det DOM elements
    const hamburger = document.querySelector(".hambugger");
    const navMenu = document.querySelector(".nav-menu");

    // Toggle menu when hamburger is clicked
    hamburger.addEventListener("click", function(){
        navMenu.classList.toggle("active")
        hamburger.classList.toggle("active");
    });
    // Handle window resize: auto-close mobile menu on desktop view
    window.addEventListener("resize", function(){
        if(wiindow.innerWidth > 768){
            // on desktop, ensure menu is visible and hamburger is great
            navMenu.classList.remove("active")
            hamburger.classList.remove("active")
        };
    })
})
