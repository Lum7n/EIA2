var currentSeq;
var showshuffled;
var timeout;
window.addEventListener("load", function () {
    document.getElementById("input").addEventListener("keydown", help);
    document.getElementById("card").addEventListener("click", moveCards);
    document.getElementById("chooseSequence").addEventListener("click", choosenSeq);
    document.getElementById("sequence").addEventListener("change", getSequence);
    document.getElementById("start").addEventListener("click", start);
    document.getElementById("***???***").addEventListener("load", handleload);
});
function getSequence() {
    currentSeq = [document.getElementById("sequence").value];
}
function choosenSeq() {
    currentSeq = [document.getElementById("chooseSequence").textContent]; //innerText wär auch möglich
    //Listener ist auf parent gelegt, wie identifiziere ich das angeklickte child
    console.log(currentSeq);
}
function handleload() {
}
function start() {
}
function moveCards() {
    console.log("keine Ahnung");
}
function help() {
    var x = event.key;
    console.log(x);
    var y = document.getElementById("card").innerText;
    //wie durchsucht er alle Elemente mit der ID "cards" nach dem passenden Buchstaben?
    if (x == y) {
        document.getElementById("card").style.backgroundColor = "white";
    }
}
function timeup() {
    document.getElementById("card").style.backgroundColor = "black";
    setTimeout(function () { alert("times up"); }, timeout);
}
//# sourceMappingURL=script.js.map