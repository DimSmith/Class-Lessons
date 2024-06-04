import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import config from "./Utils/config";
//import ErrorHandler
//import router
import carRouter from "./Routes/vehicles";
import ErrorHandler from "./MiddleWare/routeNotFound";
import loginRouter from "./Routes/login";
import customerRouter from "./Routes/customerRouter";


//create server
const server = express();
const isAdmin = false;

//configure cors
//origin => מאיפה מגיעה הבקשה
//verbs => GET POST DELETE UPDATE PATCH
//Allowed Headers => Authorization
//Exposed Headers => Authorization
//optionsSuccessStatus => 200,204

//use Cors Option
const corsOptions = {
    origin: "*", //allow any origin
    methods: ["GET","POST"], //which methods i will allow
    allowedHeaders: ["Content-Type","Authorization"], //which headers i will get
    exposedHeaders: ["Authorization"] //which headers i will expose
}

const serverCors = {
    origin: "192.168.60.53",
    methods: ["POST"],
    allowedHeaders: ["Content-Type","Authorization"],
    exposedHeaders: ["Authorization"]
}

//cors = cross origin research sharing..
server.use(cors(isAdmin?serverCors:corsOptions));

//how we send data back (JSON,XML,RAW,String)
server.use(express.json());

//where i will save my files from upload
server.use(express.static("upload"));

//enable file uploading, and create a path for the the files if it no exists
server.use(fileUpload({createParentPath:true}));

//using routes => localhost:8080/api/v1/vehicles
server.use("/api/v1/vehicles", carRouter);
server.use("/api/v1/login", loginRouter);
server.use("/api/v1/customer",customerRouter)

//404 handler
server.use("*",ErrorHandler);

//start the server
server.listen(config.webPort, ()=>{
    console.log(`listing on http://${config.webHost}:${config.webPort}`);
})