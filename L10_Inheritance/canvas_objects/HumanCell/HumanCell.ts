namespace CanvasVirusus_V3 {

    export class HumanCell extends Moveable {

        radius: number;
        infected: boolean = false;
        rotation: number;
      
        constructor(_position: Vector) {
            super(_position);
    
            this.radius = 40;
            this.velocity.random(10, 30);
            this.rotation = (Math.random() * 90);
        }

        draw(): void {
            if (this.infected == true) {
                this.drawInfected();
            } else {
                this.drawHealthy();
            }
        }

        drawHealthy(): void {
            crc2.save();

            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.rotate(this.rotation);
            crc2.scale(0.7, 0.7);
            crc2.ellipse(0, 0, 60, 35, 10, 0.8, 1.3 * Math.PI);
            crc2.ellipse(-55, -6, 60, 35, 24.8, 2.3, 1.7 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#ffd1e1";
            crc2.lineWidth = 3;
            crc2.strokeStyle = "#9c214c";
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(15, 10, 20, 12, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#eaa1b3";
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.restore();
        }

        drawInfected(): void {
            crc2.save();

            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.rotate(this.rotation);
            crc2.scale(0.7, 0.7);
            crc2.ellipse(0, 0, 60, 35, 10, 0.8, 1.3 * Math.PI);
            crc2.ellipse(-55, -6, 60, 35, 24.8, 2.3, 1.7 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#8a303a";
            crc2.lineWidth = 3;
            crc2.strokeStyle = "#331c1c";
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(15, 10, 20, 12, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#733641";
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.restore();
        }

        isHit(_posvirus: Vector, _radiusvirus: number): boolean {

            let distanceX: number = this.position.x - _posvirus.x;
            let distanceY: number = this.position.y - _posvirus.y;
            let rSum: number = _radiusvirus + this.radius + 20;
            let distance: number = (distanceX * distanceX) + (distanceY * distanceY);

            if (distance <= rSum * rSum) {
                return true;
            } else {
                return false;
            }
        }

        move(_timeslice: number): void {
            if (this.infected == true) {
                super.move(_timeslice * 0);
            } else {
                super.move(_timeslice);

                if (this.position.x < 0)
                    this.position.x += (crc2.canvas.width);
                if (this.position.y < 0)
                    this.position.y += crc2.canvas.height;
                if (this.position.x > (crc2.canvas.width))
                    this.position.x -= (crc2.canvas.width);
                if (this.position.y > crc2.canvas.height)
                    this.position.y -= crc2.canvas.height;
            }
        }
    }
}





