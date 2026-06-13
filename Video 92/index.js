const express = require('express');
const app = express();
const port = 3000;

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

// https://ejs.co/#docs

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas";
    let searchText = "Search Now";
    let arr = ["Hey",54,65]

    res.render("index", {
        siteName: siteName,
        searchText: searchText
    });
});

app.get('/blog/:slug', (req, res) => {
    let blogName = "Adidas why and when?";
    let blogContent = "Its a very good brand";

    res.render("blogpost", {
        blogTitle: blogName,
        blogContent: blogContent
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});