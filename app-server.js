/**
 * Created by Dell on 3/5/2017.
 */
var express = require('express');
var app = express();

app.listen(3000);
app.use(express.static('public'));
