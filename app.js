const express = require("express");
const app = express();
const https = require("https");
app.use(express.urlencoded({ extended: true })); // for parsing the HTTP request
app.use(express.static("public"));
app.set("view engine", "ejs");
var taskList = ["Buy food"];

app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: day, newListItems: taskList }); // render for EJS, send for HTML
});

app.post("/", function (req, res) {
  var newTask = req.body.newTask;
  taskList.push(newTask);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Listening on port 3000.");
});
