var submit= document.getElementById('check-pw');
var pw = document.getElementById('enter-pw')

submit.addEventListener("click", function checkPW(){
    console.log(pw.value)
    if(pw.value == "Aquimo_99") {
        alert("Success!");
        window.open("./portfolio/commercial-projects/commercial.html");
    };
    if (pw.value !== "Aquimo_99" && pw.value !== "") {
        alert("Incorrect Password");
    }
});