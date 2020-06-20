"use strict";
var L09_Classes;
(function (L09_Classes) {
    class Vector {
        constructor(_x, _y) {
            this.x = 0;
            this.y = 0;
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    let v1 = new Vector(10, -3);
    // v1.set(34, 22);
    v1.scale(2);
    console.log(v1); //so v1 = (x: 20, y: -6) wenn v1.set nicht auskommentiert v1 = (x: 68, y: 44)
})(L09_Classes || (L09_Classes = {}));
//# sourceMappingURL=Vector.js.map