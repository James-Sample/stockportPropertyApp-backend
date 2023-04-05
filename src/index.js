const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
require("dotenv").config();
//const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
const multer = require("multer");
// const middle = express.urlencoded({ extended: true, limit: 1000000 });
const insertProperty = require("./controllers/addproperty.js");
const fetchProperties = require("./controllers/getproperties.js");
const uploadImage = require("./controllers/imageupload");
const filterProperties = require("./controllers/filterProperties");

// database connection
const dbConnect = require("../dbConnect");
dbConnect();

const middle = multer({ dest: "files" });

app.get("/", (req, res) => {
  res.send("Hi from the backend");
});

app.post("/addProperty", insertProperty);
app.get("/getProperties", fetchProperties);
app.get("/getProperties/:search", filterProperties);
app.post("/upload", middle.any(), uploadImage);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// mongoose.connection.on("connected", () => {
//   console.log("Connected to database");
// })

// mongoose.connection.on("Error", () => {
//   console.log("Error while connecting to database");
// })

// mongoose.connection.on("disconnected", () => {
//   console.log("Disconnected from database");
// })
