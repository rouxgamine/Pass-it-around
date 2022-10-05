// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)


// Mount middleware (app.use)


// Mount routes
app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    <a href="/98">take one down, pass it around</a>`);
})

app.get('/:number_of_bottles', (req, res) => {
    if (req.params.number_of_bottles > 0 && req.params.number_of_bottles < 99) {
        res.send(`<h1>${req.params.number_of_bottles} Bottles of beer on the wall</h1>
    <a href="/${req.params.number_of_bottles - 1}">take one down, pass it around</a>`)
    } else {
        res.send(`<h1>0 Bottles of beer on the wall</h1>
        <a href="/">take one down, pass it around</a>`)

    }

});


// Tell the app to listen on port 3000
app.listen(3002, function () {
    console.log('Listening on port 3002');
});