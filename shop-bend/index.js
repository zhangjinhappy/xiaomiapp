var express = require('express');
const router = express.Router();
const mysql=require('./db');
const utils=require('./utils');
const interce =require('./utils/interce');
const redis=require("./cache");
const config=require("./config")
module.exports={express,router,mysql,utils,interce,redis,config}