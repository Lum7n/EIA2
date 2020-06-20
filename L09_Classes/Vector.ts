namespace L09_Classes {

    class Vector {
        x: number = 0;
        y: number = 0;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }

    let v1: Vector = new Vector(10, -3);
    // v1.set(34, 22);
    v1.scale(2);
    console.log(v1);    //so v1 = (x: 20, y: -6) wenn v1.set nicht auskommentiert v1 = (x: 68, y: 44)

}