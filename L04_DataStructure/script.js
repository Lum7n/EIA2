"use strict";
var WeWork4U;
(function (WeWork4U) {
    let amountValue;
    window.addEventListener("load", init);
    function init(_event) {
        WeWork4U.generateTableE();
        WeWork4U.generateTableH();
        WeWork4U.generateTableA();
        let lineE = document.getElementById("ArtikelIn");
        lineE.addEventListener("click", createLineE);
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
        slider.addEventListener("change", getAmount);
        let lineB = document.getElementById("BankIn");
        lineB.addEventListener("click", logAmount);
    }
    // create Table-Rows
    function createLineE() {
        let groupRow = document.createElement("tr");
        WeWork4U.tableE.appendChild(groupRow);
        //
        let formData = new FormData(document.querySelector("form"));
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            switch (entry[0]) {
                case "eArtikel":
                    let itemPrice = Number(item.getAttribute("price"));
                    let td1 = document.createElement("td");
                    td1.innerHTML += item.value;
                    groupRow.appendChild(td1);
                    let td2 = document.createElement("td");
                    td2.innerHTML += itemPrice.toFixed(2) + " €";
                    groupRow.appendChild(td2);
                    break;
                case "eStepper":
                    let td3 = document.createElement("td");
                    td3.innerHTML += item.value;
                    groupRow.appendChild(td3);
                    break;
                case "eRadio":
                    let td4 = document.createElement("td");
                    td4.innerHTML += item.value;
                    groupRow.appendChild(td4);
                    break;
                case "eLaden":
                    let td5 = document.createElement("td");
                    td5.innerHTML += item.value;
                    groupRow.appendChild(td5);
                    break;
                default:
            }
        }
    }
    function createLineH() {
        let groupRow = document.createElement("tr");
        WeWork4U.tableH.appendChild(groupRow);
        //
        let formData = new FormData(document.querySelector("form"));
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            switch (entry[0]) {
                case "hSelect":
                    let td1 = document.createElement("td");
                    td1.innerHTML += item.value;
                    groupRow.appendChild(td1);
                    break;
                case "hStepper":
                    let td2 = document.createElement("td");
                    td2.innerHTML += item.value;
                    groupRow.appendChild(td2);
                    break;
                case "hRadio":
                    let td3 = document.createElement("td");
                    td3.innerHTML = item.value;
                    groupRow.appendChild(td3);
                    break;
                case "hCheckbox":
                    // let td4: HTMLTableDataCellElement = document.createElement("td"); //nein, erstelle Zelle
                    // let x: number = 0;
                    // if (x == 0) { //schon eine checkbox durch gelaufen
                    //     let td4: HTMLTableDataCellElement = document.createElement("td");
                    //     td4.innerHTML += item.value;
                    //     groupRow.appendChild(td4);
                    //     x++;
                    // } else {
                    //     td4.innerHTML = td4.innerHTML + ", " + item.value; //ja, + item
                    // }
                    break;
                default:
            }
        }
    }
    function createLineA() {
        let groupRow = document.createElement("tr");
        WeWork4U.tableA.appendChild(groupRow);
        //
        let formData = new FormData(document.querySelector("form"));
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            switch (entry[0]) {
                case "aDatalist":
                    let td1 = document.createElement("td");
                    td1.innerHTML += item.value;
                    groupRow.appendChild(td1);
                    break;
                case "aRadio":
                    let td2 = document.createElement("td");
                    td2.innerHTML += item.value;
                    groupRow.appendChild(td2);
                    break;
                case "aInfos":
                    let feld = document.getElementById("aIn");
                    if (feld) {
                        let f;
                        f += feld.innerHTML;
                    }
                    console.log(f);
                    // let td3: HTMLTableDataCellElement = document.createElement("td");
                    // td3.innerHTML += item.value;
                    // groupRow.appendChild(td3);
                    break;
                default:
            }
        }
    }
    // bank-section
    function displayAmount(_event) {
        let target = _event.target;
        // amount response
        if (target.name == "Slider") {
            let output = document.querySelector("output#BankBetrag");
            output.value = target.value + " €";
        }
    }
    function getAmount(_event) {
        let changeAmount = _event.target;
        // get amount, push in amountValue
        if (changeAmount.name == "Slider") {
            amountValue = changeAmount.value;
        }
    }
    function logAmount(_event) {
        // amount log in
        let amount = document.querySelector("span#log");
        amount.innerHTML = amountValue + " € eingeloggt";
    }
    // checkout-section
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
})(WeWork4U || (WeWork4U = {}));
//# sourceMappingURL=script.js.map