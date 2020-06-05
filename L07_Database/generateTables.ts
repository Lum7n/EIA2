namespace WeWork4U_5 {

    export let tableE: HTMLTableElement = document.createElement("table");
    export let tableH: HTMLTableElement = document.createElement("table");
    export let tableA: HTMLTableElement = document.createElement("table");

    export function generateTableE(): void {
        let tab: HTMLDivElement = <HTMLDivElement>document.querySelector("div#tableE");

        let groupHead: HTMLTableRowElement = document.createElement("tr");
        let tH1: HTMLTableHeaderCellElement = document.createElement("th");
        tH1.innerHTML = ("Artikel");
        let tH2: HTMLTableHeaderCellElement = document.createElement("th");
        tH2.innerHTML = ("Preis");
        let tH3: HTMLTableHeaderCellElement = document.createElement("th");
        tH3.innerHTML = ("Menge");
        let tH4: HTMLTableHeaderCellElement = document.createElement("th");
        tH4.innerHTML = ("Einheit");
        let tH5: HTMLTableHeaderCellElement = document.createElement("th");
        tH5.innerHTML = ("Laden");

        tab.appendChild(tableE);
        tableE.appendChild(groupHead);
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

    export function generateTableH(): void {
        let tab: HTMLDivElement = <HTMLDivElement>document.querySelector("div#tableH");

        let groupHead: HTMLTableRowElement = document.createElement("tr");
        let tH1: HTMLTableHeaderCellElement = document.createElement("th");
        tH1.innerHTML = ("Objekt");
        let tH2: HTMLTableHeaderCellElement = document.createElement("th");
        tH2.innerHTML = ("Menge");
        let tH3: HTMLTableHeaderCellElement = document.createElement("th");
        tH3.innerHTML = ("Einheit");
        let tH4: HTMLTableHeaderCellElement = document.createElement("th");
        tH4.innerHTML = ("Tätigkeit");

        tab.appendChild(tableH);
        tableH.appendChild(groupHead);
        groupHead.appendChild(tH1);
        groupHead.appendChild(tH2);
        groupHead.appendChild(tH3);
        groupHead.appendChild(tH4);
        tH1.setAttribute("id", "Objekt");
        tH2.setAttribute("id", "Menge");
        tH3.setAttribute("id", "Einheit");
        tH4.setAttribute("id", "TätigkeitH");
    }

    export function generateTableA(): void {
        let tab: HTMLDivElement = <HTMLDivElement>document.querySelector("div#tableA");

        let groupHead: HTMLTableRowElement = document.createElement("tr");
        let tH1: HTMLTableHeaderCellElement = document.createElement("th");
        tH1.innerHTML = ("Sache");
        let tH2: HTMLTableHeaderCellElement = document.createElement("th");
        tH2.innerHTML = ("Tätigkeit");
        let tH3: HTMLTableHeaderCellElement = document.createElement("th");
        tH3.innerHTML = ("Zusatzinformationen");
        
        tab.appendChild(tableA);
        tableA.appendChild(groupHead);
        groupHead.appendChild(tH1);
        groupHead.appendChild(tH2);
        groupHead.appendChild(tH3);
        tH1.setAttribute("id", "Sache");
        tH2.setAttribute("id", "TätigkeitA");
        tH3.setAttribute("id", "Zusatzinfos");
    }

}