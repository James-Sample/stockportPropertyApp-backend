const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
const insertProperty = require("./controllers/addproperty.js");
const fetchProperties = require("./controllers/getproperties.js");

app.get("/", (req, res) => {
  res.send("Hi from the backend");
});

app.post("/addProperty", insertProperty);
app.get("/getProperties", fetchProperties);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
