var http = require('http');

var PORTOne = 7000;
var PORTTwo = 7500;

function handleRequest (request, response) {
	response.end("You're awesome!" + request.url);
}

function requestAgain(request, response) {
	response.end("You Suck!" + request.url);
}

var serverOne = http.createServer(handleRequest);
var serverTwo = http.createServer(requestAgain);

serverOne.listen(PORTOne, function(){
	console.log("server listening port1");
})

serverTwo.listen(PORTTwo, function(){
	console.log("server listening port2");
})