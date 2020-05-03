let currentSeq: string[];
let showshuffled: number;
let timeout: number;

window.addEventListener("load", function (): void {
    document.getElementById("input").addEventListener("keydown", help);
    document.getElementById("card").addEventListener("click", moveCards);
    document.getElementById("chooseSequence").addEventListener("click", choosenSeq);
    document.getElementById("sequence").addEventListener("change", getSequence);
    document.getElementById("start").addEventListener("click", start);
    document.getElementById("***???***").addEventListener("load", handleload);
});

function getSequence(): void {
    currentSeq = [document.getElementById("sequence").value];
}

function choosenSeq(): void {
    currentSeq = [document.getElementById("chooseSequence").textContent]; //innerText wär auch möglich
    //Listener ist auf parent gelegt, wie identifiziere ich das angeklickte child
    console.log(currentSeq);
}

function handleload(): void {

}

function start(): void {

}

function moveCards(): void {
    console.log("keine Ahnung");
}

function help(): void {
    var x: string = event.key;
    console.log(x);
    var y: string = document.getElementById("card").innerText;
    //wie durchsucht er alle Elemente mit der ID "cards" nach dem passenden Buchstaben?
    if (x == y) {
        document.getElementById("card").style.backgroundColor = "white";
    }
}

function timeup(): void {
    document.getElementById("card").style.backgroundColor = "black";
    setTimeout(function (): void { alert("times up"); }, timeout);
}