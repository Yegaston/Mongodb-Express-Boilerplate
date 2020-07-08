const express = require("express");
const app = express();
const DatabaseConnection = require("./Config/database");

require("dotenv").config();

// Starting listen database
const databaseConnection = new DatabaseConnection();
databaseConnection.startConnection();

// Middlewares
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const cors = require("cors");
app.use(cors());

// Development Middlewares
if (process.env.NODE_ENV === "development") {
  var morgan = require("morgan");
  app.use(morgan("combined"));
}

app.use("/", require("./Routes/routes.js"));

app.listen(process.env.PORT, function () {
  console.log("Example app listening on port 3000!");
});
