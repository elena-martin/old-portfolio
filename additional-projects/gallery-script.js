/*----- SECTION IDs -----*/
let graphics = document.getElementById("graphic-design");
let git = document.getElementById("git");
let dataVis = document.getElementById("data-vis");
            
/*----- GALLERY DIV IDs -----*/
const gfxSlideshow= document.getElementById('gfx-slideshow');
const gitSlideshow= document.getElementById('git-slideshow');
const datavisSlideshow= document.getElementById('data-vis-slideshow');

/*----- GALLERY SLIDES -----*/
const gfx_slides = gfxSlideshow.children;
const git_slides = gitSlideshow.children;
const datavis_slides = datavisSlideshow.children;

/*----- GALLERY NAVIGATION -----*/
const leftArrow = document.getElementsByClassName("slideshow-nav-left");
const rightArrow = document.getElementsByClassName("slideshow-nav-right");
const indicators = document.getElementsByClassName("slide-indicators");

const gfxIndicators = indicators.item(0).children;
const gitIndicators = indicators.item(1).children;
const datavisIndicators = indicators.item(2).children;

/*----- VAR SETUP -----*/
var source = ""
var relsource = ""
var title = ""
var desc = ""
var right = ""

/*----------SLIDE FUNCTIONS----------*/
function gfxSlides(){
    if (currentSlide == 1){
        gfxIndicators.item(2).setAttribute("style","background-color: rgba(0, 0, 0, 0.25);");
        gfxIndicators.item(1).setAttribute("style","background-color: rgba(0, 0, 0, 0.25);");
        gfxIndicators.item(0).setAttribute("style","background-color: rgba(0, 0, 0, 0.40);");

        gfx_slides.item(0).setAttribute("style", "display: block");
        gfx_slides.item(1).setAttribute("style", "display: none");
        gfx_slides.item(2).setAttribute("style", "display: none");
    };
    if (currentSlide == 2){
        gfxIndicators.item(currentSlide).setAttribute("style","background-color: rgba(0, 0, 0, 0.25);");
        gfxIndicators.item(currentSlide - 2).setAttribute("style","background-color: rgba(0, 0, 0, 0.25);");
        gfxIndicators.item(currentSlide - 1).setAttribute("style","background-color: rgba(0, 0, 0, 0.40);");
            
        gfx_slides.item(0).setAttribute("style", "display: none");
        gfx_slides.item(1).setAttribute("style", "display: block");
        gfx_slides.item(2).setAttribute("style", "display: none");
    };
    if (currentSlide == 3){
        gfxIndicators.item(currentSlide - 3).setAttribute("style","background-color: rgba(0, 0, 0, 0.25);");
        gfxIndicators.item(currentSlide - 2).setAttribute("style","background-color: rgba(0, 0, 0, 0.25);");
        gfxIndicators.item(currentSlide - 1).setAttribute("style","background-color: rgba(0, 0, 0, 0.40);");

        gfx_slides.item(0).setAttribute("style", "display: none");
        gfx_slides.item(1).setAttribute("style", "display: none");
        gfx_slides.item(2).setAttribute("style", "display: block");
    };
};

function gitSlides(){
    if (currentSlide == 1){
        /*gitIndicators.item(1).setAttribute("style","background-color: rgba(0, 0, 0, 0.25);");
        gitIndicators.item(0).setAttribute("style","background-color: rgba(0, 0, 0, 0.40)");
        */

        git_slides.item(0).setAttribute("style", "opacity: 1; display: block");
        git_slides.item(1).setAttribute("style", "opacity: 0; display: none");
    };
    if (currentSlide == 2){
        /*gitIndicators.item(1).setAttribute("style","background-color: rgba(0, 0, 0, 0.25);");
        gitIndicators.item(0).setAttribute("style","background-color: rgba(0, 0, 0, 0.40)");
        */

        git_slides.item(0).setAttribute("style", "opacity: 1; display: block");
        git_slides.item(1).setAttribute("style", "opacity: 0; display: none");
    };
    /*
    if (currentSlide == 2){
        
        gitIndicators.item(currentSlide - 2).setAttribute("style","background-color: rgba(0, 0, 0, 0.25);");
        gitIndicators.item(currentSlide - 1).setAttribute("style","background-color: rgba(0, 0, 0, 0.40)");
            
        
        git_slides.item(0).setAttribute("style", "opacity: 0; display: none");
        git_slides.item(1).setAttribute("style", "opacity: 1; display: block");
    };*/
};

