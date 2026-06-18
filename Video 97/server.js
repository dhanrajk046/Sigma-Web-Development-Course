const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Employee = require("./models/Employee");

const app = express();
const PORT = 3000;


// Connect MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/company")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(express.static("public"));

const names = [
  "Harry",
  "Rohan",
  "Shubham",
  "Amit",
  "Rahul",
  "Priya",
  "Sneha",
  "Karan",
  "Vikas",
  "Anjali",
];

const languages = [
  "Python",
  "JavaScript",
  "Java",
  "C++",
  "Go",
  "Rust",
];

const cities = [
  "New York",
  "London",
  "Mumbai",
  "Delhi",
  "Berlin",
  "Tokyo",
];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.get("/generate", async (req, res) => {
  try {
    // Clear collection
    await Employee.deleteMany({});

    let employees = [];

    for (let i = 0; i < 10; i++) {
      employees.push({
        name: randomItem(names),
        salary: Math.floor(Math.random() * 5000000) + 500000,
        language: randomItem(languages),
        city: randomItem(cities),
        isManager: Math.random() > 0.5,
      });
    }

    await Employee.insertMany(employees);

    res.send("10 Employee Records Generated Successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error generating data");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});