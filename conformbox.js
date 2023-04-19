
function myfunction() {
    var userconfirmation = confirm("Accept the terms and conditions to continue..");
    if (userconfirmation == true) {
        window.location.href = "bankingsector.html";
        return true;
    }
    else {
        document.write("please Accept The Terms and Conditions to visit the page ");
        return false;
    }
}

