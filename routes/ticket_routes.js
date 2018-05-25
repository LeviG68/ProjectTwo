var db = require("../models");
const Op = require('sequelize').Op;

module.exports = function(app) {
    
    app.get("/api/tenantTix", function(req, res) {

        db.Ticket.findAll({
            where: {
                TenantId: req.user.id,
                [Op.not]: [
                    {status: 'Closed'}
                ]
            }
        }).then(function(dbTenantTix) {
            res.json(dbTenantTix)
        })
    });

    app.post("/api/tenantTicket", function(req, res) {
        db.Ticket.create(req.body, {include: {model: db.Tenant}}).then(function(dbTenantTix) {
          res.json(dbTenantTix);
          console.log("This is the req.body in the ticket_routes: " + req.body)
        });
      });


};