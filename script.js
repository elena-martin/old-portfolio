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
    loadStart = window.performance.timing.domContentLoadedEventStart
    console.log(loadStart);
    
    console.log("loaded");

    loader = document.createElement('iframe');
    loader.id="preloader";

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

    setTimeout(() => {
        loader.style.opacity = "0"
    }, "1000");
    setTimeout(() => {
        loader.style.display = "none"
    }, "2000");

    loadEnd = window.performance.timing.domContentLoadedEventEnd;
    console.log(loadEnd);
};

function getLocation(){
    console.log(window.location.pathname);
};