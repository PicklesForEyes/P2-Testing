var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
var app = express();
var exphbs = require("express-handlebars");
var routes = require("./controller/dnd_controller.js");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use("/", routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(port);

console.log('Listening on port ' + port);