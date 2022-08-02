// ONLOAD FUNCTIONS
function onload(){
    buildGalleryCategories();
    filterClose();
}

// FILTER VARIABLES
const filterList = document.getElementById('filter-options');
const filterControls = document.getElementById('filter');

var filterOpened = false;


// FILTER FUNCTIONS
function toggleFilter(){
    if (filterOpened == false){
        filterOpen();
    } else if (filterOpened == true){
        filterClose();
    };
    
};

function filterOpen(){
    filterList.setAttribute("style", "display: block;")
    filterControls.children[1].setAttribute("style", "background-color: rgba(54, 86, 115, 0.6)")
    filterOpened = true;
};

function filterClose(){
    filterList.setAttribute("style", "display: none;")
    filterOpened = false;
    filterControls.children[1].setAttribute("style", "background-color: rgba(54, 86, 115, 1.0)")
};


// GALLERY VARIABLES
const gallery = document.getElementById('gallery');
const items = gallery.children;
const allTags = document.querySelectorAll('.tags');
const allTitles = document.querySelectorAll('.title')

var i = 0;
var classes = "";

const myJSON = '{"title":"", "tags":"", "media-type":["page","file","lightbox"]}';
var listCategories = {}

let title = "";
let tags = "";



let tagDisplay = allTags[i].parentElement.lastChild.innerHTML;


// GALLERY FUNCTIONS
function buildGalleryCategories(){
    for (i = 0; i < allTags.length; i++) {
        classes = items[i].classList;
        
        console.log(classes);
        if (classes.contains('animation') == true) {
            if (allTags[i].innerHTML !== " ") {
                allTags[i].innerHTML += "&nbsp&nbsp&nbsp//&nbsp&nbsp&nbspAnimation"
            } else {
                allTags[i].innerHTML += "Animation";
                console.log(allTags[i].parentElement);
            }
        };
        if (classes.contains('project-management') == true) {
            if (allTags[i].innerHTML !== " ") {
                allTags[i].innerHTML += "&nbsp&nbsp&nbsp//&nbsp&nbsp&nbspProject Management"
            } else {
                allTags[i].innerHTML += "Project Management";
                console.log("Project Management")
            }
        }; 
        if (classes.contains('graphic-design') == true) {
            if (allTags[i].innerHTML !== " ") {
                allTags[i].innerHTML += "&nbsp&nbsp&nbsp//&nbsp&nbsp&nbspGraphic Design"
            } else {
                allTags[i].innerHTML += "Graphic Design";
                console.log("Graphic Design")
            }
        };
        if (classes.contains('print-design') == true) {
            if (allTags[i].innerHTML !== " ") {
                allTags[i].innerHTML += "&nbsp&nbsp&nbsp//&nbsp&nbsp&nbspPrint Design"
            } else {
                allTags[i].innerHTML += "Print Design";
                console.log("Print Design")
            }

        };
        if (classes.contains('case-study') == true) {
            if (allTags[i].innerHTML !== " ") {
                allTags[i].innerHTML += "&nbsp&nbsp&nbsp//&nbsp&nbsp&nbspCase Study"
            } else {
                allTags[i].innerHTML += "Case Study";
                console.log("Case Study");
            }
        };
        
        title = allTitles[i].parentElement.firstChild.alt.toString();
        tags = allTags[i].parentElement.classList.toString();
        allTitles[i].innerHTML = title;
        listCategories[title] = tags;
        console.log(title);

    }
}

function sortGalleries(){
    for (allTags; classes.contains('animation') == true;) {
        items[i].style.visibility = "hidden";
    };
};

