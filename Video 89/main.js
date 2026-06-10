const express = require("express");
const app = express();
const port = 3000;
const blog = require('./routes/blog');

const shop = require('./routes/shop');

app.use('/shop', shop);

app.use(express.static("public"));
app.use('/blog', blog);

app.get("/", (req, res) => {
  console.log("Hey its a get request");
  res.send("Hello World2!");
});

app.post("/", (req, res) => {
  console.log("Hey its a post request");
  res.send("Hello World post!");
});

app.get("/index", (req, res) => {
  res.sendFile('templates/index.html', { root: __dirname });
});

app.put("/", (req, res) => {
  res.send("Hello World put!");
});

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4, name: ["Harry", "Jerry"] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});