(function(){
    emailjs.init("tKIzuEHgvL05hklFn");
})();

let attempted = ""


function validate() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const msgInput = document.getElementById("message");
    const inputs = document.getElementsByClassName("report");
    const invalid = document.getElementById("invalid");
    if (attempted == "true" && nameInput.validity.valid == false || attempted == "true" && emailInput.validity.valid == false || attempted == "true" && msgInput.validity.valid == false){
        if (emailInput.validity.valid == false) {
            emailInput.style.border="5px red solid"
            invalid.style.display = "block";
        } else {
            emailInput.style.border="none"
        };
        if (nameInput.validity.valid == false) {
            nameInput.style.border="5px red solid"
            invalid.style.display = "block";
        } else {
            nameInput.style.border="none"
        };
        if (msgInput.validity.valid == false) {
            msgInput.style.border="5px red solid"
            invalid.style.display = "block";
        } else {
            msgInput.style.border="none"
        };
    } else {
        emailInput.style.border="none"
        nameInput.style.border="none"
        msgInput.style.border="none"
        invalid.style.visibility = "hidden"
    };
}

function reportIssue(){
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const msgInput = document.getElementById("message");
    const inputs = document.getElementsByClassName("report");
    const invalid = document.getElementById("invalid");
    validate();
    var windowSize = window.innerWidth.toString() + " x " + window.innerHeight.toString();
    var browserInfo = navigator.userAgentData.brands[navigator.userAgentData.brands.length - 1].brand;

    if (nameInput.validity.valid == false || emailInput.validity.valid == false || msgInput.validity.valid == false){
        if (emailInput.validity.valid == false) {
            emailInput.style.border="5px red solid"
            invalid.style.visibility = "visible";
        } if (nameInput.validity.valid == false) {
            nameInput.style.border="5px red solid"
            invalid.style.visibility = "visible";
        } if (msgInput.validity.valid == false) {
            msgInput.style.border="5px red solid"
            invalid.style.visibility = "visible";
        }
        console.log("Error: Fill out the form");
        attempted = "true"
    } else {
        var templateParams = {
            name: nameInput.value,
            replyto: emailInput.value,
            message: msgInput.value,
            window: windowSize,
            browser: browserInfo
        };
        invalid.style.visibility = "hidden"
        sendEmail();
    }

    function sendEmail(){
        emailjs.send('happy-place-email', 'bug-report-form', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text, windowSize);
        }, function(error) {
            console.log('FAILED...', error);
        });
    }
};