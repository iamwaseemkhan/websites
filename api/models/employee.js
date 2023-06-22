const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  First: String,
  Last: String,
  Email: String,
  Phone: String,
});

const employee = mongoose.model("employee", employeeSchema);

module.exports = employee;
