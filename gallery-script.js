const nav = document.getElementById("nav");

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
        gfxIndicators.item(2).setAttribute("style","background-color: var(--slideshow-indicators-color);");
        gfxIndicators.item(1).setAttribute("style","background-color: var(--slideshow-indicators-color);");
        gfxIndicators.item(0).setAttribute("style","background-color: var(--slideshow-indicators-selected-color);");

        gfx_slides.item(0).setAttribute("style", "display: block");
        gfx_slides.item(1).setAttribute("style", "display: none");
        gfx_slides.item(2).setAttribute("style", "display: none");
    };
    if (currentSlide == 2){
        gfxIndicators.item(currentSlide).setAttribute("style","background-color: var(--slideshow-indicators-color);");
        gfxIndicators.item(currentSlide - 2).setAttribute("style","background-color: var(--slideshow-indicators-color);");
        gfxIndicators.item(currentSlide - 1).setAttribute("style","background-color: var(--slideshow-indicators-selected-color)");
            
        gfx_slides.item(0).setAttribute("style", "display: none");
        gfx_slides.item(1).setAttribute("style", "display: block");
        gfx_slides.item(2).setAttribute("style", "display: none");
    };
    if (currentSlide == 3){
        gfxIndicators.item(currentSlide - 3).setAttribute("style","background-color: var(--slideshow-indicators-color);");
        gfxIndicators.item(currentSlide - 2).setAttribute("style","background-color: var(--slideshow-indicators-color);");
        gfxIndicators.item(currentSlide - 1).setAttribute("style","background-color: var(--slideshow-indicators-selected-color);");

        gfx_slides.item(0).setAttribute("style", "display: none");
        gfx_slides.item(1).setAttribute("style", "display: none");
        gfx_slides.item(2).setAttribute("style", "display: block");
    };
};

function gitSlides(){
    if (currentSlide == 1){
        gitIndicators.item(1).setAttribute("style","background-color: var(--slideshow-indicators-color);");
        gitIndicators.item(0).setAttribute("style","background-color: var(--slideshow-indicators-selected-color);");

        git_slides.item(0).setAttribute("style", "display: block");
        git_slides.item(1).setAttribute("style", "display: none");
    };
    if (currentSlide == 2){
        gitIndicators.item(currentSlide - 2).setAttribute("style","background-color: var(--slideshow-indicators-color);");
        gitIndicators.item(currentSlide - 1).setAttribute("style","background-color: var(--slideshow-indicators-selected-color);");
            
        git_slides.item(0).setAttribute("style", "display: none");
        git_slides.item(1).setAttribute("style", "display: block");
    };
};

function datavisSlides(){
    if (currentSlide == 1){
        datavisIndicators.item(2).setAttribute("style","background-color: var(--slideshow-indicators-color-orange);");
        datavisIndicators.item(1).setAttribute("style","background-color: var(--slideshow-indicators-color-orange);");
        datavisIndicators.item(0).setAttribute("style","background-color: var(--slideshow-indicators-selected-color-orange);");

        datavis_slides.item(0).setAttribute("style", "display: block");
        datavis_slides.item(1).setAttribute("style", "display: none");
        datavis_slides.item(2).setAttribute("style", "display: none");
    };
    if (currentSlide == 2){
        datavisIndicators.item(currentSlide).setAttribute("style","background-color: var(--slideshow-indicators-color-orange);");
        datavisIndicators.item(currentSlide - 2).setAttribute("style","background-color: var(--slideshow-indicators-color-orange);");
        datavisIndicators.item(currentSlide - 1).setAttribute("style","background-color: var(--slideshow-indicators-selected-color-orange);");
            
        datavis_slides.item(0).setAttribute("style", "display: none");
        datavis_slides.item(1).setAttribute("style", "display: block");
        datavis_slides.item(2).setAttribute("style", "display: none");
    };
    if (currentSlide == 3){
        datavisIndicators.item(currentSlide - 3).setAttribute("style","background-color: var(--slideshow-indicators-color-orange);");
        datavisIndicators.item(currentSlide - 2).setAttribute("style","background-color: var(--slideshow-indicators-color-orange);");
        datavisIndicators.item(currentSlide - 1).setAttribute("style","background-color: var(--slideshow-indicators-selected-color-orange);");

        datavis_slides.item(0).setAttribute("style", "display: none");
        datavis_slides.item(1).setAttribute("style", "display: none");
        datavis_slides.item(2).setAttribute("style", "display: block");
    };
};