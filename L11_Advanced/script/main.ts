namespace CanvasVirusus_V4 {

    window.addEventListener("load", init);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    let moveables: Moveable[] = [];

    function init(_event: Event): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        sizeCanvas();

        getBackground();

        createObjects();

        window.setInterval(animate, 20);
    }

    function getBackground(): void {
        var bgUpLeft: CanvasImageSource = <CanvasImageSource>document.getElementById("bgUpLeft");
        crc2.drawImage(bgUpLeft, 0, 0, 800, 600);
        var bgUpRight: CanvasImageSource = <CanvasImageSource>document.getElementById("bgUpRight");
        crc2.drawImage(bgUpRight, 800, 600, 800, 600);
        var bgDownLeft: CanvasImageSource = <CanvasImageSource>document.getElementById("bgDownLeft");
        crc2.drawImage(bgDownLeft, 0, 600, 800, 600);
        var bgDownRight: CanvasImageSource = <CanvasImageSource>document.getElementById("bgDownRight");
        crc2.drawImage(bgDownRight, 800, 0, 800, 600);
    
    }


    function sizeCanvas(): void {
        canvas.width = window.innerWidth;
        canvas.setAttribute("width", canvas.width + "px");
        canvas.height = window.innerHeight;
        canvas.setAttribute("height", canvas.height + "px");

        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }

    function createObjects(): void {
        let x: number;
        let y: number;
        let nHumanCells: number = 20;
        let nPlasmaCells: number = 10;
        let nMacrophages: number = 10;
        let nViruses: number = 25;

        //HumanCells
        for (let i: number = 0; i < nHumanCells; i++) {
            x = (Math.random() * canvas.width);
            y = (100 + Math.random() * canvas.height / 1.5);

            let position: Vector = new Vector(x, y);
            let humanCell: HumanCell = new HumanCell(position);
            humanCell.draw();
            moveables.push(humanCell);
        }

        //PlasmaCells
        for (let i: number = 0; i < nPlasmaCells; i++) {
            x = (Math.random() * canvas.width);
            y = (100 + Math.random() * canvas.height / 1.5);

            let position: Vector = new Vector(x, y);
            let plasmaCell: PlasmaCell = new PlasmaCell(position);
            plasmaCell.draw();
            moveables.push(plasmaCell);
        }

        //Macrophages
        for (let i: number = 0; i < nMacrophages; i++) {
            x = (Math.random() * canvas.width);
            y = (100 + Math.random() * canvas.height / 1.5);

            let position: Vector = new Vector(x, y);
            let macrophage: Macrophage = new Macrophage(position);
            macrophage.draw();
            moveables.push(macrophage);
        }

        //Viruses
        for (let i: number = 0; i < nViruses; i++) {
            x = (Math.random() * canvas.width);
            y = (100 + Math.random() * canvas.height / 1.5);

            let position: Vector = new Vector(x, y);
            let virus: Virus = new Virus(position);
            virus.draw();
            moveables.push(virus);
        }
    }

    function animate(): void {

        getBackground();

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        colliding();
    }

    function colliding(): void {
        for (let moveable of moveables) {
            if (moveable instanceof Virus) {
                let radiusVirus: number = moveable.radius;
                let positionVirus: Vector = moveable.position;

                let cellHit: HumanCell | null = getCellHit(positionVirus, radiusVirus);
                if (cellHit) {
                    cellHit.infected = true;
                }
            }
        }
    }

    function getCellHit(_positionVirus: Vector, _radiusVirus: number): HumanCell | null {
        for (let moveable of moveables) {
            if (moveable instanceof HumanCell && moveable.isHit(_positionVirus, _radiusVirus))
                return moveable;
        }
        return null;
    }
}