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
    var q = url.parse(req.url,true);
    var filename = "."+q.pathname;
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(200,{'Content-Type':'application/json'});
            return res.end(JSON.stringify(jsonArray));
            /*
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("404 Not Found");
            */
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
   
    
   
    
}).listen(3000)