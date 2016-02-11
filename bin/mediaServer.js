var forever = require('forever-monitor');
var config = require('config');

var serverFile = config.get('server.script');

var serverConfig = config.get('server.config');

var server = new (forever.Monitor)(serverFile, serverConfig);
server.on('start', function(process, data) {
    console.log("Server Start");
});

server.on('stop', function(process) {
    console.log("Server Stop");
});

exports.startMediaServer = function() {
    server.start();
};

exports.stopServer = function() {
    server.stop();
};

exports.restartServer = function() {
    server.restart();
};