

/*--- PRELOADER ---*/
const nav = document.getElementById("nav");
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

let base = ""

function init(){
    loader = document.getElementById('preloader');
    loader.setAttribute("src","./preloader.html");
    loader.setAttribute("style", "-webkit-animation: fadein 0s; -moz-animation: fadein 0s; -ms-animation: fadein 0s; -o-animation: fadein 0s; animation: fadein 0s;");
    setTimeout(() => {
        loader.style.opacity = "0"
    }, "1000");
    setTimeout(() => {
        loader.style.display = "none"
    }, "2000");
    base = this.window;
};

/*----------- PAGE TRANSITIONS -----------*/

function getLocation(){
    thisURL = document.URL.toString();
    baseURL = thisURL.replace("/preloader.html", "");
    relativeURL = docURL.replace(baseURL, "");
    console.log(thisURL);
};


function pageTransition(){
    loader.setAttribute("src","./preloader.html")
    loader.setAttribute("style", "-webkit-animation: fadein 1s; -moz-animation: fadein 1s; -ms-animation: fadein 1s; -o-animation: fadein 1s; animation: fadein 1s;");
    loader.style.opacity = "1.0";
    console.log(loader.style.opacity)
    setTimeout(() => {
        loader.style.display = "block"
    }, "1000");
};

function viewHome(){
    pageTransition();
    getLocation();
    setTimeout(() => {
        if (thisURL.includes("/additional") || thisURL.includes("/commercial")){
            window.open("../index.html", target="_self")
            content.prepend(loader);
            console.log("tried 1st url")
        } else {
            window.open("./index.html", target="_self")
            content.prepend(loader);
            console.log("tried 2nd url")
        }
    }, "1000");
    
}

function viewAbout(){
    pageTransition();
    getLocation();
    setTimeout(() => {
        if (thisURL.includes("/additional") || thisURL.includes("/commercial")){
            window.open("../about-me.html", target="_self")
            content.prepend(loader);
            console.log("tried 1st url")
        } else {
            window.open("./about-me.html", target="_self")
            content.prepend(loader);
            console.log("tried 2nd url")
        }
    }, "1000");
}

function viewAdditionalProj(){
    pageTransition();
    getLocation();
    setTimeout(() => {
        if (thisURL.includes("/portfolio.html")){
            window.open("additional-projects/additional-projects.html", target="_self")
            content.prepend(loader);
            console.log("tried 2nd url")
        } else {
            console.log("Error")
        }
    }, "1000");
}

function viewCommercialProj(){
    pageTransition();
    getLocation();
    setTimeout(() => {
        if (thisURL.includes("/portfolio.html")){
            window.open("commercial-projects/commercial-lock.html", target="_self")
            content.prepend(loader);
            console.log("tried 2nd url")
        } else {
            console.log("Error")
        }
    }, "1000");
}

function viewPortfolio(){
    pageTransition();
    getLocation();
    setTimeout(() => {
        if (thisURL.includes("/additional") || thisURL.includes("/commercial")){
            window.open("../portfolio.html", target="_self")
            content.prepend(loader);
            console.log("tried 1st url")
        } else {
            window.open("./portfolio.html", target="_self")
            content.prepend(loader);
            console.log("tried 2nd url")
        }
    }, "1000");
};


let popupID = "report-bug";


const popup = document.createElement("IFRAME");


popup.id=popupID;

var toggleBox = {"active":false}

function reportbugOpen(){
    getLocation();
    setTimeout(() => {
        if (thisURL.includes("/additional") || thisURL.includes("/commercial")){
            popup.src="../report-bug.html"
        } else {
            popup.src="./report-bug.html"
        }
    }, "1000");
    document.body.insertBefore(popup, document.body.children[1])
    setTimeout(() => {
        console.log(popup.parentNode);
    }, "1000");
}

function closeBox(){
    let base = window.parent.document
    let del = base.getElementById("report-bug");
    popup.setAttribute("style", "-webkit-animation: fadeout 1s; -moz-animation: fadeout 1s; -ms-animation: fadeout 1s; -o-animation: fadeout 1s; animation: fadeout 1s;");
    setTimeout(() => {
        console.log("Success!")
        popup.style.display = "none";
        base.body.removeChild(del);
    }, "1000");
}

function reportbugClose(){ 
    window[0].alert ('success')
    setTimeout(() => {
        popup.style.opacity = "0.0";
        console.log(popup);
        popup.style.display = "none";
    }, "1000");
};

if (toggleBox.active == false){
    window.close();
}


const localize = {"Content-Security-Policy":"file:///D:/Coding/GitHub%20Repositories/portfolio/"}
new Headers(localize);
