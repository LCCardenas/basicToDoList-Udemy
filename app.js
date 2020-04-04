const express = require("express");
const app = express();
const https = require("https");
app.use(express.urlencoded({ extended: true })); // for parsing the HTTP request
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  var date = new Date();
  var currentDay = date.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednsday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "Unknown";
      break;
  }
  // list.ejs placed in "views" folder
  res.render("list", { kindOfDay: day }); // render for EJS, send for HTML
});

//app.post("/", function(req, res) {});

app.listen(3000, function() {
  console.log("Listening on port 3000.");
});
