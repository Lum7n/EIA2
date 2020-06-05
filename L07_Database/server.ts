import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace WeWork4U_5 {

    interface Task {
        [type: string]: string | string[] | undefined;
    }

    let tasks: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;
    
    startServer(port);

    let databaseURL: string = "mongodb+srv://Lum7n:DatabaseLum7n@eia2-xvgmg.mongodb.net/WeWork4U?retryWrites=true&w=majority";

    connectToDatabase(databaseURL);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();

        console.log("Server on port: " + _port);

        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect() ; //da vom Typ Promise = await und async
        tasks = mongoClient.db("WeWork4U").collection("Tasks");
        console.log("Database connection ", tasks != undefined);
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("what's up?");
        // wird ausgegeben wenn im Browser "localhost:5001" eingegeben wird

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            // "parse" verändert das Format der Information
            // durch "true" wird es zu einem assoziativen Array
            console.log(url.query);

            for (let key in url.query) {
                console.log(key + " : " + url.query[key]);
                // _response.write(key + " : " + url.query[key] + "<br/>");
            }

            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

            storeTask(url.query);
        }

        _response.write(jsonString);

        _response.end();
    }

    function storeTask(_task: Task): void {
        tasks.insert(_task);
    }

}

