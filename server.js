const express = require("express");
const bodyParser = require("body-parser");
const reqLogger = require('morgan');
const Sequelize = require('sequelize');


var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(reqLogger('dev'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static("./public"));

// Import routes and give the server access to them.
require("./routes/admin_routes.js")(app);
require("./routes/ticket_routes.js")(app);
require("./routes/html_routes.js")(app)
require("./routes/tenant_routes.js")(app)

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });