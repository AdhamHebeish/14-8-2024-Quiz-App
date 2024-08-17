var score = 10;
var pass;
var wrongs = "";

function finish() {
    document.getElementById("testarea").classList.add("hidden");
    if (document.vte.q1.value != "b") {
        score -= 1;
        wrongs += " Q1,"
    }
    if (document.vte.q2.value != "c") {
        score -= 1;
        wrongs += " Q2,"
    }
    if (document.vte.q3.value != "a") {
        score -= 1;
        wrongs += " Q3,"
    }
    if (document.vte.q4.value != "a") {
        score -= 1;
        wrongs += " Q4,"
    }
    if (document.vte.q5.value != "d") {
        score -= 1;
        wrongs += " Q5,"
    }
    if (document.vte.q6.value != "c") {
        score -= 1;
        wrongs += " Q6,"
    }
    if (document.vte.q7.value != "c") {
        score -= 1;
        wrongs += " Q7,"
    }
    if (document.vte.q8.value != "d") {
        score -= 1;
        wrongs += " Q8,"
    }
    if (document.vte.q9.value != "d") {
        score -= 1;
        wrongs += " Q9,"
    }
    if (document.vte.q10.value != "a") {
        score -= 1;
        wrongs += " Q10,"
    }
    if (score < 5) {
        pass = false;
        document.getElementById("result").className = "fail";
        let button = document.createElement("div");
        button.className = "button";
        button.onclick = retake;
        button.innerHTML = "Retake";
        let buttoncontainer = document.createElement("div");
        buttoncontainer.className = "buttoncontainer";
        buttoncontainer.append(button);
        document.getElementById("result").append(buttoncontainer);
    } else {
        pass = true;
        document.getElementById("result").className = "pass";
        let link = document.createElement("a");
        link.href = "../main/main.html";
        link.innerHTML = "Back to Home";
        let button = document.createElement("div");
        button.className = "button";
        let buttoncontainer = document.createElement("div");
        buttoncontainer.className = "buttoncontainer";
        button.append(link);
        buttoncontainer.append(button);
        document.getElementById("result").append(buttoncontainer);
    }
    score = (score / 10) * 100;
    if (score > 90) {
        document.getElementById("wordgrade").innerHTML = "Outstanding";
    } else if (score > 80) {
        document.getElementById("wordgrade").innerHTML = "High";
    } else if (score > 70) {
        document.getElementById("wordgrade").innerHTML = "Good";
    } else if (score > 60) {
        document.getElementById("wordgrade").innerHTML = "Aspiring";
    } else if (score >= 50) {
        document.getElementById("wordgrade").innerHTML = "Basic";
    } else if (score < 50) {
        document.getElementById("wordgrade").innerHTML = "Failed"
    }
    if (wrongs != "") {
        wrongs = wrongs.replace(/.$/,".")
        var mistakes = document.createElement("p");
        mistakes.innerHTML = "Incorrect Questions:" + wrongs;
        mistakes.classList.add("s4");
        mistakes.id = "wrongquestions";
        document.getElementById("resultarea").prepend(mistakes)
    }
    document.getElementById("percentgrade").innerHTML = score + "%"
    document.getElementById("resultarea").classList.remove("hidden");
    button.remove();
    buttoncontainer.remove();
}

function retake() {
    window.location.reload();
}