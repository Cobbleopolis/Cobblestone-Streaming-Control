var exec = require('child_process').exec;
var config = require('config');
var fileExists = require('file-exists');
var path = require('path');

var forever = config.get('forever');

var startCmd = forever.start;
var stopCmd = forever.stop;
var restartCmd = forever.restart;

var fullDataPath = __dirname + path.sep + ".." + path.sep + forever.foreverDataPath;

var server = config.get('server');

var uid = forever.uid;

exports.startServer = function() {
    if (!exports.isServerRunning())
        foreverCommand(startCmd.command + " -a -p " + fullDataPath + " --pidFile " + fullDataPath + path.sep + uid + ".pid --uid " + uid + " " + server.script, startCmd.options)
};

exports.stopServer = function() {
    if (exports.isServerRunning())
        foreverCommand(stopCmd.command + " " + uid, stopCmd.options);
};

exports.restartServer = function() {
    if (exports.isServerRunning())
        foreverCommand(restartCmd.command + " " + uid, restartCmd.options)
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
    return fileExists(uid + ".pid", {"root": fullDataPath})
};