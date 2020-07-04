"use strict";
var CanvasVirusus_V3;
(function (CanvasVirusus_V3) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new CanvasVirusus_V3.Vector(0, 0);
            this.velocity = new CanvasVirusus_V3.Vector(0, 0);
        }
        draw() {
            //console.log("draw");
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    CanvasVirusus_V3.Moveable = Moveable;
})(CanvasVirusus_V3 || (CanvasVirusus_V3 = {}));
//# sourceMappingURL=Moveable.js.map