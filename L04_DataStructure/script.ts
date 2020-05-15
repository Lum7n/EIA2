namespace WeWork4U {

    let amountValue: string;

    window.addEventListener("load", init);

    function init(_event: Event): void {

        generateTableE();
        generateTableH();
        generateTableA();


        let lineE: HTMLElement = <HTMLElement>document.getElementById("ArtikelIn");
        lineE.addEventListener("click", createLineE);

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
        slider.addEventListener("change", getAmount);

        let lineB: HTMLElement = <HTMLElement>document.getElementById("BankIn");
        lineB.addEventListener("click", logAmount);
    }

    // create Table-Rows

    function createLineE(): void {

        let groupRow: HTMLTableRowElement = document.createElement("tr");
        tableE.appendChild(groupRow);

        //
        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form"));

        for (let entry of formData) {

            let selector: string = "[value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            switch (entry[0]) {
                case "eArtikel":
                    let itemPrice: number = Number(item.getAttribute("price"));
                    let td1: HTMLTableDataCellElement = document.createElement("td");
                    td1.innerHTML += item.value;
                    groupRow.appendChild(td1);
                    let td2: HTMLTableDataCellElement = document.createElement("td");
                    td2.innerHTML += itemPrice.toFixed(2) + " €";
                    groupRow.appendChild(td2);
                    break;
                case "eStepper":
                    let td3: HTMLTableDataCellElement = document.createElement("td");
                    td3.innerHTML += item.value;
                    groupRow.appendChild(td3);
                    break;
                case "eRadio":
                    let td4: HTMLTableDataCellElement = document.createElement("td");
                    td4.innerHTML += item.value;
                    groupRow.appendChild(td4);
                    break;
                case "eLaden":
                    let td5: HTMLTableDataCellElement = document.createElement("td");
                    td5.innerHTML += item.value;
                    groupRow.appendChild(td5);
                    break;
                default:
            }
        }
    }

    function createLineH(): void {

        let groupRow: HTMLTableRowElement = document.createElement("tr");
        tableH.appendChild(groupRow);

        //
        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form"));

        for (let entry of formData) {

            let selector: string = "[value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            switch (entry[0]) {
                case "hSelect":
                    let td1: HTMLTableDataCellElement = document.createElement("td");
                    td1.innerHTML += item.value;
                    groupRow.appendChild(td1);
                    break;
                case "hStepper":
                    let td2: HTMLTableDataCellElement = document.createElement("td");
                    td2.innerHTML += item.value;
                    groupRow.appendChild(td2);
                    break;
                case "hRadio":
                    let td3: HTMLTableDataCellElement = document.createElement("td");
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

    function createLineA(): void {

        let groupRow: HTMLTableRowElement = document.createElement("tr");
        tableA.appendChild(groupRow);

        //
        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form"));

        for (let entry of formData) {

            let selector: string = "[value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            switch (entry[0]) {
                case "aDatalist":
                    let td1: HTMLTableDataCellElement = document.createElement("td");
                    td1.innerHTML += item.value;
                    groupRow.appendChild(td1);
                    break;
                case "aRadio":
                    let td2: HTMLTableDataCellElement = document.createElement("td");
                    td2.innerHTML += item.value;
                    groupRow.appendChild(td2);
                    break;
                case "aInfos":
                    let feld: HTMLElement | null = document.getElementById("aIn");
                    if (feld) {
                        let f: string;
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

    function displayAmount(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        // amount response
        if (target.name == "Slider") {
            let output: HTMLOutputElement = <HTMLOutputElement>document.querySelector("output#BankBetrag");
            output.value = target.value + " €";
        }
    }

    function getAmount(_event: Event): void {
        let changeAmount: HTMLInputElement = <HTMLInputElement>_event.target;

        // get amount, push in amountValue
        if (changeAmount.name == "Slider") {
            amountValue = changeAmount.value;
        }
    }

    function logAmount(_event: Event): void {
        // amount log in
        let amount: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span#log");
        amount.innerHTML = amountValue + " € eingeloggt";
    }

    // checkout-section

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

}
