import express from 'express';
import cors from 'cors';
//const bodyParser = require('body-parser');
import { createConnection } from 'mysql';
// create express app
const app = express();
// Setup server port
const port = 5000;
const conn = createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Panda@123',
    database : 'mydb',
    port    :   3306
  });
  conn.connect(function(err) {
    if (err) {
    throw err;
    }
    console.log("Database Connected!");
  });

  // CORS is enabled for all origins
