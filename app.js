require("dotenv").config();
const express = require('express');
const path =require('path');
const app = express();
const assetsPath = path.join(__dirname, "public");
const newRoute = require('./routes/new');
const indexRoute = require('./routes/index');
const singleMessageRoute = require('./routes/singleMessage');

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.use('/new',newRoute);
app.use('/',indexRoute);
app.use('/message',singleMessageRoute);

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

const port = process.env.SERVERPORT || 3000;

app.listen(port, ()=> {console.log(`the server is running on port ${port}`)});
