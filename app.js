const http = require('http');

const port = 8888;

const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(port, () => {
    console.log(`Server successfully running on port ${port}`);
});