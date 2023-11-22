
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const cookieParser = require("cookie-parser");  

const Products = require("./models/productsSchema");

const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");


app.use(express.json());
app.use(cookieParser("your-secret-key"));
app.use(cors());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://amazon-clone-client-phi.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    next();
})
app.use(router);



const port = 8005;


app.listen(port,()=>{
    console.log(`server is running at ${port}`);
});

DefaultData();
