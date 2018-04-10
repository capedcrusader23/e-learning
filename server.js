const express = require('express');
const request = require('request');
const yargs = require('yargs');

const port = 8888||process.env.port;
const app = express();

app.get('/',function (req, res) {
    res.send("At root route/");
});

app.listen(port,function () {
    console.log("App is running on port"+port);
});
