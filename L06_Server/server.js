"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
var WeWork4U_4;
(function (WeWork4U_4) {
    let server = Http.createServer();
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server on port: " + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("what's up?");
        // wird ausgegeben wenn im Browser "localhost:5001" eingegeben wird
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            // "parse" verändert das Format der Information
            // durch "true" wird es zu einem assoziativen Array
            console.log(url.query);
            for (let key in url.query) {
                console.log(key + " : " + url.query[key]);
                _response.write(key + " : " + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.write("This is my response");
        _response.end();
    }
})(WeWork4U_4 = exports.WeWork4U_4 || (exports.WeWork4U_4 = {}));
//# sourceMappingURL=server.js.map