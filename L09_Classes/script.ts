namespace CanvasVirusus_V2 {

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", init);

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

        let viewportHeight: number = window.outerHeight;
        let viewportWidth: number = window.outerWidth;

        viewportHeight += -180;
        viewportWidth += -140;

        let heightAdjusted: string = viewportHeight + "px";
        let widthAdjusted: string = viewportWidth + "px";

        if (viewportWidth < 800) {
            canvas.setAttribute("height", heightAdjusted);
            canvas.setAttribute("width", widthAdjusted);
        } else {
            canvas.setAttribute("height", heightAdjusted);
        }

        var img: CanvasImageSource = <CanvasImageSource>document.getElementById("background");
        crc2.drawImage(img, 0, 0, 800, 600);


        let midpoint: Vector = { x: viewportWidth / 2, y: viewportHeight / 2 };

        drawCells({ x: midpoint.x, y: midpoint.y }, { x: viewportWidth, y: viewportHeight });
        drawViruses({ x: midpoint.x, y: midpoint.y }, { x: viewportWidth, y: viewportHeight });
        drawPlasmaCells({ x: midpoint.x, y: midpoint.y }, { x: viewportWidth, y: viewportHeight });
        drawMacrophages({ x: midpoint.x, y: midpoint.y }, { x: viewportWidth, y: viewportHeight });


        function drawCells(_midpoint: Vector, _canvasSize: Vector): void {

            let nCells: number = 6;
            let cell: Path2D = new Path2D();
            let nucleus: Path2D = new Path2D();

            cell.ellipse(0, 0, 60, 35, 10, 0.8, 1.3 * Math.PI);
            cell.ellipse(-55, -6, 60, 35, 24.8, 2.3, 1.7 * Math.PI);
            cell.closePath();

            nucleus.ellipse(15, 10, 20, 12, 10, 0, 2 * Math.PI);

            crc2.save();

            crc2.translate(_midpoint.x, _midpoint.y);
            crc2.strokeStyle = "#9c214c";
            crc2.fillStyle = "#ffd1e1";

            for (let drawn: number = 0; drawn < nCells; drawn++) {
                crc2.save();

                let x: number = (Math.random() - 0.5) * _canvasSize.x;
                let y: number = (Math.random() - 0.5) * _canvasSize.y;

                crc2.translate(x, y);
                crc2.fill(cell);
                crc2.stroke(cell);

                crc2.restore();
                crc2.save();

                crc2.fillStyle = "#eaa1b3";
                crc2.translate(x, y);
                crc2.fill(nucleus);
                crc2.stroke(nucleus);

                crc2.restore();
            }

            crc2.restore();
        }


        function drawViruses(_midpoint: Vector, _canvasSize: Vector): void {

            let nViruses: number = 8;
            let membraneProtein: Path2D = new Path2D();
            let bodyVirus: Path2D = new Path2D();

            membraneProtein.moveTo(0, 0);
            membraneProtein.lineTo(0, 35);
            membraneProtein.lineTo(0, -35);
            membraneProtein.lineTo(0, 0);
            membraneProtein.lineTo(35, 0);
            membraneProtein.lineTo(-35, 0);
            membraneProtein.lineTo(0, 0);
            membraneProtein.lineTo(25, 25);
            membraneProtein.lineTo(-25, -25);
            membraneProtein.lineTo(0, 0);
            membraneProtein.lineTo(25, -25);
            membraneProtein.lineTo(-25, 25);
            membraneProtein.closePath();

            bodyVirus.arc(0, 0, 20, 0, 2 * Math.PI);

            crc2.save();

            crc2.translate(_midpoint.x, _midpoint.y);
            crc2.strokeStyle = "#178f2b";
            crc2.fillStyle = "#b3f576";
            crc2.lineWidth = 3;

            for (let drawn: number = 0; drawn < nViruses; drawn++) {
                crc2.save();

                let x: number = (Math.random() - 0.5) * _canvasSize.x;
                let y: number = (Math.random() - 0.5) * _canvasSize.y;

                crc2.translate(x, y);
                crc2.fill(membraneProtein);
                crc2.stroke(membraneProtein);

                crc2.restore();
                crc2.save();

                crc2.lineWidth = 2;
                crc2.translate(x, y);
                crc2.fill(bodyVirus);
                crc2.stroke(bodyVirus);

                crc2.restore();
            }

            crc2.restore();
        }

        function drawPlasmaCells(_midpoint: Vector, _canvasSize: Vector): void {

            let nCells: number = 2;
            let cell: Path2D = new Path2D();
            let nucleus: Path2D = new Path2D();
            let nAntibodys: number = 6;
            let antibodys: Path2D = new Path2D();

            cell.ellipse(0, 0, 80, 50, -0.6, 0, 2 * Math.PI);

            nucleus.ellipse(0, 0, 20, 12, 10, 0.8, 1.3 * Math.PI);
            nucleus.ellipse(-15, -2, 20, 12, 24.8, 2.3, 1.7 * Math.PI);
            nucleus.closePath();

            antibodys.moveTo(0, 0);
            antibodys.lineTo(0, 12);
            antibodys.lineTo(0, 0);
            antibodys.lineTo(-5, -10);
            antibodys.lineTo(0, 0);
            antibodys.lineTo(5, -10);
            antibodys.lineTo(0, 0);

            crc2.save();

            crc2.translate(_midpoint.x, _midpoint.y);
            crc2.strokeStyle = "#502994";
            crc2.fillStyle = "#d8c5f9";

            for (let drawn: number = 0; drawn < nCells; drawn++) {
                crc2.save();

                let x: number = (Math.random() - 0.5) * _canvasSize.x;
                let y: number = (Math.random() - 0.5) * _canvasSize.y;

                crc2.translate(x, y);
                crc2.fill(cell);
                crc2.stroke(cell);

                crc2.restore();
                crc2.save();

                crc2.fillStyle = "#b8a1ea";
                crc2.translate(x + 40, y - 35);
                crc2.fill(nucleus);
                crc2.stroke(nucleus);

                crc2.restore();

                for (let drawn: number = 0; drawn < nAntibodys; drawn++) {
                    crc2.save();

                    let xA: number = (Math.random() - 0.5) * 50;
                    let yA: number = (Math.random() - 0.5) * 50;

                    x = xA + x;
                    y = yA + y;

                    let r: number = Math.random() * 10;
                    console.log(r);

                    crc2.translate(x, y);
                    crc2.rotate(r);
                    crc2.stroke(antibodys);

                    crc2.restore();
                }
            }

            crc2.restore();
        }

        function drawMacrophages(_midpoint: Vector, _canvasSize: Vector): void {

            let nCells: number = 3;
            let cell: Path2D = new Path2D();
            let nucleus: Path2D = new Path2D();

            cell.arc(0, 0, 25, 0.4, 1 * Math.PI);
            cell.arc(-40, 0, 15, 0, 1.3 * Math.PI);
            cell.arc(-50, -40, 25, 1.2 , 1.5 * Math.PI);
            cell.arc(-40, -75, 15, 2.4, 1.8 * Math.PI);
            cell.arc(-15, -85, 15, 3.2, 2 * Math.PI);
            cell.arc(25, -80, 25, 3.6, 2 * Math.PI);
            cell.arc(65, -75, 15, 3.6, 2.2 * Math.PI);
            cell.arc(90, -45, 25, 4, 2.3 * Math.PI);
            cell.arc(105, -10, 15, 4.6, 2.6 * Math.PI);
            cell.arc(88, 15, 15, -0.8, 1 * Math.PI);
            cell.arc(48, 10, 25, 0, 1 * Math.PI);
            cell.closePath();

            nucleus.ellipse(-20, -30, 25, 14, 10, 0, 2 * Math.PI);

            crc2.save();

            crc2.translate(_midpoint.x, _midpoint.y);
            crc2.strokeStyle = "#a82f1c";
            crc2.fillStyle = "#f8c2ba";

            for (let drawn: number = 0; drawn < nCells; drawn++) {
                crc2.save();

                let x: number = (Math.random() - 0.5) * _canvasSize.x;
                let y: number = (Math.random() - 0.5) * _canvasSize.y;

                crc2.translate(x, y);
                crc2.fill(cell);
                crc2.stroke(cell);

                crc2.restore();
                crc2.save();

                crc2.fillStyle = "#e09883";
                crc2.translate(x, y);
                crc2.fill(nucleus);
                crc2.stroke(nucleus);

                crc2.restore();
            }

            crc2.restore();
        }

    }

}