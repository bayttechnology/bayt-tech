/*==================================
ACTIVE NAVBAR
==================================*/

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul li a[href^='#']");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/*==================================
FAQ ACCORDION
==================================*/

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const item = question.parentElement;
        const answer = item.querySelector(".faq-answer");
        const icon = question.querySelector("span");

        // Tutup FAQ lain
        document.querySelectorAll(".faq-item").forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");
                faq.querySelector(".faq-answer").style.maxHeight = null;
                faq.querySelector(".faq-question span").textContent = "+";

            }

        });

        // Toggle FAQ yang diklik
        if (item.classList.contains("active")) {

            item.classList.remove("active");
            answer.style.maxHeight = null;
            icon.textContent = "+";

        } else {

            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "−";

        }

    });

});

/*==========================================
SCROLL TO TOP
==========================================*/

const scrollTopBtn=document.getElementById("scrollTopBtn");

if(scrollTopBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

scrollTopBtn.classList.add("show");

}else{

scrollTopBtn.classList.remove("show");

}

});

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*==========================================
PRELOADER
==========================================*/

window.addEventListener("load",()=>{

    const preloader=document.getElementById("preloader");

    if(preloader){

        setTimeout(()=>{

            preloader.classList.add("hide");

        },800);

    }

});

/*==========================================
SCROLL REVEAL
==========================================*/

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach((item)=>{

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



/*==================================
BOOKING BUTTON LOADING
==================================*/

const bookingButtons = document.querySelectorAll(".btn-booking");

bookingButtons.forEach(button => {

    button.addEventListener("click", function () {

        const originalText = this.innerHTML;

        this.innerHTML = "⏳ Membuka WhatsApp...";
        this.style.pointerEvents = "none";

        setTimeout(() => {

            this.innerHTML = originalText;
            this.style.pointerEvents = "auto";

        }, 1000);

    });

});

/*==================================
SMOOTH SCROLL OFFSET
==================================*/

document.querySelectorAll('nav a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        const offset = 90;

        const top = target.offsetTop - offset;

        window.scrollTo({

            top: top,
            behavior: "smooth"

        });

    });

});

/*==================================
NAVBAR SCROLL EFFECT
==================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/*====================================
   AUTO CENTER TAB LAYANAN
====================================*/

document.addEventListener("DOMContentLoaded", () => {

    const nav = document.querySelector(".service-nav");
    const active = document.querySelector(".service-nav-item.active");

    if (!nav || !active) return;

    const navWidth = nav.offsetWidth;
    const activeLeft = active.offsetLeft;
    const activeWidth = active.offsetWidth;

    nav.scrollTo({
        left: activeLeft - (navWidth / 2) + (activeWidth / 2),
        behavior: "smooth"
    });

});

/*====================================
     TOUCH EFFECT
====================================*/

document.querySelectorAll(".service-nav-item").forEach(item => {

    item.addEventListener("touchstart", () => {

        item.style.transform = "scale(.96)";

    });

    item.addEventListener("touchend", () => {

        item.style.transform = "";

    });

});

const gallerySwiper = new Swiper(".gallerySwiper",{

    loop:true,

    centeredSlides:true,

    grabCursor:true,

    spaceBetween:25,

    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },

    breakpoints:{

        0:{
            slidesPerView:1,
        },

        768:{
            slidesPerView:2,
        },

        1200:{
            slidesPerView:3,
        }

    }

});