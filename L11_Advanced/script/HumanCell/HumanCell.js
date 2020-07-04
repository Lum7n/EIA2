"use strict";
var CanvasVirusus_V4;
(function (CanvasVirusus_V4) {
    class HumanCell extends CanvasVirusus_V4.Moveable {
        constructor(_position) {
            super(_position);
            this.infected = false;
            this.radius = 40;
            this.velocity.random(10, 30);
            this.rotation = (Math.random() * 90);
        }
        draw() {
            if (this.infected == true) {
                this.drawInfected();
            }
            else {
                this.drawHealthy();
            }
        }
        drawHealthy() {
            CanvasVirusus_V4.crc2.save();
            CanvasVirusus_V4.crc2.translate(this.position.x, this.position.y);
            CanvasVirusus_V4.crc2.beginPath();
            CanvasVirusus_V4.crc2.rotate(this.rotation);
            CanvasVirusus_V4.crc2.scale(0.7, 0.7);
            CanvasVirusus_V4.crc2.ellipse(0, 0, 60, 35, 10, 0.8, 1.3 * Math.PI);
            CanvasVirusus_V4.crc2.ellipse(-55, -6, 60, 35, 24.8, 2.3, 1.7 * Math.PI);
            CanvasVirusus_V4.crc2.closePath();
            CanvasVirusus_V4.crc2.fillStyle = "#ffd1e1";
            CanvasVirusus_V4.crc2.lineWidth = 3;
            CanvasVirusus_V4.crc2.strokeStyle = "#9c214c";
            CanvasVirusus_V4.crc2.closePath();
            CanvasVirusus_V4.crc2.stroke();
            CanvasVirusus_V4.crc2.fill();
            CanvasVirusus_V4.crc2.beginPath();
            CanvasVirusus_V4.crc2.ellipse(15, 10, 20, 12, 10, 0, 2 * Math.PI);
            CanvasVirusus_V4.crc2.fillStyle = "#eaa1b3";
            CanvasVirusus_V4.crc2.lineWidth = 1;
            CanvasVirusus_V4.crc2.closePath();
            CanvasVirusus_V4.crc2.fill();
            CanvasVirusus_V4.crc2.stroke();
            CanvasVirusus_V4.crc2.restore();
        }
        drawInfected() {
            CanvasVirusus_V4.crc2.save();
            CanvasVirusus_V4.crc2.translate(this.position.x, this.position.y);
            CanvasVirusus_V4.crc2.beginPath();
            CanvasVirusus_V4.crc2.rotate(this.rotation);
            CanvasVirusus_V4.crc2.scale(0.7, 0.7);
            CanvasVirusus_V4.crc2.ellipse(0, 0, 60, 35, 10, 0.8, 1.3 * Math.PI);
            CanvasVirusus_V4.crc2.ellipse(-55, -6, 60, 35, 24.8, 2.3, 1.7 * Math.PI);
            CanvasVirusus_V4.crc2.closePath();
            CanvasVirusus_V4.crc2.fillStyle = "#8a303a";
            CanvasVirusus_V4.crc2.lineWidth = 3;
            CanvasVirusus_V4.crc2.strokeStyle = "#331c1c";
            CanvasVirusus_V4.crc2.closePath();
            CanvasVirusus_V4.crc2.stroke();
            CanvasVirusus_V4.crc2.fill();
            CanvasVirusus_V4.crc2.beginPath();
            CanvasVirusus_V4.crc2.ellipse(15, 10, 20, 12, 10, 0, 2 * Math.PI);
            CanvasVirusus_V4.crc2.fillStyle = "#733641";
            CanvasVirusus_V4.crc2.lineWidth = 1;
            CanvasVirusus_V4.crc2.closePath();
            CanvasVirusus_V4.crc2.fill();
            CanvasVirusus_V4.crc2.stroke();
            CanvasVirusus_V4.crc2.restore();
        }
        isHit(_posvirus, _radiusvirus) {
            let distanceX = this.position.x - _posvirus.x;
            let distanceY = this.position.y - _posvirus.y;
            let rSum = _radiusvirus + this.radius + 20;
            let distance = (distanceX * distanceX) + (distanceY * distanceY);
            if (distance <= rSum * rSum) {
                return true;
            }
            else {
                return false;
            }
        }
        move(_timeslice) {
            if (this.infected == true) {
                super.move(_timeslice * 0);
            }
            else {
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
    }
    CanvasVirusus_V4.HumanCell = HumanCell;
})(CanvasVirusus_V4 || (CanvasVirusus_V4 = {}));
//# sourceMappingURL=HumanCell.js.map