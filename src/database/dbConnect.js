const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Connected to database");
  });

  mongoose.connection.on("Error", () => {
    console.log("Error while connecting to database:" + err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from database");
  });
};

module.exports = dbConnect;
