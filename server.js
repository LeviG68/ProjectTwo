const express = require("express");
const bodyParser = require("body-parser");
const reqLogger = require('morgan');
const Sequelize = require('sequelize');

// Requiring passport as we've configured it (levi added)
var passport = require("./config/middleware/passport");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(reqLogger('dev'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// might need this setup for running passport (levi added)
// app.use(express.static("public"));
app.use(express.static("."));

// passport info (levi added)
// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Import routes and give the server access to them.
require("./routes/admin_routes.js")(app);
require("./routes/tenant_routes.js")(app);
require("./routes/html_routes.js")(app)

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });