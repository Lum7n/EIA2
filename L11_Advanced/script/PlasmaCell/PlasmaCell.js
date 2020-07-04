"use strict";
var CanvasVirusus_V4;
(function (CanvasVirusus_V4) {
    class PlasmaCell extends CanvasVirusus_V4.Moveable {
        constructor(_position) {
            super(_position);
            this.velocity.random(2, 5);
            this.rotation = (Math.random() * 360);
        }
        draw() {
            CanvasVirusus_V4.crc2.save();
            CanvasVirusus_V4.crc2.translate(this.position.x, this.position.y);
            CanvasVirusus_V4.crc2.beginPath();
            CanvasVirusus_V4.crc2.rotate(this.rotation);
            CanvasVirusus_V4.crc2.scale(0.7, 0.7);
            CanvasVirusus_V4.crc2.moveTo(0, 0);
            CanvasVirusus_V4.crc2.ellipse(0, 0, 80, 50, -0.6, 0, 2 * Math.PI);
            CanvasVirusus_V4.crc2.fillStyle = "#d8c5f9";
            CanvasVirusus_V4.crc2.lineWidth = 2.5;
            CanvasVirusus_V4.crc2.strokeStyle = "#502994";
            CanvasVirusus_V4.crc2.closePath();
            CanvasVirusus_V4.crc2.stroke();
            CanvasVirusus_V4.crc2.fill();
            CanvasVirusus_V4.crc2.beginPath();
            CanvasVirusus_V4.crc2.ellipse(40, -35, 20, 12, 10, 0.8, 1.3 * Math.PI);
            CanvasVirusus_V4.crc2.ellipse(25, -37, 20, 12, 24.8, 2.3, 1.7 * Math.PI);
            CanvasVirusus_V4.crc2.fillStyle = "#b8a1ea";
            CanvasVirusus_V4.crc2.lineWidth = 1;
            CanvasVirusus_V4.crc2.closePath();
            this.antibody(1, new CanvasVirusus_V4.Vector(10, 0));
            this.antibody(2, new CanvasVirusus_V4.Vector(20, 40));
            this.antibody(3, new CanvasVirusus_V4.Vector(-40, -10));
            this.antibody(4, new CanvasVirusus_V4.Vector(30, 8));
            this.antibody(11, new CanvasVirusus_V4.Vector(-40, -30));
            CanvasVirusus_V4.crc2.fill();
            CanvasVirusus_V4.crc2.stroke();
            CanvasVirusus_V4.crc2.restore();
        }
        antibody(_rotation, _translation) {
            CanvasVirusus_V4.crc2.save();
            CanvasVirusus_V4.crc2.rotate(_rotation);
            CanvasVirusus_V4.crc2.translate(_translation.x, _translation.y);
            CanvasVirusus_V4.crc2.moveTo(0, 0);
            CanvasVirusus_V4.crc2.lineTo(0, 15);
            CanvasVirusus_V4.crc2.lineTo(0, 0);
            CanvasVirusus_V4.crc2.lineTo(-7, -12);
            CanvasVirusus_V4.crc2.lineTo(0, 0);
            CanvasVirusus_V4.crc2.lineTo(7, -12);
            CanvasVirusus_V4.crc2.lineTo(0, 0);
            CanvasVirusus_V4.crc2.lineWidth = 2;
            CanvasVirusus_V4.crc2.restore();
        }
        move(_timeslice) {
            // if (this.infected == true) {
            super.move(_timeslice);
            if (this.position.x < 0)
                this.position.x += (CanvasVirusus_V4.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += CanvasVirusus_V4.crc2.canvas.height;
            if (this.position.x > (CanvasVirusus_V4.crc2.canvas.width))
                this.position.x -= (CanvasVirusus_V4.crc2.canvas.width);
            if (this.position.y > CanvasVirusus_V4.crc2.canvas.height)
                this.position.y -= CanvasVirusus_V4.crc2.canvas.height;
        }
    }
    CanvasVirusus_V4.PlasmaCell = PlasmaCell;
})(CanvasVirusus_V4 || (CanvasVirusus_V4 = {}));
//# sourceMappingURL=PlasmaCell.js.map