function datavisSlides(){
    if (currentSlide == 1){
        datavisIndicators.item(2).setAttribute("style","background-color: rgba(0, 0, 0, 0.15);");
        datavisIndicators.item(1).setAttribute("style","background-color: rgba(0, 0, 0, 0.15);");
        datavisIndicators.item(0).setAttribute("style","background-color: rgba(0, 0, 0, 0.30);");

        datavis_slides.item(0).setAttribute("style", "display: block");
        datavis_slides.item(1).setAttribute("style", "display: none");
        datavis_slides.item(2).setAttribute("style", "display: none");
    };
    if (currentSlide == 2){
        datavisIndicators.item(currentSlide).setAttribute("style","background-color: rgba(0, 0, 0, 0.15);");
        datavisIndicators.item(currentSlide - 2).setAttribute("style","background-color: rgba(0, 0, 0, 0.15);");
        datavisIndicators.item(currentSlide - 1).setAttribute("style","background-color: rgba(0, 0, 0, 0.30);");
            
        datavis_slides.item(0).setAttribute("style", "display: none");
        datavis_slides.item(1).setAttribute("style", "display: block");
        datavis_slides.item(2).setAttribute("style", "display: none");
    };
    if (currentSlide == 3){
        datavisIndicators.item(currentSlide - 3).setAttribute("style","background-color: rgba(0, 0, 0, 0.15);");
        datavisIndicators.item(currentSlide - 2).setAttribute("style","background-color: rgba(0, 0, 0, 0.15);");
        datavisIndicators.item(currentSlide - 1).setAttribute("style","background-color: rgba(0, 0, 0, 0.30);");

        datavis_slides.item(0).setAttribute("style", "display: none");
        datavis_slides.item(1).setAttribute("style", "display: none");
        datavis_slides.item(2).setAttribute("style", "display: block");
    };
}
/*----- CREATE IMG LIGHTBOX -----*/
const boxContent = document.createElement("div");
boxContent.id = "boxContent";

const boxImg = document.createElement("img");
boxImg.id = "boxImg";

const imgContent = document.createElement("div");
imgContent.id = "imgContent";

const imgTitle = document.createElement("h2");
imgTitle.id = "imgTitle";


const imgDesc = document.createElement("p");
imgDesc.id = "imgDesc";

const closeLightbox = document.createElement("a");
closeLightbox.id = "close-lightbox";
closeLightbox.textContent="×"
closeLightbox.setAttribute("onclick","lightboxClose();")

/*----- DETERMINE WhICH SLIDESHOW & SLIDES TO MOVE -----*/
var currentSlide = 1;
let currentSlideshow = gfxSlideshow;

let slides = currentSlideshow.children;


function load(){
    let nav = document.getElementById('nav');
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style = "opacity: 0";

    document.body.insertBefore(lightbox, nav);

    lightbox.appendChild(closeLightbox);
    lightbox.appendChild(boxContent);
    boxContent.appendChild(boxImg);
    lightbox.appendChild(imgContent);
    
    imgContent.appendChild(imgTitle);
    imgContent.appendChild(imgDesc);

    gfxSlides();
    gitSlides();
    datavisSlides();
    console.log("Slides Loaded")
    setTimeout(() => {
        lightbox.style = "display: none";
    }, "500");
};

function getFigure(e){ 
    source = e.target.src
    title = e.target.alt
    let descP = e.target.nextElementSibling
    desc = descP.textContent
    relsource = source.replace("file:///D:/Coding/GitHub%20Repositories/portfolio/additional-projects/", "./");
    boxImg.setAttribute("src", relsource);
    imgTitle.textContent = title;
    imgDesc.textContent = desc;
}

function hoverImg() {
    const hoverOL = document.createElement("div");
    hoverOL.classList.add("hoverOL");
    hoverOL.width = "100%";
    hoverOL.height = "100%";
    hoverOL.backgroundColor = "#365673";
    list.forEach(function(){
        gallergyFigs.appendChild(hoverOL);
    })

};


/*----------SLIDE COUNTER----------*/
function prevSlide(e){
    let classes = e.target.classList
    if (classes.contains('gfx') == true){
        currentSlideshow = gfxSlideshow;
        console.log(currentSlideshow.id);
        slideBack3();
        gfxSlides();
    };

    if (classes.contains('git') == true){
        currentSlideshow = gitSlideshow;
        console.log(currentSlideshow.id);
        slideBack2();
        gitSlides();
    };

    if (classes.contains('data-vis') == true){
        currentSlideshow = datavisSlideshow;
        console.log(currentSlideshow.id);
        slideBack3();
        datavisSlides();
    };

    
};

