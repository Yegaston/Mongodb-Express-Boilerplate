var mongoose = require("mongoose");

export class DatabaseConnection {
  async startConnection() {
    // getting-started.js
    mongoose.connect(`mongodb://mongodb/${process.env.DB_DATABASE}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {
      // we're connected!
      console.log("MONGODB ON");
    });
  }
}
