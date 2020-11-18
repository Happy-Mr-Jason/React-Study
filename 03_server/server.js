const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

var data = fs.readFileSync("./data.json", "utf-8");

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get("/data", (req, res) => {
  res.send(JSON.parse(data));
});

server.listen(8000);
