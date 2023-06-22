const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const product = require("./models/employee.js");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/employeeDB")
  .then(console.log("MongoDB is connected with productsDB"))
  .catch((err) => {
    console.error(err);
  });

app.get("/", async (req, res) => {
  const employee = await employee.find();
  res.json(employee);
});

app.post("/new/employee", (req, res) => {
  const New = new employee({
    First: req.body.first,
    Second: req.body.second,
    Email: req.body.email,
    Phone: req.body.phone,
  });

  New.save();

  res.json(New);
});

app.delete("/employee/delete/:id", async (req, res) => {
  const Delete = await employee.findByIdAndDelete({ "_id": req.params.id });
  res.json(Delete);
});

app.listen("3001", (req, res) => {
  console.log("Server is up and running at port 3001");
});
