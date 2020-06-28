namespace CanvasVirusus_V3 {

    export class Macrophage extends Moveable {

        rotation: number;

        constructor(_position: Vector) {
            super(_position);

            this.rotation = (Math.random() * 90);
            this.velocity.random(5, 10);
        }

        draw(): void {
            crc2.save();

            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.rotate(this.rotation);
            crc2.scale(0.5, 0.5);
            crc2.moveTo(0, 0);
            crc2.arc(0, 0, 25, 0.4, 1 * Math.PI);
            crc2.arc(-40, 0, 15, 0, 1.3 * Math.PI);
            crc2.arc(-50, -40, 25, 1.2, 1.5 * Math.PI);
            crc2.arc(-40, -75, 15, 2.4, 1.8 * Math.PI);
            crc2.arc(-15, -85, 15, 3.2, 2 * Math.PI);
            crc2.arc(25, -80, 25, 3.6, 2 * Math.PI);
            crc2.arc(65, -75, 15, 3.6, 2.2 * Math.PI);
            crc2.arc(90, -45, 25, 4, 2.3 * Math.PI);
            crc2.arc(105, -10, 15, 4.6, 2.6 * Math.PI);
            crc2.arc(88, 15, 15, -0.8, 1 * Math.PI);
            crc2.arc(48, 10, 25, 0, 1 * Math.PI);
            crc2.fillStyle = "#f8c2ba";
            crc2.lineWidth = 4;
            crc2.strokeStyle = "#a82f1c";
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(-20, -30, 25, 14, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#e09883";
            crc2.lineWidth = 1.5;
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.restore();
        }

        move(_timeslice: number): void {
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