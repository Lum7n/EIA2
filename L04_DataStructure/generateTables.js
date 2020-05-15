"use strict";
var WeWork4U;
(function (WeWork4U) {
    WeWork4U.tableE = document.createElement("table");
    WeWork4U.tableH = document.createElement("table");
    WeWork4U.tableA = document.createElement("table");
    function generateTableE() {
        let tab = document.querySelector("div#tableE");
        let groupHead = document.createElement("tr");
        let tH1 = document.createElement("th");
        tH1.innerHTML = ("Artikel");
        let tH2 = document.createElement("th");
        tH2.innerHTML = ("Preis");
        let tH3 = document.createElement("th");
        tH3.innerHTML = ("Menge");
        let tH4 = document.createElement("th");
        tH4.innerHTML = ("Einheit");
        let tH5 = document.createElement("th");
        tH5.innerHTML = ("Laden");
        tab.appendChild(WeWork4U.tableE);
        WeWork4U.tableE.appendChild(groupHead);
        groupHead.appendChild(tH1);
        groupHead.appendChild(tH2);
        groupHead.appendChild(tH3);
        groupHead.appendChild(tH4);
        groupHead.appendChild(tH5);
        tH1.setAttribute("id", "Artikel");
        tH2.setAttribute("id", "Preis");
        tH3.setAttribute("id", "Menge");
        tH4.setAttribute("id", "Einheit");
        tH5.setAttribute("id", "Laden");
    }
    WeWork4U.generateTableE = generateTableE;
    function generateTableH() {
        let tab = document.querySelector("div#tableH");
        let groupHead = document.createElement("tr");
        let tH1 = document.createElement("th");
        tH1.innerHTML = ("Objekt");
        let tH2 = document.createElement("th");
        tH2.innerHTML = ("Menge");
        let tH3 = document.createElement("th");
        tH3.innerHTML = ("Einheit");
        let tH4 = document.createElement("th");
        tH4.innerHTML = ("Tätigkeit");
        tab.appendChild(WeWork4U.tableH);
        WeWork4U.tableH.appendChild(groupHead);
        groupHead.appendChild(tH1);
        groupHead.appendChild(tH2);
        groupHead.appendChild(tH3);
        groupHead.appendChild(tH4);
        tH1.setAttribute("id", "Objekt");
        tH2.setAttribute("id", "Menge");
        tH3.setAttribute("id", "Einheit");
        tH4.setAttribute("id", "TätigkeitH");
    }
    WeWork4U.generateTableH = generateTableH;
    function generateTableA() {
        let tab = document.querySelector("div#tableA");
        let groupHead = document.createElement("tr");
        let tH1 = document.createElement("th");
        tH1.innerHTML = ("Sache");
        let tH2 = document.createElement("th");
        tH2.innerHTML = ("Tätigkeit");
        let tH3 = document.createElement("th");
        tH3.innerHTML = ("Zusatzinformationen");
        tab.appendChild(WeWork4U.tableA);
        WeWork4U.tableA.appendChild(groupHead);
        groupHead.appendChild(tH1);
        groupHead.appendChild(tH2);
        groupHead.appendChild(tH3);
        tH1.setAttribute("id", "Sache");
        tH2.setAttribute("id", "TätigkeitA");
        tH3.setAttribute("id", "Zusatzinfos");
    }
    WeWork4U.generateTableA = generateTableA;
})(WeWork4U || (WeWork4U = {}));
//# sourceMappingURL=generateTables.js.map