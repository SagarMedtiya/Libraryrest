require('dotenv').config();
const express = require('express')
const app = express();
const path = require('path');
const morgan = require("morgan");
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
const router = require('./routes')
const Dbconnect = require('./database')

Dbconnect();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(router);

app.listen(PORT,()=>console.log(`Listening on port ${PORT}`));
