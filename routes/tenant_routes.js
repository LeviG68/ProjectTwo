var db = require("../models");
var passport = require("../config/passport");

// CLient

// Do Something (passport.authenticate('local'))

// (req, res, next) => next

// Controller

module.exports = function(app) {

    app.post('/api/login', passport.authenticate('local'), (req, res) => {
        console.log('ROUTE HIT');
        res.json("/ticket");
    });

  

    app.post("/api/tenant", function(req, res) {
        db.Tenant.create(req.body)
            .then(function(dbTenant) {
                // res.json(dbTenant);
                console.log("This is the req.body in the tenant_routes: " + req.body);
                req.login(dbTenant, function(err) {
                    if (err) { return next(err); }
                    return res.status(201).json({

                    });
                  });
            })
            .catch(error => {

            });
      });
      
      app.get("/api/Tenant/", function(req, res) {
        console.log('/api/Tenant');
        
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Tenant.findAll({
          include: [db.Ticket]
        }).then(function(dbTenant) {
          console.log('dbTenant: ', dbTenant);
          res.json(dbTenant);
        });
      });

    //   app.get("/api/Tenant", function(req, res) {
    //     console.log("******" + res.TenantId)
    //     db.Tenant.findAll({
    //         include: [db.Ticket],
                        
    //     }).then(function(dbTenantTix) {
            
           
    //         res.json(dbTenantTix);
            
    //     })
    // });



};