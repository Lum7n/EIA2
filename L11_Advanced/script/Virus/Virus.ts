namespace CanvasVirusus_V4 {

    export class Virus extends Moveable {

        radius: number = 10;
    
        constructor(_position: Vector) {
            super(_position);
            this.velocity.random(20, 30);
        }

        draw(): void {
            crc2.save();

            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.scale(0.5, 0.5);
            crc2.moveTo(0, 0);
            crc2.lineTo(0, 35);
            crc2.lineTo(0, -35);
            crc2.lineTo(0, 0);
            crc2.lineTo(35, 0);
            crc2.lineTo(-35, 0);
            crc2.lineTo(0, 0);
            crc2.lineTo(25, 25);
            crc2.lineTo(-25, -25);
            crc2.lineTo(0, 0);
            crc2.lineTo(25, -25);
            crc2.lineTo(-25, 25);
            crc2.fillStyle = "#b3f576";
            crc2.lineWidth = 3;
            crc2.strokeStyle = "#178f2b";
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.restore();
        }

        move(_timeslice: number): void {
            super.move(_timeslice);
            if (this.position.x < 0)
                this.position.x += (crc2.canvas.width);

            if (this.position.x > (crc2.canvas.width))
                this.position.x -= (crc2.canvas.width);

            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;

            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
    }
}