"use strict";
var CanvasVirusus_V3;
(function (CanvasVirusus_V3) {
    class PlasmaCell extends CanvasVirusus_V3.Moveable {
        constructor(_position) {
            super(_position);
            this.velocity.random(2, 5);
            this.rotation = (Math.random() * 360);
        }
        draw() {
            CanvasVirusus_V3.crc2.save();
            CanvasVirusus_V3.crc2.translate(this.position.x, this.position.y);
            CanvasVirusus_V3.crc2.beginPath();
            CanvasVirusus_V3.crc2.rotate(this.rotation);
            CanvasVirusus_V3.crc2.scale(0.7, 0.7);
            CanvasVirusus_V3.crc2.moveTo(0, 0);
            CanvasVirusus_V3.crc2.ellipse(0, 0, 80, 50, -0.6, 0, 2 * Math.PI);
            CanvasVirusus_V3.crc2.fillStyle = "#d8c5f9";
            CanvasVirusus_V3.crc2.lineWidth = 2.5;
            CanvasVirusus_V3.crc2.strokeStyle = "#502994";
            CanvasVirusus_V3.crc2.closePath();
            CanvasVirusus_V3.crc2.stroke();
            CanvasVirusus_V3.crc2.fill();
            CanvasVirusus_V3.crc2.beginPath();
            CanvasVirusus_V3.crc2.ellipse(40, -35, 20, 12, 10, 0.8, 1.3 * Math.PI);
            CanvasVirusus_V3.crc2.ellipse(25, -37, 20, 12, 24.8, 2.3, 1.7 * Math.PI);
            CanvasVirusus_V3.crc2.fillStyle = "#b8a1ea";
            CanvasVirusus_V3.crc2.lineWidth = 1;
            CanvasVirusus_V3.crc2.closePath();
            CanvasVirusus_V3.crc2.fill();
            CanvasVirusus_V3.crc2.stroke();
            // Antikörper versuch 
            // let nAntibodys: number = 6;
            // let r: number = Math.random() * 10;
            // console.log(r);
            // crc2.translate(this.position.x, this.position.y);
            // crc2.beginPath();
            // crc2.moveTo(0, 0);
            // for (let i: number = 0; i < nAntibodys; i++) {
            //     let x: number = (Math.random() - 0.5);
            //     let y: number = (Math.random() - 0.5);
            //     crc2.translate(x + i, y);
            //     crc2.rotate(r);
            //     crc2.moveTo(0, 0);
            //     crc2.lineTo(0, 12);
            //     crc2.lineTo(0, 0);
            //     crc2.lineTo(-5, -10);
            //     crc2.lineTo(0, 0);
            //     crc2.lineTo(5, -10);
            //     crc2.lineTo(0, 0);
            //     crc2.lineWidth = 2;
            // }
            // crc2.closePath();
            // crc2.stroke();
            CanvasVirusus_V3.crc2.restore();
        }
        move(_timeslice) {
            // if (this.infected == true) {
            super.move(_timeslice);
            if (this.position.x < 0)
                this.position.x += (CanvasVirusus_V3.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += CanvasVirusus_V3.crc2.canvas.height;
            if (this.position.x > (CanvasVirusus_V3.crc2.canvas.width))
                this.position.x -= (CanvasVirusus_V3.crc2.canvas.width);
            if (this.position.y > CanvasVirusus_V3.crc2.canvas.height)
                this.position.y -= CanvasVirusus_V3.crc2.canvas.height;
        }
    }
    CanvasVirusus_V3.PlasmaCell = PlasmaCell;
})(CanvasVirusus_V3 || (CanvasVirusus_V3 = {}));
//# sourceMappingURL=PlasmaCell.js.map