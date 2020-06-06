namespace WeWork4U_5 {

    // let url: string = "https://lum7n.herokuapp.com";
    let url: string = "http://localhost:5001";

    let amountValue: string;
    let amount: HTMLSpanElement;

    window.addEventListener("load", init);

    async function init(_event: Event): Promise<void> {

        let response: Response = await fetch("data.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);

        //get submit und reset button
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#submit");
        let reset: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=reset]");
        submit.addEventListener("click", sendOrder);
        reset.addEventListener("click", resetOrder);

        //get show und hide button
        let show: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#show");
        let hide: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#hide");
        show.addEventListener("click", showOrderedTasks);
        hide.addEventListener("click", resetSpan);

        generateTableE();
        generateTableH();
        generateTableA();

        generateContent(data);

        let lineE: HTMLElement = <HTMLElement>document.getElementById("ArtikelIn");
        lineE.addEventListener("click", createLineE);

        let lineH: HTMLElement = <HTMLElement>document.getElementById("WorkIn");
        lineH.addEventListener("click", createLineH);

        let lineA: HTMLElement = <HTMLElement>document.getElementById("DiffIn");
        lineA.addEventListener("click", createLineA);


        // let setW: HTMLElement = <HTMLElement>document.getElementById("getWhite");
        // setW.addEventListener("click", setWhite);

        // let setM: HTMLElement = <HTMLElement>document.getElementById("getMain");
        // setM.addEventListener("click", setMain);


        let slider: HTMLElement = <HTMLElement>document.getElementById("slider");
        slider.addEventListener("input", displayAmount);
        slider.addEventListener("change", getAmount);

        let lineB: HTMLElement = <HTMLElement>document.getElementById("BankIn");
        lineB.addEventListener("click", logAmount);
    }

    async function sendOrder(_event: Event): Promise<void> {
        console.log("send order");
        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form"));
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        alert(responseText);
    }

    function resetOrder(_event: Event): void {
        tableE.innerHTML = "";
        generateTableE();

        amount.innerHTML = "";

        tableH.innerHTML = "";
        generateTableH();

        tableA.innerHTML = "";
        generateTableA();
    }


    async function showOrderedTasks(_event: Event): Promise<void> {
        let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#orderedTasks");
        let response: Response = await fetch(url + "?" + "getTasks=yes");
        span.innerHTML = "";
        let responseText: string = await response.text();
        let reT2: string = responseText.replace(/\\|{|}|"|/g, "");
        console.log(reT2);
        for (let entry of reT2) {
            switch (entry) {
            case("_"):
            span.innerHTML += "<br>" + "Bestell-ID: " + entry ; 
            break;
            case("["):
            break; 
            case("]"): 
            break; 
            case(","): 
            span.innerHTML += "<br>"; 
            break; 
            case(":"):
            span.innerHTML += entry + " "; 
            break; 
            default:
            span.innerHTML += "" + entry ; 
            break; 
            }
        }
        console.log(responseText); 
    }

    function resetSpan(): void {
        let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#orderedTasks");
        span.innerHTML = "";
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
                    let info: HTMLInputElement = <HTMLInputElement>document.querySelector("input#eStepperID");
                    let text: string | null = info.value;
                    if (text) {
                        let td3: HTMLTableDataCellElement = document.createElement("td");
                        td3.innerHTML += text;
                        groupRow.appendChild(td3);
                        break;
                    }
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
                    let info: HTMLInputElement = <HTMLInputElement>document.querySelector("input#hStepperID");
                    let text: string | null = info.value;
                    if (text) {
                        let td2: HTMLTableDataCellElement = document.createElement("td");
                        td2.innerHTML += text;
                        groupRow.appendChild(td2);
                        break;
                    }
                case "hRadio":
                    let td3: HTMLTableDataCellElement = document.createElement("td");
                    td3.innerHTML = item.value;
                    groupRow.appendChild(td3);
                    break;
                case "hCheckbox":
                    console.log(item.value);
                    let td4: HTMLTableDataCellElement = document.createElement("td");
                    td4.innerHTML = item.value;
                    groupRow.appendChild(td4);
                    break;
                // let td4: HTMLTableDataCellElement = document.createElement("td"); 
                // let x: number = 0;
                // if (x == 0) { //schon eine checkbox durch gelaufen
                //     let td4: HTMLTableDataCellElement = document.createElement("td");
                //     td4.innerHTML += item.value;
                //     groupRow.appendChild(td4);
                //     x++;
                // } else {
                //     td4.innerHTML = td4.innerHTML + ", " + item.value; //ja, + item
                // }
                // break;
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
                    let info: HTMLInputElement = <HTMLInputElement>document.querySelector("textarea#aIn");
                    let text: string | null = info.value;
                    if (text) {
                        let td3: HTMLTableDataCellElement = document.createElement("td");
                        td3.innerHTML += text;
                        groupRow.appendChild(td3);
                    }
                    break;
                default:
            }


        }

    }

    // bank-section

    function displayAmount(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        // amount response
        if (target.name == "slider") {
            let output: HTMLOutputElement = <HTMLOutputElement>document.querySelector("output#BankBetrag");
            output.value = target.value + " €";
        }
    }

    function getAmount(_event: Event): void {
        let changeAmount: HTMLInputElement = <HTMLInputElement>_event.target;

        // get amount, push in amountValue
        if (changeAmount.name == "slider") {
            amountValue = changeAmount.value;
        }
    }

    function logAmount(_event: Event): void {
        // amount log in
        amount = <HTMLSpanElement>document.querySelector("span#log");
        amount.innerHTML = amountValue + " € eingeloggt";
    }

    // checkout-section

    // function setWhite(): void {
    //     var m: HTMLElement = <HTMLElement>document.getElementById("main");
    //     m.style.display = "none";
    //     var w: HTMLElement = <HTMLElement>document.getElementById("whiteCover");
    //     w.style.display = "contents";
    // }

    // function setMain(): void {
    //     var m: HTMLElement = <HTMLElement>document.getElementById("whiteCover");
    //     m.style.display = "none";
    //     var w: HTMLElement = <HTMLElement>document.getElementById("main");
    //     w.style.display = "contents";
    // }

}