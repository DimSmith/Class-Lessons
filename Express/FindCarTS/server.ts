import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import config from "./Utils/config";
//import ErrorHandler
//import router
import carRouter from "./Routes/vehicles";
import ErrorHandler from "./MiddleWare/routeNotFound";

//create server
const server = express();

//cors = cross origin research sharing..
server.use(cors());

//how we send data back (JSON,XML,RAW,String)
server.use(express.json());

//where i will save my files from upload
server.use(express.static("upload"));

//enable file uploading, and create a path for the the files if it no exists
server.use(fileUpload({createParentPath:true}));

//using routes => localhost:8080/api/v1/vehicles
server.use("/api/v1/vehicles", carRouter);

//404 handler
server.use("*",ErrorHandler);

//start the server
server.listen(config.webPort, ()=>{
    console.log(`listing on http://${config.webHost}:${config.webPort}`);
})