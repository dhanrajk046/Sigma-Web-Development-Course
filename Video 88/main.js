const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('Hello World!');
});

app.get('/contact', (req, res) => {
  res.send('Hello World!');
});

app.get('/blog/:slug', (req, res) => {
    console.log(req)
  res.send(`hello ${req.params.slug} and ${req.params.second}`);
});

app.get('/blog/intro-to-js', (req, res) => {
  res.send('Hello js Learner!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});