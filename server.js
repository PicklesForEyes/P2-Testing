const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();
const exphbs = require("express-handlebars");
const routes = require("./controller/dnd_controller.js");
const db = require('./models');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use("/", routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log('Listening on port' + port)
  })
})