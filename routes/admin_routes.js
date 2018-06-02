var db = require("../models");
const Op = require('sequelize').Op;

// added for passport (levi added)
var passport = require("../config/passport");

module.exports = function(app) {

        // app.post("/api/post", function(req,res){
        //     db.Post.create(req.bod).then(function(dpPost){
        //         res.json(dpPost);
        //     })
        // })

        app.get("/api/ticket", function(req, res) {
            db.Ticket.findAll({
                where: {
                //     // TenantId: req.user.id,
                    [Op.not]: [
                        {status: 'Closed'}
                    ]
                }
            }).then(function(dbTenantTix) {
                res.json(dbTenantTix)
            })
        });
        
 
    // app.put("/api/tenantTix", function(req, res) {
    //     db.Ticket.update(
    //     req.body,
    //     {
    //         where: {
    //           id: req.body.id
    //         }
    //     }).then(function(dbTicket) {
    //     res.json(dbTicket);
    //     });
    // });


};
