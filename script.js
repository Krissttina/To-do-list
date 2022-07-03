var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var eve = JSON.parse(localStorage.getItem("list_eve")) || [];
function renderEve() {
    listElement.innerHTML = "";

    for (ev of eve){
        var evElement = document.createElement("li");
        var evText = document.createTextNode(ev);
        var linkElement = document.createElement("a");

        linkElement.setAttribute("href", "#");
        var po = eve.indexOf(ev);
        linkElement.setAttribute("onclick", "deleteEv(" + po +")");

        var linkText = document.createTextNode("done");
        linkElement.appendChild(linkText);

        evElement.appendChild(evText);
        evElement.appendChild(linkElement);
        linkElement.appendChild(evElement);
    }
}

renderEve();
function addEv(){
    var evText = inputElement.value;

    eve.push(evText);
    inputElement.value = "";
    renderEve();
    saveToStorage();
}

buttonElement.onclick = addEv;
function deleteEv(po){
    eve.splice(po, 1);
    renderEve();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem("list_eve", JSON.stringify(eve));
}