'use strict'

var path    = require('path');
var express = require('express');
var morgan  = require('morgan');

var app = express();
var port = process.env.PORT || 3001;

app.use( morgan('dev') );
app.use( express.static( path.join( __dirname, 'public' ) ) );

app.listen( port, function() {
    console.log( 'App listening on', port );
});