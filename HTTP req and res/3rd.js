var http = require("http");
var fs = require("fs");

var server = http.createServer(function (request, response) {
    if (request.url == "/"){
        fs.readFile("login.html", function (err, data) {
            if (err) {
                response.writeHead(404);
                response.end("File not found");
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data);
                response.end();
            }
        });
    } 
        
        else if (request.url == "/enquiry") {
        fs.readFile("enquiry.html", function (err, data) {
            if (err) {
                response.writeHead(404);
                response.end("File not found");
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data);
                response.end();
            }
        });
    } else if (request.url == "/signup") {
        fs.readFile("signup.html", function (err, data) {
            if (err) {
                response.writeHead(404);
                response.end("File not found");
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data);
                response.end();
            }
        });
    }
    else if (request.url == "/home") {
        fs.readFile("index.html", function (err, data) {
            if (err) {
                response.writeHead(404);
                response.end("File not found");
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data);
                response.end();
            }
        });
    }  else {
        response.writeHead(404);
        response.end("Invalid Request");
    }
});

server.listen(3000);

console.log("Server running");