function nextSlide(e){
    let classes = e.target.classList
    if (classes.contains('gfx') == true){
        currentSlideshow = gfxSlideshow;
        console.log(currentSlideshow.id);
        slideNext3();
        gfxSlides();
    };

    if (classes.contains('git') == true){
        currentSlideshow = gitSlideshow;
        console.log(currentSlideshow.id);
        slideNext2();
        gitSlides();
    };

    if (classes.contains('data-vis') == true){
        currentSlideshow = datavisSlideshow;
        console.log(currentSlideshow.id);
        slideNext3();
        datavisSlides();
    };

    
};

/*----------SLIDE CHANGER----------*/

function slideBack3(){
    if (currentSlide == 1){
        currentSlide = 3;
        console.log(currentSlide);
    } else{
        currentSlide -= 1;
        console.log(currentSlide)
    }
}

function slideBack2(){
    if (currentSlide == 1 || currentSlide == 3 ){
        currentSlide = 2;
        console.log(currentSlide);
    }
    else{
        currentSlide -= 1;
        console.log(currentSlide)
    }
}

function slideNext3(){
    if (currentSlide == 3){
        currentSlide = 1;
        console.log(currentSlide);
    } else{
        currentSlide += 1;
        console.log(currentSlide);
    }
}

function slideNext2(){
    if (currentSlide == 2 || currentSlide == 3 ){
        currentSlide = 1;
        console.log(currentSlide);
    } 
    else{
        currentSlide += 1;
        console.log(currentSlide);
    }
}

/*---------- OPEN GIT PAGES----------*/

function openQimo(){
    pageTransition();
    setTimeout(() => {
        window.open('./qimo.html', target="_self");
        content.prepend(loader);
}, "1000");
}


function openBOTW(){
    pageTransition();
    setTimeout(() => {
        window.open('./interactive-map.html', target="_self");
        content.prepend(loader);
}, "1000");
   
}


/*---------- GIT CAROUSELS----------*/
function counter(){
    if (i == 5){
        i -= 4;
        console.log(i)
    } else{
        ++i
        console.log(i)
    }
}



function botwCarousel(){
    
    counter();
    if (i == i){
        botwImages.style.height = "100%"
    }
    if (i == 1){
        botwImages.src = "./git/botw/botw-ss-1.webp"
        indicators5[4].style.opacity = "0.3"
        indicators5[0].style.opacity = "0.75"
        console.log(botwImages.src);
    }
    if (i == 2){
        botwImages.src = "./git/botw/botw-ss-2.webp"
        indicators5[0].style.opacity = "0.3"
        indicators5[1].style.opacity = "0.75"
        console.log(botwImages.src);
    }
    if (i == 3){
        botwImages.src = "./git/botw/botw-ss-3.webp"
        indicators5[1].style.opacity = "0.3"
        indicators5[2].style.opacity = "0.75"
        console.log(botwImages.src);
    }
    if (i == 4){
        botwImages.src = "./git/botw/botw-ss-4.webp"
        indicators5[2].style.opacity = "0.3"
        indicators5[3].style.opacity = "0.75"
        console.log(botwImages.src);
    }
    if (i == 5){
        botwImages.src = "./git/botw/botw-ss-5.webp"
        indicators5[3].style.opacity = "0.3"
        indicators5[4].style.opacity = "0.75"
        console.log(botwImages.src);
    }
    
}

/*---------- OPEN DATA VIS PDFs----------*/

function openPDF1(){
    window.open('./data-vis/PersonaliPhoneStats.pdf');
}

function openPDF2(){
    window.open('./data-vis/TheFallOfKingMario.pdf');
}

function openPDF3(){
    window.open('./data-vis/Rev77Infographic.pdf');
}


/*----------LIGHTBOX FUNCTIONS----------*/
function lightboxOpen(){
    lightbox.style = "display: block";
    setTimeout(() => {
        lightbox.style = "opacity: 1";
    }, "0");
    boxImg.setAttribute("target", "_blank");
    disableScroll();
}

function lightboxClose(){
    lightbox.style = "opacity: 0";
    closeLightbox.style = "cursor: pointer"
    boxImg.setAttribute("target", "_blank");
    enableScroll();
    setTimeout(() => {
        lightbox.style = "display: none";
    }, "500");
}

function gitOpen(){
    pageTransition();
    const frame = document.createElement("IFRAME");
    document.body.insertBefore(frame, nav);
    loader.setAttribute("src", "./interactive-map.html");
}
function gitClose(){
    
}

/*----------DISABLE SCROLL IN LIGHTBOX----------*/

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
}
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
}));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

//Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventList
};

//Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}