// https:www.npmjs.com/package/mongodb
// https://mongoosejs.com/docs/schematypes.html
import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todos.js";

let conn = await mongoose.connect("mongodb://localhost:27017/test");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const todo = new Todo({
    desc: "Description of this todo",
    isDone: false,
    days: 3,
  });
  todo.save();
  res.send("Hello World!");
});


app.get("/a", async(req, res) => {
  let todo = await Todo.findOne({})
  console.log(todo)
  res.json({title: todo.title, desc: todo.desc})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
