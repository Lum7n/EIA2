"use strict";
var CanvasVirus;
(function (CanvasVirus) {
    let crc2;
    window.addEventListener("load", init);
    function init(_event) {
        let canvasBig = document.querySelector("canvas#screenBig");
        if (canvasBig) {
            crc2 = canvasBig.getContext("2d");
            if (crc2) {
                var imgBig = document.getElementById("background");
                crc2.drawImage(imgBig, 0, 0, 800, 600);
                cell();
                virus();
            }
        }
        let canvasSmall = document.querySelector("canvas#screenSmall");
        if (canvasSmall) {
            crc2 = canvasSmall.getContext("2d");
            if (crc2) {
                var imgSmall = document.getElementById("background");
                crc2.drawImage(imgSmall, 0, 0, 800, 600);
                cell();
                virus();
            }
        }
    }
    function cell() {
        if (crc2) {
            crc2.beginPath();
            crc2.strokeStyle = "#9c214c";
            crc2.fillStyle = "#ffd1e1";
            crc2.ellipse(280, 56, 60, 35, 10, 0.8, 1.3 * Math.PI);
            crc2.ellipse(225, 50, 60, 35, 24.8, 2.1, 1.7 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
            let cell = new Path2D();
            crc2.rotate(-25 * Math.PI / 180);
            cell.ellipse(-50, 456, 60, 35, 10, 0.8, 1.3 * Math.PI);
            cell.ellipse(-105, 450, 60, 35, 24.8, 2.1, 1.7 * Math.PI);
            cell.closePath();
            crc2.fill(cell);
            crc2.stroke(cell);
            crc2.save();
            crc2.rotate(35 * Math.PI / 180);
            crc2.translate(400, 10);
            crc2.fill(cell);
            crc2.stroke(cell);
            crc2.restore();
        }
    }
    function virus() {
        if (crc2) {
            let vir = new Path2D();
            crc2.strokeStyle = "#178f2b";
            crc2.fillStyle = "#b3f576";
            crc2.lineWidth = 3;
            vir.lineTo(335, 400);
            vir.lineTo(265, 400);
            vir.moveTo(300, 400);
            vir.lineTo(317, 365);
            vir.lineTo(286, 432);
            vir.moveTo(300, 400);
            vir.lineTo(320, 430);
            vir.lineTo(280, 368);
            crc2.fill(vir);
            vir.closePath();
            crc2.stroke(vir);
            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.arc(300, 400, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
            crc2.lineWidth = 3;
            crc2.translate(50, -50);
            crc2.stroke(vir);
            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.arc(300, 400, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
            crc2.lineWidth = 3;
            crc2.translate(-150, -50);
            crc2.stroke(vir);
            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.arc(300, 400, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
            crc2.lineWidth = 3;
            crc2.translate(50, 250);
            crc2.stroke(vir);
            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.arc(300, 400, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
            crc2.lineWidth = 3;
            crc2.translate(-100, 20);
            crc2.stroke(vir);
            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.arc(300, 400, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
            crc2.lineWidth = 3;
            crc2.translate(-150, -200);
            crc2.stroke(vir);
            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.arc(300, 400, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }
    }
})(CanvasVirus || (CanvasVirus = {}));
if (crc2) {
    crc2.beginPath();
    crc2.strokeStyle = "#FFFFFFF";
    crc2.arc(100, 60, 20, 0, 1.2 * Math.PI);
    // crc2.closePath();
    crc2.stroke();
}
//# sourceMappingURL=script.js.map