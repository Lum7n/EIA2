window.addEventListener("load", init);

function init(_event: Event): void {

    let lineE: HTMLElement = <HTMLElement>document.getElementById("ArtikelIn");
    lineE.addEventListener("click", createLineE);

    let lineB: HTMLElement = <HTMLElement>document.getElementById("BankIn");
    lineB.addEventListener("click", createLineB);

    let lineH: HTMLElement = <HTMLElement>document.getElementById("WorkIn");
    lineH.addEventListener("click", createLineH);

    let lineA: HTMLElement = <HTMLElement>document.getElementById("DiffIn");
    lineA.addEventListener("click", createLineA);


    let setW: HTMLElement = <HTMLElement>document.getElementById("getWhite");
    setW.addEventListener("click", setWhite);

    let setM: HTMLElement = <HTMLElement>document.getElementById("getMain");
    setM.addEventListener("click", setMain);


    let slider: HTMLElement = <HTMLElement>document.getElementById("Slider");
    slider.addEventListener("input", displayAmount);

    let formEinkaufen: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Einkaufen");
    formEinkaufen.addEventListener("change", handleChangeE);

    // let formBank: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Bank");
    // formBank.addEventListener("change", handleChangeB);

    // let formHaushalt: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Haushalt");
    // formHaushalt.addEventListener("change", handleChangeH);

    // let formAnderes: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Anderes");
    // formAnderes.addEventListener("change", handleChangeA);
}

function handleChangeE(): void {

    let tableE: HTMLTableDataCellElement = <HTMLTableDataCellElement>document.querySelector("div#tableE td");
    tableE.innerHTML = "";

    let formData: FormData = new FormData(document.forms[0]);
    for (let entry of formData) {
        let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
        let price: number = Number(item.getAttribute("price"));

        tableE.innerHTML += item.name + "  € " + price;
    }
}

function displayAmount(_event: Event): void {
    let target: HTMLInputElement = <HTMLInputElement>_event.target;

    // Amount response
    if (target.name == "Slider") {
        let ouput: HTMLOutputElement = <HTMLOutputElement>document.querySelector("output");
        ouput.value = target.value + " €";
    }
}

function createLineE(): void {
    console.log("e");
}

function createLineB(): void {
    console.log("b");

}

function createLineH(): void {
    console.log("h");

}

function createLineA(): void {
    console.log("a");

}

function setWhite(): void {
    var m: HTMLElement = <HTMLElement>document.getElementById("main");
    m.style.display = "none";
    var w: HTMLElement = <HTMLElement>document.getElementById("whiteCover");
    w.style.display = "contents";
}

function setMain(): void {
    var m: HTMLElement = <HTMLElement>document.getElementById("whiteCover");
    m.style.display = "none";
    var w: HTMLElement = <HTMLElement>document.getElementById("main");
    w.style.display = "contents";
}
