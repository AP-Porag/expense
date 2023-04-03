require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const {db} = require("./db/database");
const {readdirSync} = require("fs");


const app = express();
const port = process.env.PORT;

//middlewares

app.use(express.json());
app.use(cors());

//routes

const server = () => {

    db();
    app.listen(port,()=>{
        console.log('listening on port: '+port)
    })
}

server();