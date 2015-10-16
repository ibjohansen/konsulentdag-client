var express = require('express');
var path = require('path');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

app.get('*.png', function (req, res) {
    res.sendFile(publicPath + req.path);
});

app.listen(port, function () {
    console.log('Server running on port ' + port);
});