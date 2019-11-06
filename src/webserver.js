const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', './templates/default/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(require('./controllers'));

const server = app.listen(8080, () => {
    console.log(`Webserver listening on ${server.address().address}:${server.address().port}`);
});

module.exports = server;