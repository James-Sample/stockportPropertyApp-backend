const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
require("dotenv").config();
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
const insertProperty = require("./controllers/addproperty.js");
const fetchProperties = require("./controllers/getproperties.js");

// database connection
const dbConnect = require("../src/database/dbConnect");
dbConnect();

const middle = multer({ dest: "files" });

app.get("/", (req, res) => {
  res.send("Hi from the backend");
});

app.post("/addProperty", insertProperty);
app.get("/getProperties", fetchProperties);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
