const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/redirect', (req, res) => {
    res.send('<a href="http://localhost:5000">Redirect</a>');
});

app.listen(5000, () => console.log('Listening on 5000...'));