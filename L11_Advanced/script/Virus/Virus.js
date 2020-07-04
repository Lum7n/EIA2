"use strict";
var CanvasVirusus_V4;
(function (CanvasVirusus_V4) {
    class Virus extends CanvasVirusus_V4.Moveable {
        constructor(_position) {
            super(_position);
            this.radius = 10;
            this.velocity.random(20, 30);
        }
        draw() {
            CanvasVirusus_V4.crc2.save();
            CanvasVirusus_V4.crc2.translate(this.position.x, this.position.y);
            CanvasVirusus_V4.crc2.beginPath();
            CanvasVirusus_V4.crc2.scale(0.5, 0.5);
            CanvasVirusus_V4.crc2.moveTo(0, 0);
            CanvasVirusus_V4.crc2.lineTo(0, 35);
            CanvasVirusus_V4.crc2.lineTo(0, -35);
            CanvasVirusus_V4.crc2.lineTo(0, 0);
            CanvasVirusus_V4.crc2.lineTo(35, 0);
            CanvasVirusus_V4.crc2.lineTo(-35, 0);
            CanvasVirusus_V4.crc2.lineTo(0, 0);
            CanvasVirusus_V4.crc2.lineTo(25, 25);
            CanvasVirusus_V4.crc2.lineTo(-25, -25);
            CanvasVirusus_V4.crc2.lineTo(0, 0);
            CanvasVirusus_V4.crc2.lineTo(25, -25);
            CanvasVirusus_V4.crc2.lineTo(-25, 25);
            CanvasVirusus_V4.crc2.fillStyle = "#b3f576";
            CanvasVirusus_V4.crc2.lineWidth = 3;
            CanvasVirusus_V4.crc2.strokeStyle = "#178f2b";
            CanvasVirusus_V4.crc2.closePath();
            CanvasVirusus_V4.crc2.stroke();
            CanvasVirusus_V4.crc2.fill();
            CanvasVirusus_V4.crc2.beginPath();
            CanvasVirusus_V4.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            CanvasVirusus_V4.crc2.closePath();
            CanvasVirusus_V4.crc2.fill();
            CanvasVirusus_V4.crc2.stroke();
            CanvasVirusus_V4.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (this.position.x < 0)
                this.position.x += (CanvasVirusus_V4.crc2.canvas.width);
            if (this.position.x > (CanvasVirusus_V4.crc2.canvas.width))
                this.position.x -= (CanvasVirusus_V4.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += CanvasVirusus_V4.crc2.canvas.height;
            if (this.position.y > CanvasVirusus_V4.crc2.canvas.height)
                this.position.y -= CanvasVirusus_V4.crc2.canvas.height;
        }
    }
    CanvasVirusus_V4.Virus = Virus;
})(CanvasVirusus_V4 || (CanvasVirusus_V4 = {}));
//# sourceMappingURL=Virus.js.map