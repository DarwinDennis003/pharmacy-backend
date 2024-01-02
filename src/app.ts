import { PORT_SETTINGS } from "./constant";
import * as PHARMACY from "./routes/pharmacy.routes";
const express = require("express");
const { Application } = require ("express");
const cors = require ("cors");
import morgan from "morgan";
const bodyParser = require("body-parser") as any;
const fs = require("fs") as any;
const path = require("path") as any;

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  {
    flags: "a",
  }
);

var corsOptions ={
  origin: "*",
  method:["GET","PUT","POST","DELETE","OPTIONS"],
  preflightcontinue:true,
  exposeHeaders:["Content-Type","Etag","Date","Connection"]
}  

export class App {
  private app;
  public PORT_SETTINGS = PORT_SETTINGS

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    console.log("All Server Modules are loaded");
  }

  settings() {
    this.app.set("port", this.port || 3019);
    this.app.use(cors(corsOptions))
    this.routes();
    this.middlewares()
  }

  async middlewares() {
    this.app.use(
      morgan("combined", {
        stream: accessLogStream,
      })
    );
    this.app.use(morgan("dev"));

    // this.app.use(helmet());
    // this.app.use(
    //   helmet.dnsPrefetchControl({
    //     allow: true,
    //   })
    // );

    this.app.use(
      bodyParser.json({
        limit: "20mb",
      })
    );
    this.app.use(
      bodyParser.urlencoded({
        limit: "20mb",
        extended: true,
        parameterLimit: 2000000,
      })
    );
    var corsOptions = {
      origin: "*", // Change to Azure VM IP
      methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
      preflightContinue: true,
      exposedHeaders: [
        "Content-Type",
        "ETag",
        "Date",
        "Connection",
        "Bearer-Token",
        "Set-Cookie",
      ],
    };
    this.app.use(cors(corsOptions));
    console.log("Initializing Lite Middlewares");
  }

  async routes() {  
   await this.app.use(PHARMACY.default); 
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log(
      "Server is currently running on port:",
      this.app.get("port")
    );
  }
}
