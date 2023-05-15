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
      password : '',
      database : 'my_id',
      port    :   3306
    });
    conn.connect(function(err) {
      if (err) {
      throw err;
      }
      console.log("Database Connected!");
    });

    // CORS is enabled for all origins
    app.use(cors());



    // parse requests of content-type - application/x-www-form-urlencoded
    //app.use(bodyParser.urlencoded({ extended: true }))
    // parse requests of content-type - application/json
    //app.use(bodyParser.json())
    // define a root route
    
    app.use(express.json()); //to accept data in json format 
    // app.use(express.urlencoded()); //to decode data sent through html form
    // app.use(express.static('public'));
    
    // app.post('/form', (req,res)=>{
    //   // res.sendFile(__dirname+'./form.html');
    //   return res.redirect('/practice');
    // })
    
    // app.post('formPost',(req,res)=>{
    //   console.log(req.body); //data we get is in body of request
    // })
    
    // app.get('/mydb.myentries', (req, res) => {
    //     var sql= "SELECT * FROM myentries";
    //     let query= conn.query(sql, (err, results) => {
    //         if(err) throw err;
    //         res.send(results);
    //       });
    //   });
    app.post('/my_id.tab', (req, res) => {
      console.log("HEllo",req.body);
      var sql= `INSERT INTO tab(name, spec, em, num, price, exp, bio)
                VALUES ("${req.body.name}", "${req.body.spec}", "${req.body.em}", "${req.body.num}", "${req.body.price}", "${req.body.exp}", "${req.body.bio}")`;
      
      conn.query(sql, (err, results) => {
          if(err) throw err;
          res.send(results);
        });
    });
    
    
    
    
      app.get('/my_id.tab', (req, res) => {
        var sql= "SELECT * FROM tab";
        conn.query(sql, (err, results) => {
            if(err) throw err;
            res.send(results);
          });
      });
    
    // listen for requests
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });