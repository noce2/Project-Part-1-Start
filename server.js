const express = require('express');
const path = require('path');

const app = express();

/* setting up mount paths for assets */
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/images/images_src', express.static(path.join(__dirname, 'images', 'images_src')));
app.use('/js', express.static(path.join(__dirname, 'js')));

/* setting up server paths */
app.get('/', (req, res) => res.sendFile('index.html', {
    root: __dirname,
}));
app.get('*', (req, res) => res.sendFile('index.html', {
    root: __dirname,
}));

app.listen(3000, () => {
    console.log('now listening on port 3000');
});