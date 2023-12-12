const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));

app.get("/getData", (req, res) => {
  fs.readFile("./US_Army/testData.csv", function (err, data) {
    //   var dataArray = data.split(/\r?\n/);
    res.send(data.toString());
  });
});

app.listen(5500);
