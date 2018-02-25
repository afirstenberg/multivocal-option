const functions = require('firebase-functions');

const Config = require('./config.js');

const Multivocal = require('multivocal');
Multivocal.setConfig( Config );

exports.webhook = functions.https.onRequest( (req,res) => {
    Multivocal.process( req, res );
});
