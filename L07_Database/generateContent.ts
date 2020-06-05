namespace WeWork4U_5 {

    export interface Item {
        title: string;
        type: string;
        price: number;
        id: string;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export function generateContent(_data: Data): void {
        for (let category in _data) {
            let items: Item[] = _data[category];
            let group: HTMLElement | null = null;
            switch (category) {

                // Einkaufen
                case "eArtikel":
                    group = createDatalist(items, category);
                    break;
                case "eStepper":
                    group = createStepper(items, category);
                    break;
                case "eRadio":
                    group = createRadio(items, category);
                    break;
                case "eLaden":
                    group = createDatalist(items, category);
                    break;

                //Bank
                // case "slider":
                //     group = createSlider(items, category);
                //     break;

                //Haushalt
                case "hSelect":
                    group = createSelect(items, category);
                    break;
                case "hStepper":
                    group = createStepper(items, category);
                    break;
                case "hRadio":
                    group = createRadio(items, category);
                    break;
                case "hCheckbox":
                    group = createCheckbox(items, category);
                    break;

                //Anderes
                case "aDatalist":
                    group = createDatalist(items, category);
                    break;
                case "aRadio":
                    group = createRadio(items, category);
                    break;
                    
                default:
                    break;
            }

            let span: HTMLSpanElement | null = document.querySelector("span#" + category);
            if (span && group)              // wenn span und group definiert sind, bezogen auf null
                span.appendChild(group);
        }
    }

    function createDatalist(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLSpanElement = document.createElement("span");
        let input: HTMLInputElement = document.createElement("input");
        input.type = "text";
        input.name = _category;
        input.setAttribute("list", _category + "Options");
        switch (_category) {
            case "eArtikel":
                input.placeholder = "Artikel";
                break;
            case "eLaden":
                input.placeholder = "Laden";
                break;
            case "aDatalist":
                input.placeholder = "Anderes";
                break;
            default:
                break;
        }
        group.appendChild(input);
        let datalist: HTMLDataListElement = document.createElement("datalist");
        datalist.id = _category + "Options";
        group.appendChild(datalist);
        for (let item of _items) {
            let option: HTMLOptionElement = document.createElement("option");
            option.setAttribute("price", item.price.toFixed(2));
            option.value = item.title;
            option.textContent = item.title;

            datalist.appendChild(option);
        }
        return group;
    }

    function createStepper(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLSpanElement = document.createElement("span");
        for (let item of _items) {
            let input: HTMLInputElement = document.createElement("input");
            input.type = item.type;
            input.name = _category;
            input.step = "1";
            input.min = "1";
            input.max = "25";
            input.value = item.title;
            input.id = _category + "ID";

            group.appendChild(input);
        }
        return group;
    }

    function createRadio(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLSpanElement = document.createElement("span");
        for (let item of _items) {
            let radio: HTMLInputElement = document.createElement("input");
            radio.type = item.type;
            radio.name = _category;
            radio.value = item.title;
            radio.id = item.id;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.title;
            label.htmlFor = item.id;

            let breakTag: HTMLBRElement = document.createElement("br");

            group.appendChild(radio);
            group.appendChild(label);
            group.appendChild(breakTag);
        }
        return group;
    }

    function createSelect(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLSpanElement = document.createElement("span");
        let select: HTMLSelectElement = document.createElement("select");
        select.name = _category;
        group.appendChild(select);
        for (let item of _items) {
            switch (item.type) {
                case "optgroup":
                    let optGroup: HTMLOptGroupElement = document.createElement("optgroup");
                    optGroup.label = item.title;
                    select.appendChild(optGroup);
                    break;
                case "option":
                    let option: HTMLOptionElement = document.createElement("option");
                    option.value = item.title;
                    option.textContent = item.title;
                    select.appendChild(option);
                    break;
                default:
                    break;
            }
        }
        return group;
    }

    function createCheckbox(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLSpanElement = document.createElement("span");
        let checkGr1: HTMLSpanElement = document.createElement("span");
        checkGr1.id = "checkGr1";
        let checkGr2: HTMLSpanElement = document.createElement("span");
        checkGr2.id = "checkGr2";
        let checkGr3: HTMLSpanElement = document.createElement("span");
        checkGr3.id = "checkGr3";
        let checkGr4: HTMLSpanElement = document.createElement("span");
        checkGr4.id = "checkGr4";
        for (let item of _items) {
            switch (item.id) {
                case "check1.1":
                case "check1.2":
                case "check1.3":
                    let checkbox1: HTMLInputElement = document.createElement("input");
                    checkbox1.type = item.type;
                    checkbox1.name = _category;
                    checkbox1.value = item.title;
                    checkbox1.id = item.id;

                    let label1: HTMLLabelElement = document.createElement("label");
                    label1.htmlFor = item.id;
                    label1.textContent = item.title;

                    checkGr1.appendChild(checkbox1);
                    checkGr1.appendChild(label1);
                    break;
                case "check2":
                    let checkbox2: HTMLInputElement = document.createElement("input");
                    checkbox2.type = item.type;
                    checkbox2.name = _category;
                    checkbox2.value = item.title;
                    checkbox2.id = item.id;

                    let label2: HTMLLabelElement = document.createElement("label");
                    label2.htmlFor = item.id;
                    label2.textContent = item.title;

                    checkGr2.appendChild(checkbox2);
                    checkGr2.appendChild(label2);
                    break;
                case "check3.1":
                case "check3.2":
                case "check3.3":
                    let checkbox3: HTMLInputElement = document.createElement("input");
                    checkbox3.type = item.type;
                    checkbox3.name = _category;
                    checkbox3.value = item.title;
                    checkbox3.id = item.id;

                    let label3: HTMLLabelElement = document.createElement("label");
                    label3.htmlFor = item.id;
                    label3.textContent = item.title;

                    checkGr3.appendChild(checkbox3);
                    checkGr3.appendChild(label3);
                    break;
                case "check4.1":
                case "check4.2":
                    let checkbox4: HTMLInputElement = document.createElement("input");
                    checkbox4.type = item.type;
                    checkbox4.name = _category;
                    checkbox4.value = item.title;
                    checkbox4.id = item.id;

                    let label4: HTMLLabelElement = document.createElement("label");
                    label4.htmlFor = item.id;
                    label4.textContent = item.title;

                    checkGr4.appendChild(checkbox4);
                    checkGr4.appendChild(label4);
                    break;
                default:
                    break;
            }
        }
        let breakTag1: HTMLBRElement = document.createElement("br");
        let breakTag2: HTMLBRElement = document.createElement("br");
        let breakTag3: HTMLBRElement = document.createElement("br");

        group.appendChild(checkGr1);
        group.appendChild(breakTag1);
        group.appendChild(checkGr2);
        group.appendChild(breakTag2);
        group.appendChild(checkGr3);
        group.appendChild(breakTag3);
        group.appendChild(checkGr4);

        return group;
    }

    // function create???(_items: Item[], _category: string): HTMLElement | null {
    // let group: HTMLSpanElement = document.createElement("span");

    // }
}