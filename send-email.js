(function(){
    emailjs.init("tKIzuEHgvL05hklFn");
})();

window.onload = function() {
    document.getElementById('reportArea').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        
    });
}

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

    var windowSize = window.innerWidth.toString() + " x " + window.innerHeight.toString();
    var browserInfo = navigator.userAgentData.brands[navigator.userAgentData.brands.length - 1];
    var mobile = "Mobile Browser"    

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
        if (browserInfo != undefined){
            var templateParams = {
                name: nameInput.value,
                replyto: emailInput.value,
                message: msgInput.value,
                window: windowSize,
                browser: browserInfo
            }
        } else {
            var templateParams = {
                name: nameInput.value,
                replyto: emailInput.value,
                message: msgInput.value,
                window: windowSize,
                browser: mobile
            };
        }
        invalid.style.visibility = "hidden"
        sendEmail();
    }

    function sendEmail(){
        emailjs.send('happy-place-email', 'bug-report-form', templateParams)
                    .then(function() {
                        if (browserInfo == undefined){
                            console.log('SUCCESS! ' + mobile);
                            document.getElementById('submitted').style = "display: block";
                            nameInput.value = "";
                            emailInput.value = "";
                            msgInput.value = "";
                        } else {
                            console.log("Success" + browserInfo.brand)
                            document.getElementById('submitted').style = "display: block";
                            nameInput.value = "";
                            emailInput.value = "";
                            msgInput.value = "";document.getElementById('submitted').style = "display: block";
                            nameInput.value = "";
                            emailInput.value = "";
                            msgInput.value = "";
                        }
                        
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
    }
};