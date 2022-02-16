const express = require('express');
const app = express();

const mongoose = require('./Database/mongoose');
const List = require('./Database/Models/list');
const Task = require('./Database/Models/task');


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/lists', (req, res) => {
    Task.find({})
        .then(lists => res.send(lists))
        .catch((error) => console.log(error));
});

app.use(express.json());
app.listen(3000, () => console.log("Server Connected on port 3000"));

