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

    //     db.Ticket.findAll({
    //         where: {
    //             tenantId: req.body.registeredEmail,
    //             [Op.not]: [
    //                 {status: req.body.status.closed}
    //             ]
    //         },
    //         include: [db.Ticket]
    //     }).then(function(dbTenantTix) {
    //         res.json(dbTenantTix)
    //     })
    // });

    app.post("/api/tenant", function(req, res) {
        db.Tenant.create(req.body)
            .then(function(dbTenant) {
                // res.json(dbTenant);
                console.log("This is the req.body in the tenant_routes: " + req.body);
                req.login(dbTenant, function(err) {
                    if (err) { return next(err); }
                    return res.status(201).json({});
                  });
            })
            .catch(error => {

            });
      });


};