var express = require('express');
var router = express.Router();
var mediaServer = require('../bin/mediaServer');

/* GET home page. */
router.get('/startServer', function(req, res, next) {
    mediaServer.startMediaServer();
    res.send("Server Started");
});

router.get('/stopServer', function(req, res, next) {
    mediaServer.startMediaServer();
    res.send("Server Stopped");
});

router.get('/restartServer', function(req, res, next) {
    mediaServer.restartServer();
    res.send('Server Restarted');
});

module.exports = router;
