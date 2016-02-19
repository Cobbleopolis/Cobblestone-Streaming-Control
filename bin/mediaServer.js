var exec = require('child_process').exec;
var config = require('config');

var startCmd = config.get('forever.start');
var stopCmd = config.get('forever.stop');
var restartCmd = config.get('forever.restart');

var server = config.get('server');

var uid = config.get("forever.uid");

var isServerRunning = false;

exports.startServer = function() {
    if (!isServerRunning)
        foreverCommand(startCmd.command + " -a --uid " + uid + " " + server.script, startCmd.options, function() {
            isServerRunning = true
        }, function () {
            isServerRunning = false
        })
};

exports.stopServer = function() {
    if (isServerRunning)
        foreverCommand(stopCmd.command + " " + uid, stopCmd.options, function() {
            isServerRunning = false
        }, function () {
            isServerRunning = true
        });
};

exports.restartServer = function() {
    if (isServerRunning)
        foreverCommand(restartCmd.command + " " + uid, restartCmd.options, function() {
            isServerRunning = true
        })
};

function foreverCommand(command, commandOptions, successCallback, errorCallback) {
    console.log("Running Command: " + command);
    exec(command, commandOptions, function(error, stdout, stderr) {
        if (error) {
            console.log(stderr);
            if (errorCallback)
                errorCallback(error, stderr);
            throw error;
        }
        if (successCallback)
            successCallback(stdout);
        console.log(stdout);
    });
}

exports.isServerRunning = function() {
    return isServerRunning;
};