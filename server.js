const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    // mongoose = require('mongoose');
    config = require('./config');

    const provisionerRoute = require('./provisioner.route');
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/provisioner', provisionerRoute)
    const port = process.env.PORT || 8080;

    const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
    });
