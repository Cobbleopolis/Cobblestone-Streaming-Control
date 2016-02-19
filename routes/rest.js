var express = require('express');
var router = express.Router();
var mediaServer = require('../bin/mediaServer');

/* GET home page. */
router.get('/startServer', function(req, res, next) {
    if (!mediaServer.isServerRunning()) {
        mediaServer.startServer();
        res.send("Server Started");
    } else {
        res.send("Server already started")
    }
});

router.get('/stopServer', function(req, res, next) {
    if (mediaServer.isServerRunning()) {
        mediaServer.stopServer();
        res.send("Server Stopped");
    } else {
        res.send("Server already stopped")
    }
});

router.get('/restartServer', function(req, res, next) {
    if (mediaServer.isServerRunning()) {
        mediaServer.restartServer();
        res.send('Server Restarted');
    } else {
        res.send('Server not running')
    }
});

router.get('/isServerRunning', function(req, res, next) {
    res.send(mediaServer.isServerRunning())
});

module.exports = router;
