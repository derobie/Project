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
    var filename = q.pathname;
    
    //returns the necessary data items if a number is entered
    if(filename ==='/1'){
        res.writeHead(200);
        res.write(JSON.stringify(jsonArray[0]));
        return res.end();
    }
    
    else if(filename ==='/2'){
        res.writeHead(200);
        res.write(JSON.stringify(jsonArray[1]));
        return res.end();
    }
    
    else if(filename ==='/3'){
        res.writeHead(200);
        res.write(JSON.stringify(jsonArray[2]));
        return res.end();
    }
    
    else if(filename ==='/4'){
        res.writeHead(200);
        res.write(JSON.stringify(jsonArray[3]));
        return res.end();
    }
    
    else if(filename ==='/5'){
        res.writeHead(200);
        res.write(JSON.stringify(jsonArray[4]));
        return res.end();
    }
    
    else if(filename ==='/6'){
        res.writeHead(200);
        res.write(JSON.stringify(jsonArray[5]));
        return res.end();
    }
    
    else if(filename ==='/7'){
        res.writeHead(200);
        res.write(JSON.stringify(jsonArray[6]));
        return res.end();
    }
    
    else if(filename ==='/8'){
        res.writeHead(200);
        res.write(JSON.stringify(jsonArray[7]));
        return res.end();
    }
    
    else if(filename ==='/9'){
        res.writeHead(200);
        res.write(JSON.stringify(jsonArray[8]));
        return res.end();
    }
    
    else if(filename ==='/10'){
        res.writeHead(200);
        res.write(JSON.stringify(jsonArray[9]));
        return res.end();
    }
    //returns all items if no number 1-10 is entered
    else{
        res.writeHead(200);
        res.write(JSON.stringify(jsonArray));
        return res.end(); //end the response
    }
    
    
}).listen(3000)