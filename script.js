/*--- PRELOADER ---*/
const bg = document.getElementsByTagName('html')[0].style;
bg.backgroundColor = ""

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

    if (relativeURL.includes("/projects")){
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

let loadedPDF = document.getElementById('pdf')

function init(){
    try{checkMobile();}
    catch{}
    loader = document.getElementById('preloader');
    let URL = document.URL.toString()

    function closeLoader(){
        setTimeout(() => {
            loader.style.opacity = "0"
        }, "1000");
        setTimeout(() => {
            loader.style.display = "none"
        }, "2000");
        base = this.window;
    }
    closeLoader();
    /*if (URL.includes("/data-vis") == true){
        
    } else{}*/
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
        if (thisURL.includes("/projects")){
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
        if (thisURL.includes("/projects")){
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

function viewPortfolio(){
    pageTransition();
    getLocation();
    setTimeout(() => {
        if (thisURL.includes("/project")){
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
        if (thisURL.includes("/project")){
            popup.src="../report-bug.html"
        } else {
            popup.src="./report-bug.html"
        }
    }, "10");
    document.body.insertBefore(popup, document.body.children[1])
    popup.style.opacity = "1.0";
    popup.style.animation = "fadein 1s";
    popup.style.display = "block";
    setTimeout(() => {
        console.log(popup.parentNode);
    }, "1000");
}

function closeBox(){
    let base = window.parent.document
    let del = base.getElementById("report-bug");
    del.style.opacity = "0.0"
    del.style.animation = "fadeout 1s";
    setTimeout(() => {
        console.log("Success!")
        popup.style.display = "none";
        base.body.removeChild(del);
    }, "1000");
}

function checkMobile(){
    let mobile = ""
    let browserInfo = navigator.userAgentData.brands[navigator.userAgentData.brands.length - 1];
    let report = document.getElementById('footer').children[1];
    
    if (browserInfo != undefined){
        mobile = false;
    } else {
        mobile = true;
    };
    
    if (mobile == true){
        report.style.display = "none"
        console.log(report.style.display)
        console.log('Mobile User')
    } else if (mobile == false){
        report.style.display = "inline-block"
        console.log(report.style.display)
        console.log('Desktop User')
    };
 }

function reportbugClose(){ 
    window[0].alert ('success');
    del.setAttribute("style", "transform: opacity (0.0)");
    setTimeout(() => {
        popup.style.opacity = "0.0";
        console.log(popup);
        popup.style.display = "none";
    }, "1000");
};

const localize = {"Content-Security-Policy":"file:///D:/Coding/GitHub%20Repositories/portfolio/"}
new Headers(localize);