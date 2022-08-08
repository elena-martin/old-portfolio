/*--- PRELOADER ---*/
let loader = ""

let thisURL=""
let baseURL = "";

let docURL = document.URL;
let relativeURL = "";

let loadStart=""
let loadEnd="";

let content = "";

function preLoad(){
    content = document.body;
    console.log(loadStart);
    
    console.log("loaded");

    loader = document.getElementById('preloader');

    console.log(loader);
    thisURL = loader.src.toString();
    baseURL = thisURL.replace("/preloader.html", "");
    relativeURL = docURL.replace(baseURL, "")

    if (relativeURL.includes("/additional") || relativeURL.includes("/commercial")){
        loader.src="../preloader.html";
        content.prepend(loader);
        console.log("tried 1st url")
    } else {
        loader.src="./preloader.html";
        content.prepend(loader);
        console.log("tried 2nd url")
    }
};

function init(){
    loader = document.getElementById('preloader');
    loader.setAttribute("style", "-webkit-animation: fadein 0s; -moz-animation: fadein 0s; -ms-animation: fadein 0s; -o-animation: fadein 0s; animation: fadein 0s;");
    setTimeout(() => {
        loader.style.opacity = "0"
    }, "1000");
    setTimeout(() => {
        loader.style.display = "none"
    }, "2000");
};


function getLocation(){
    console.log(window.location.pathname);
};


function pageTransition(){
    loader.setAttribute("style", "-webkit-animation: fadein 1s; -moz-animation: fadein 1s; -ms-animation: fadein 1s; -o-animation: fadein 1s; animation: fadein 1s;");
    loader.style.opacity = "1.0";
    console.log(loader.style.opacity)
    setTimeout(() => {
        loader.style.display = "block"
    }, "1000");
};

function viewHome(){
    pageTransition();
    setTimeout(() => {
        window.open("https://portfolio.elenamartinaz.com/index.html", target="_self")
        console.log("Home")
    }, "1000");
    
}

function viewPortfolio(){
    pageTransition();
    setTimeout(() => {
        window.open("https://portfolio.elenamartinaz.com/portfolio.html", target="_self")
        console.log("Portfolio")
    }, "1000");
    
}

function viewAbout(){
    pageTransition();
    setTimeout(() => {
        window.open("https://portfolio.elenamartinaz.com/about-me.html", target="_self")
        console.log("About Me")
    }, "1000");
}

function viewAdditionalProj(){
    pageTransition();
    setTimeout(() => {
        window.open("https://portfolio.elenamartinaz.com/additional-projects/additional-projects.html", target="_self")
        console.log("Additional Projects")
    }, "1000");
}