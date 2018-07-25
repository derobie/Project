//Javascript for setting up the server
//set up the require statements

var http = require('http');
var dt = require('./myfirstmodule');
var fs = require('fs');
var url = require('url');
var mysql = require('mysql');
//For making sure things remain in scope
var solution;
var jsonArray;

//Connect to the database
var con = mysql.createConnection({
        host: "programtrial.cybow4xl9wfs.us-east-1.rds.amazonaws.com",
        user: "mUser",
        password: "idkImTrying168",
        port: "3306",
        database: "Attempt1"
    });

//query the database
    con.connect(function(err){
        if (err){return;};
        con.query("SELECT * FROM Attempt1.Animals", function (err, result, fields){
            if (err) throw err;
            solution=JSON.stringify(result);
            jsonArray=JSON.parse(solution);
            console.log(jsonArray);
        
        });
    });
//Creates the server
http.createServer(function (req, res) {
    var body = '<html><head><title> this is a title </title></head><body><p>This is also a test</p></body></html>';
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(body);
    res.end();
   
    
   
    
}).listen(3000)