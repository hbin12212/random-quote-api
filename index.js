const express = require('express');
const app = express();
const quotes = require('./data/quote.json');
const cors = require('cors');

app.use(cors());

function getRandomQuote() {
    let quote;
    while (!quote) {
        const idx = Math.floor(Math.random() * 594);
        quote = quotes.at(idx);
    }
    return `${quote.message} - ${quote.author}`;
}

/* GET home page. */
app.get('/', function (req, res, next) {
    const quote = getRandomQuote();
    res.json([
        {
            result: 'success',
        },
        {
            respond: quote,
        },
    ]);
    // res.render("index", { title: "Expre2ss2" });
});

module.exports = app;
