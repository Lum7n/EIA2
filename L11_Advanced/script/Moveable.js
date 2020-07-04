"use strict";
var CanvasVirusus_V4;
(function (CanvasVirusus_V4) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new CanvasVirusus_V4.Vector(0, 0);
            this.velocity = new CanvasVirusus_V4.Vector(0, 0);
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
    CanvasVirusus_V4.Moveable = Moveable;
})(CanvasVirusus_V4 || (CanvasVirusus_V4 = {}));
//# sourceMappingURL=Moveable.js.map