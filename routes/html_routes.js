// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var isAuthenticated = require('../config/middleware/isAuthenticated');

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

 
  app.get("/", function(req, res) {
      console.log("route hit in html_routes.js");
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });


  app.get("/ticket", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/ticketForm.html"));
  });

  
  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/adminPage.html"));
  });

  app.get('/protected',isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/protected.html'));
  });

};