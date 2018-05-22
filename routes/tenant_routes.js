var db = require("../models");

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

    app.post("/api/tenantTix", function(req, res) {
        db.Tenant.create(req.body).then(function(dbTenantTix) {
          res.json(dbTenantTix);
        });
      });


};