const express = require("express");
const app = express();
const date = require(__dirname + "/date.js");
app.use(express.urlencoded({ extended: true })); // for parsing the HTTP request
app.use(express.static("public"));
app.set("view engine", "ejs");
const taskList = ["Buy food"];
const workList = [];

app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("list", { listTitle: day, newListItems: taskList }); // render for EJS, send for HTML
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work", newListItems: workList }); // render for EJS, send for HTML
});

app.get("/about", function (req, res) {
  res.render("about.ejs");
});

app.post("/", function (req, res) {
  var newTask = req.body.newTask;
  if (req.body.list === "Work") {
    workList.push(newTask);
    res.redirect("/work");
  } else {
    taskList.push(newTask);
    res.redirect("/");
  }
});

app.post("/work", function (req, res) {
  var newTask = req.body.newTask;
  workList.push(newTask);
  res.redirect("/work");
});

app.listen(3000, function () {
  console.log("Listening on port 3000.");
});
