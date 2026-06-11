const express = require('express');
const app = express();
const port = 3000;
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))

app.use('/blog', blog)


//Middleware 1 -Logger for our application
app.use((req, res, next)=>{
    console.log(req.headers)
    req.harry = "I am harry bhai";
    fs.appendFileSync(
        "logs.txt",
        `${new Date().toLocaleDateString()}: ${req.method}\n`
    );

    console.log(`${new Date().toLocaleString()}: ${req.method}`);

    next();
});

//Middleware 2
app.use((req, res, next) => {
  console.log('m2');
  req.harry = "I am Rohan bhai";
  next();
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.get('/contact', (req, res) => {
  res.send('Hello World!' + req.harry);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});