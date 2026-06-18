const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name:String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

module.exports = mongoose.model("Employee", employeeSchema);