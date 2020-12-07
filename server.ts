import express from "express";
import { DatabaseConnection } from "./Config/database";
const app = express();

// const DatabaseConnection = require("./Config/database");

require("dotenv").config();

// Starting listen database
const databaseConnection = new DatabaseConnection();
databaseConnection.startConnection();

// Middlewares
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

import cors from "cors";
app.use(cors());

// Development Middlewares
if (process.env.NODE_ENV === "development") {
  var morgan = require("morgan");
  app.use(morgan("combined"));
}

app.use("/", require("./Routes/routes.ts"));

app.listen(process.env.PORT, function () {
  console.log("Example app listening on port 3000!");
});
