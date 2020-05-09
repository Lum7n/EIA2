    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let divs: NodeListOf<HTMLDivElement> = document.querySelectorAll("div");

        // Install listeners on divs
        for (let i: number = 0; i < divs.length; i++) {
            let div: HTMLDivElement = divs[i];
            div.addEventListener("change", handleChange);
            div.addEventListener("input", handleChange);
        }
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        // Amount response
        if (target.name == "Slider") {
            let ouput: HTMLOutputElement = <HTMLOutputElement>document.querySelector("output");
            ouput.value = target.value + " €";
        }
    }