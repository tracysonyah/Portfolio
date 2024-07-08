const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'index.html'))
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'about.html'))
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'contact.html'))
});

app.get('/links', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'links.html'))
});


app.listen(4000, () => {
    console.log("App is listening at port 4000");
})

