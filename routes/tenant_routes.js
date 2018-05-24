var db = require("../models");



var passport = require("../config/middleware/passport");

module.exports = function(app) {
    
    app.get("/api/tenantTix", function(req, res) {


        db.Ticket.findAll({
            where: {
                tenantId: req.body.registeredEmail,
                [Op.not]: [
                    {status: req.body.status.closed}
                ]
            },
            include: [db.Ticket]
        }).then(function(dbTenantTix) {
            res.json(dbTenantTix)
        })
    });

    app.post("/api/tenantTix", (req, res) => {
        console.log('Hello?');
        const newTenant = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            registeredEmail: req.body.email,
            password: req.body.registerPsw,
            phoneNumber: req.body.phone,
            street: req.body.street,
            unit: req.body.unit,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode,
        };
        db.Tenant.create(newTenant)
            .then(dbTenantTix => {
                console.log(dbTenantTix);
                res.redirect(dbTenantTix);
            })
            .catch(error => {
                console.log(error);
            });
      });


};