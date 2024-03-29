const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

//const DATABASE_URL = "mongodb://localhost:27017/fakeshop";
mongoose.connect("mongodb://127.0.0.1:27017/fakeshop", { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;