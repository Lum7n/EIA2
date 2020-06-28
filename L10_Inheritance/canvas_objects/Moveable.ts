namespace CanvasVirusus_V3 {

    export class Moveable {

        position: Vector;
        velocity: Vector;

        constructor(_position: Vector) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
        }

        draw(): void {
            //console.log("draw");
        }

        move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
}