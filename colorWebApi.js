var http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, { 
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*' 
    });

    let colorValue = "blue";
    if (Math.random() < 0.5) {
        colorValue = "red";
    }
    response.end(JSON.stringify({ "color": colorValue }));

}).listen(8000);