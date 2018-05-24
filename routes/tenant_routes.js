var db = require("../models");

module.exports = function(app) {

    app.post("/api/tenant", function(req, res) {
        db.Tenant.create(req.body).then(function(dbTenant) {
          res.json(dbTenant);
          console.log("This is the req.body in the tenant_routes: " + req.body)
        });
      });


};