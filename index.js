const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/pages", express.static("./pages"));


app.listen(process.env.port, () => {
});

module.exports = app;