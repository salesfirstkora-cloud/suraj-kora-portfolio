// ==========================================
// SURAJ KORA PORTFOLIO
// MAIN JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

initMobileMenu();
initTypingEffect();
initSmoothScroll();
initActiveSections();
initNavbarEffects();

});

// ==========================================
// MOBILE MENU
// ==========================================

function initMobileMenu(){

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

if(!hamburger || !navLinks) return;

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");

});

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        hamburger.classList.remove("active");

    });

});

}

// ==========================================
// TYPING EFFECT
// ==========================================

function initTypingEffect(){

const typingElement =
document.getElementById("typing");

if(!typingElement) return;

const words = [

    "Frontend Developer",
    "Web Designer",
    "Self-Taught Programmer",
    "UI/UX Enthusiast",
    "Creative Developer"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type(){

    const currentWord =
    words[wordIndex];

    if(isDeleting){

        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex--
        );

    }else{

        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex++
        );

    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting &&
       charIndex === currentWord.length + 1){

        speed = 1800;
        isDeleting = true;

    }

    if(isDeleting &&
       charIndex === 0){

        isDeleting = false;

        wordIndex =
        (wordIndex + 1)
        % words.length;

        speed = 300;
    }

    setTimeout(type, speed);

}

type();

}

// ==========================================
// SMOOTH SCROLL
// ==========================================

function initSmoothScroll(){

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const targetId =
        this.getAttribute("href");

        if(targetId === "#") return;

        const target =
        document.querySelector(targetId);

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth",
            block:"start"

        });

    });

});

}

// ==========================================
// ACTIVE SECTION DETECTION
// ==========================================

function initActiveSections(){

const sections =
document.querySelectorAll("section[id]");

const navLinks =
document.querySelectorAll(".nav-links a");

function activateNav(){

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.offsetHeight;

        if(

            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight

        ){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
        link.getAttribute("href");

        if(
            href === `#${current}`
        ){

            link.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    activateNav
);

}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

function initNavbarEffects(){

const header =
document.querySelector(".header");

if(!header) return;

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background =
        "rgba(5,8,22,.92)";

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.3)";

    }else{

        header.style.background =
        "rgba(5,8,22,.65)";

        header.style.boxShadow =
        "none";
    }

});

}

// ==========================================
// UTILITY
// ==========================================

function debounce(func, wait){

let timeout;

return function(...args){

    clearTimeout(timeout);

    timeout =
    setTimeout(() => {

        func.apply(this,args);

    },wait);

};

}

// ==========================================
// FUTURE PAGE SUPPORT
// ==========================================

window.PortfolioUtils = {

debounce

};

// ==========================================
// PAGE LOADED
// ==========================================

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});