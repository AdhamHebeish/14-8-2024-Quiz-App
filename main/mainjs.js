function login() {
    var mail = document.logform.mail.value;
    var pw = document.logform.pass.value;
    var err = document.getElementById("errortext");
    var acchead = document.getElementById("displaybar");
    var acctitle; 
    mail = mail.toString();
    pw = pw.toString();
    var mailtype;
    var acctype;
    if (pw == "vteadmin") {
        acctitle = "VTE";
        acchead.style.backgroundColor = "#bcb0aa";
    } else {
        acctype = "UUAT"; //UUAT stands for Undefined Unpermitted Account Type.
    }
    if (mail.includes("@gmail.com")) {
        mailtype = "Gmail";
    } else if (mail.includes("@outlook.com")) {
        mailtype = "Outlook";
    } else if (mail.includes("@microsoft.com")) {
        mailtype = "Microsoft";
    } else if (mail.includes("@yahoo.com")) {
        mailtype = "Yahoo";
    } else {
        mailtype = "UUMT"; //UUMT stands for Undefined Unpermitted Mail Type.
    }
    if (mailtype == "UUMT" && acctype == "UUAT") {
        err.innerHTML = "Please make sure you have created an account previously";
        document.logform.mail.value = "";
        document.logform.pass.value = "";
    } else if (mailtype == "UUMT") {
        err.innerHTML = "This mail is invalid";
        document.logform.mail.value = "";
        document.logform.pass.value = "";
    } else if (acctype == "UUAT") {
        err.innerHTML = "This password is incorrect";
        document.logform.pass.value = "";
    } else {
        document.getElementById("usertitle").innerHTML = acctitle;
        document.getElementById("login").classList.add("hidden");
        document.getElementById("body").classList.remove("hidden");
    }
}