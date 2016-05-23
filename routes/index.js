var express = require('express');
var router = express.Router();
var os = require('os');

/* GET home page. */
router.get('/', function (req, res, next) {
    var interfaces = os.networkInterfaces();
    var addresses = [];
    for(var i in interfaces)
        for(j in interfaces[i]) {
            var address = interfaces[i][j];
            if (address.family === 'IPv4' && !address.internal)
                addresses.push(address);
        }
    res.render('index', {title: 'Cobblestone Streaming', addresses: addresses});
});

module.exports = router;
