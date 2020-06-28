"use strict";
var CanvasVirusus_V3;
(function (CanvasVirusus_V3) {
    window.addEventListener("load", init);
    let moveables = [];
    let background;
    function init(_event) {
        CanvasVirusus_V3.canvas = document.querySelector("canvas");
        CanvasVirusus_V3.crc2 = CanvasVirusus_V3.canvas.getContext("2d");
        sizeCanvas();
        getBackground();
        createObjects();
        window.setInterval(animate, 20);
    }
    function getBackground() {
        var bgUpLeft = document.getElementById("bgUpLeft");
        CanvasVirusus_V3.crc2.drawImage(bgUpLeft, 0, 0, 800, 600);
        var bgUpRight = document.getElementById("bgUpRight");
        CanvasVirusus_V3.crc2.drawImage(bgUpRight, 800, 600, 800, 600);
        var bgDownLeft = document.getElementById("bgDownLeft");
        CanvasVirusus_V3.crc2.drawImage(bgDownLeft, 0, 600, 800, 600);
        var bgDownRight = document.getElementById("bgDownRight");
        CanvasVirusus_V3.crc2.drawImage(bgDownRight, 800, 0, 800, 600);
        background = CanvasVirusus_V3.crc2.getImageData(0, 0, CanvasVirusus_V3.canvas.width, CanvasVirusus_V3.canvas.height);
    }
    function sizeCanvas() {
        CanvasVirusus_V3.canvas.width = window.innerWidth;
        CanvasVirusus_V3.canvas.setAttribute("width", CanvasVirusus_V3.canvas.width + "px");
        CanvasVirusus_V3.canvas.height = window.innerHeight;
        CanvasVirusus_V3.canvas.setAttribute("height", CanvasVirusus_V3.canvas.height + "px");
        CanvasVirusus_V3.crc2.fillRect(0, 0, CanvasVirusus_V3.canvas.width, CanvasVirusus_V3.canvas.height);
    }
    function createObjects() {
        let x;
        let y;
        let nHumanCells = 20;
        let nPlasmaCells = 10;
        let nMacrophages = 10;
        let nViruses = 25;
        //HumanCells
        for (let i = 0; i < nHumanCells; i++) {
            x = (Math.random() * CanvasVirusus_V3.canvas.width);
            y = (100 + Math.random() * CanvasVirusus_V3.canvas.height / 1.5);
            let position = new CanvasVirusus_V3.Vector(x, y);
            let humanCell = new CanvasVirusus_V3.HumanCell(position);
            humanCell.draw();
            moveables.push(humanCell);
        }
        //PlasmaCells
        for (let i = 0; i < nPlasmaCells; i++) {
            x = (Math.random() * CanvasVirusus_V3.canvas.width);
            y = (100 + Math.random() * CanvasVirusus_V3.canvas.height / 1.5);
            let position = new CanvasVirusus_V3.Vector(x, y);
            let plasmaCell = new CanvasVirusus_V3.PlasmaCell(position);
            plasmaCell.draw();
            moveables.push(plasmaCell);
        }
        //Macrophages
        for (let i = 0; i < nMacrophages; i++) {
            x = (Math.random() * CanvasVirusus_V3.canvas.width);
            y = (100 + Math.random() * CanvasVirusus_V3.canvas.height / 1.5);
            let position = new CanvasVirusus_V3.Vector(x, y);
            let macrophage = new CanvasVirusus_V3.Macrophage(position);
            macrophage.draw();
            moveables.push(macrophage);
        }
        //Viruses
        for (let i = 0; i < nViruses; i++) {
            x = (Math.random() * CanvasVirusus_V3.canvas.width);
            y = (100 + Math.random() * CanvasVirusus_V3.canvas.height / 1.5);
            let position = new CanvasVirusus_V3.Vector(x, y);
            let virus = new CanvasVirusus_V3.Virus(position);
            virus.draw();
            moveables.push(virus);
        }
    }
    function animate() {
        CanvasVirusus_V3.crc2.putImageData(background, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        colliding();
    }
    function colliding() {
        for (let moveable of moveables) {
            if (moveable instanceof CanvasVirusus_V3.Virus) {
                let radiusVirus = moveable.radius;
                let positionVirus = moveable.position;
                let cellHit = getCellHit(positionVirus, radiusVirus);
                if (cellHit) {
                    cellHit.infected = true;
                }
            }
        }
    }
    function getCellHit(_positionVirus, _radiusVirus) {
        for (let moveable of moveables) {
            if (moveable instanceof CanvasVirusus_V3.HumanCell && moveable.isHit(_positionVirus, _radiusVirus))
                return moveable;
        }
        return null;
    }
})(CanvasVirusus_V3 || (CanvasVirusus_V3 = {}));
//# sourceMappingURL=main.js.map