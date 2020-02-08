var mysql = require('mysql'); 
const express = require('express')
const cors = require('cors')
var bodyParser = require("body-parser");
const app = express()
const port= process.env.PORT || 3000;
//Here we are configuring express to use body-parser as middle-ware.
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

  var con = mysql.createConnection({
  host: "node.wavesbi.com",
  user: "extern",
  password: "extern123",
  database: "wavesBI"
});  

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

//const q = 'SELECT id,timestamp FROM type_3 WHERE assetId="EvN8cvuGKC2t1PA8ZEsgJth3paenSP4UAd8Z6K14z2P4"'
  

app.post('/query', function (req, res) {
    var query = req.body.selectPart+req.body.conditionPart
    
        con.query(query, function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          res.send(result)
        });
      
    /* console.log(query); */
    
    
  });
  
  app.listen(port, function () {
    console.log('Example app listening on port 3000!')
  })