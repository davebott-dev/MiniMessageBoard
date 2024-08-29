const dotenv= require("dotenv").config({path: 'config.env'});
const express = require('express');
const path =require('path');
const app = express();
const assetsPath = path.join(__dirname, "public");
const newRoute = require('./routes/new');
const indexRoute = require('./routes/index');

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.use('/new',newRoute);
app.use('/',indexRoute);

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

const port = dotenv.PORT || 3000;

app.listen(port,()=> {console.log(`the server is running on port ${port}`)});
