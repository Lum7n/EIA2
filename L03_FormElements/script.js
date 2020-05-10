"use strict";
window.addEventListener("load", init);
function init(_event) {
    let lineE = document.getElementById("ArtikelIn");
    lineE.addEventListener("click", createLineE);
    let lineB = document.getElementById("BankIn");
    lineB.addEventListener("click", createLineB);
    let lineH = document.getElementById("WorkIn");
    lineH.addEventListener("click", createLineH);
    let lineA = document.getElementById("DiffIn");
    lineA.addEventListener("click", createLineA);
    let setW = document.getElementById("getWhite");
    setW.addEventListener("click", setWhite);
    let setM = document.getElementById("getMain");
    setM.addEventListener("click", setMain);
    let slider = document.getElementById("Slider");
    slider.addEventListener("input", displayAmount);
    let formEinkaufen = document.querySelector("div#Einkaufen");
    formEinkaufen.addEventListener("change", handleChangeE);
    // let formBank: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Bank");
    // formBank.addEventListener("change", handleChangeB);
    // let formHaushalt: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Haushalt");
    // formHaushalt.addEventListener("change", handleChangeH);
    // let formAnderes: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Anderes");
    // formAnderes.addEventListener("change", handleChangeA);
}
function handleChangeE() {
    let tableE = document.querySelector("div#tableE td");
    tableE.innerHTML = "";
    let formData = new FormData(document.forms[0]);
    for (let entry of formData) {
        let item = document.querySelector("[value='" + entry[1] + "']");
        let price = Number(item.getAttribute("price"));
        tableE.innerHTML += item.name + "  € " + price;
    }
}
function displayAmount(_event) {
    let target = _event.target;
    // Amount response
    if (target.name == "Slider") {
        let ouput = document.querySelector("output");
        ouput.value = target.value + " €";
    }
}
function createLineE() {
    console.log("e");
}
function createLineB() {
    console.log("b");
}
function createLineH() {
    console.log("h");
}
function createLineA() {
    console.log("a");
}
function setWhite() {
    var m = document.getElementById("main");
    m.style.display = "none";
    var w = document.getElementById("whiteCover");
    w.style.display = "contents";
}
function setMain() {
    var m = document.getElementById("whiteCover");
    m.style.display = "none";
    var w = document.getElementById("main");
    w.style.display = "contents";
}
//# sourceMappingURL=script.js.map