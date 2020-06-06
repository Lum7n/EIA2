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
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect(); //da vom Typ Promise = await und async
        tasks = mongoClient.db("WeWork4U").collection("Tasks");
        console.log("Database connection ", tasks != undefined);
    }

    let allTasks: string[] = [];

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("what's up?");
        // wird ausgegeben wenn im Browser "localhost:5001" eingegeben wird

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            // "parse" verändert das Format der Information
            // durch "true" wird es zu einem assoziativen Array
            console.log(url.query);

            // for (let key in url.query) {
            //     console.log(key + " : " + url.query[key]);
            //     _response.write(key + " : " + url.query[key] + "<br/>");
            // }

            if (_request.url == "/?getTasks=yes") {
                let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(databaseURL, options);
                await mongoClient.connect();
                let tasks: Mongo.Collection = mongoClient.db("WeWork4U").collection("Tasks");
                let mongoCursor: Mongo.Cursor<any> = tasks.find();
                await mongoCursor.forEach(retrieveOrders); 
                let jsonString: string = JSON.stringify(allTasks);
                let answer: string = jsonString.toString();
                _response.write(answer);
                allTasks = [];
            }
            else {
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
                storeTask(url.query);
            }
        }

        _response.end();
    }

    function storeTask(_task: Task): void {
        tasks.insert(_task);
    }

    function retrieveOrders(_item: object): void {
        let jsonString: string = JSON.stringify(_item);
        allTasks.push(jsonString);
    }
}



