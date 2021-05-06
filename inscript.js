window.onload = function() {
    hideRemainder();
    hideFail();
}

function attemptSubmit() {
    if (!validateForm()) {
        showFail();
        return false;
    }
    storeValues();
    return true;
}

function hideOnClear() {
    hideFail();
    hideRemainder();
}

function showFail() {
    var fail = document.getElementById("failed");
    fail.style.display = "block";
    fail.scrollIntoView();
}

function hideFail() {
    var fail = document.getElementById("failed");
    fail.style.display = "none";
}

function showRemainder() {
    var x = document.getElementById("remQuestions");
    x.style.display = "block";
}

function hideRemainder() {
    var x = document.getElementById("remQuestions");
    x.style.display = "none";
}

function validateForm() {
    var populated = true;

    let f = document.forms["survey"];
    let x = f["suburb"].value;
    if (x == "") {
        populated = false;
    }
    x = f["gender"].value;
    if (x == "") {
        populated = false;
    }
    x = f["age"].value;
    if (x == "") {
        populated = false;
    }
    x = f["heard"].value;
    if (x == "") {
        populated = false;
    }
    if (x == "No") {
        return populated;
    }
    var noSources = true;
    for (var i=0; i < f["source"].length; i++) {
        if (f["source"][i].checked) {
            noSources = false;
        }
    }
    if (noSources) {
        populated = false;
    }

    x = f["real"].value;
    if (x == "") {
        populated = false;
    }

    x = f["realReason"].value;
    if (x == "") {
        populated = false;
    }

    x = f["interested"].value;
    if (x == "") {
        populated = false;
    }
    x = f["compelling"].value;
    if (x == "") {
        populated = false;
    }

    x = f["gov"].value;
    if (x == "") {
        populated = false;
    }

    return populated;
}

function storeValues() {
    var s = localStorage;
    var f = document.forms["survey"];

    s.setItem("suburb", f["suburb"].value);
    s.setItem("gender", f["gender"].value);
    s.setItem("age", f["age"].value);
    s.setItem("heard", f["heard"].value);
    if (f["heard"].value == "No"){
        return;
    }

    var sources = [];
    for (let i=0; i < f["source"].length; i++) {
        if (f["source"][i].checked) {
            sources.push(f["source"][i].value)
        }
    }
    s.setItem("sources", sources.toString().trim());
    s.setItem("real", f["real"].value);
    s.setItem("realReason", f["realReason"].value);
    s.setItem("interested", f["interested"].value);
    s.setItem("compelling", f["compelling"].value);
    s.setItem("gov", f["gov"].value);
}
