namespace CanvasVirusus_V4 {

    export class PlasmaCell extends Moveable {

        rotation: number;

        constructor(_position: Vector) {
            super(_position);

            this.velocity.random(2, 5);
            this.rotation = (Math.random() * 360);
        }

        draw(): void {
            crc2.save();

            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.rotate(this.rotation);
            crc2.scale(0.7, 0.7);
            crc2.moveTo(0, 0);
            crc2.ellipse(0, 0, 80, 50, -0.6, 0, 2 * Math.PI);
            crc2.fillStyle = "#d8c5f9";
            crc2.lineWidth = 2.5;
            crc2.strokeStyle = "#502994";
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(40, -35, 20, 12, 10, 0.8, 1.3 * Math.PI);
            crc2.ellipse(25, -37, 20, 12, 24.8, 2.3, 1.7 * Math.PI);
            crc2.fillStyle = "#b8a1ea";
            crc2.lineWidth = 1;
            crc2.closePath();

            this.antibody(1, new Vector(10, 0));
            this.antibody(2, new Vector(20, 40));
            this.antibody(3, new Vector(-40, -10));
            this.antibody(4, new Vector(30, 8));
            this.antibody(11, new Vector(-40, -30));

            crc2.fill();
            crc2.stroke();

            crc2.restore();
        }

        antibody(_rotation: number, _translation: Vector): void {
            crc2.save();

            crc2.rotate(_rotation);
            crc2.translate(_translation.x, _translation.y);
            crc2.moveTo(0, 0);
            crc2.lineTo(0, 15);
            crc2.lineTo(0, 0);
            crc2.lineTo(-7, -12);
            crc2.lineTo(0, 0);
            crc2.lineTo(7, -12);
            crc2.lineTo(0, 0);
            crc2.lineWidth = 2;

            crc2.restore();
        }

        move(_timeslice: number): void {
            // if (this.infected == true) {
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