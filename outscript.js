window.onload = function() {
    var newSubButton = document.getElementById("newSubmission");
    newSubButton.addEventListener("click", newSubmission);
    var clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", clear);
    var clearMsg = document.getElementById("cleared");
    clearMsg.style.display = "none";
    populateResp();

}

function showResp() {
    var but = document.getElementById("showhide");
    but.style.display = "none";
    var x = document.getElementById("response");
    x.style.display = "block";
}

function clear() {
    var resp = document.getElementById("response");
    resp.style.display = "none";
    localStorage.clear();
    var clearMsg = document.getElementById("cleared");
    clearMsg.style.display = "block";
}

function newSubmission() {
    localStorage.clear();
    window.location.href = "survey.html";
}

function populateResp() {
    var s = localStorage;
    var r = document.getElementById("response");
    if (s.getItem("suburb") == null) {
        clear();
        return;
    }

    var newEl = document.createElement("li");
    newEl.innerHTML = "<h4>Suburb: </h4>" + s.getItem("suburb");
    r.appendChild(newEl);

    newEl = document.createElement("li");
    newEl.innerHTML = "<h4>Age range: </h4>" + s.getItem("age");
    r.appendChild(newEl);

    newEl = document.createElement("li");
    newEl.innerHTML = "<h4>Gender: </h4>" + s.getItem("gender");
    r.appendChild(newEl);

    newEl = document.createElement("li");
    newEl.innerHTML = "<h4>Heard of Climate Change: </h4>" + s.getItem("heard");
    r.appendChild(newEl);

    if (s.getItem("heard") == "No") {
        return;
    }
    r.appendChild(document.createElement("li"));
    r.lastChild.innerHTML = "<h4>From sources: </h4>" + s.getItem("sources");

    newEl = document.createElement("li");
    newEl.innerHTML = "<h4>Is climate change real?: </h4>" + s.getItem("real");
    r.appendChild(newEl);

    newEl = document.createElement("li");
    newEl.innerHTML = "<h4>Your reason(s): </h4>" + s.getItem("realReason");
    r.appendChild(newEl);

    newEl = document.createElement("li");
    newEl.innerHTML = "<h4>You are " + s.getItem("interested") + " interested in the topic.</h4>";
    r.appendChild(newEl);

    newEl = document.createElement("li");
    newEl.innerHTML = "<h4>You find the scientific evidence " + s.getItem("compelling") + " compelling.</h4>";
    r.appendChild(newEl);

    newEl = document.createElement("li");
    newEl.innerHTML = "<h4>You think the government is investing " + s.getItem("gov") + " into the area of climate change.</h4>";
    r.appendChild(newEl);
}
