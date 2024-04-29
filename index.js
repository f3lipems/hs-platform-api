const os = require('os');
const cluster = require('cluster');
const express = require('express');
const path = require('path');
const compression = require('compression');

if (cluster.isMaster) {
    for (var i = 0, n = os.cpus().length; i < n; i += 1) {
        cluster.fork();
    }
}
else {
    application();
}

function application() {
    const app = express()
    app.use(compression());

    app.get('/', function (req, res) {
        res.send('HS Server')
    })

    app.listen(8080, function () {
        console.log('app:8080');
    });
}

