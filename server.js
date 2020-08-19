const express = require('express');

const app = express();

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/redirect', (req, res) => {
    res.send('<a href="http://localhost:5000">Redirect</a>');
});

app.get('/loaderExample', async (req, res) => {
    await sleep(5000);
    res.send('HELLO!!');
});

app.listen(5000, () => console.log('Listening on 5000...'));