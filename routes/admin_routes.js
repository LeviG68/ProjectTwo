var db = require("../models");

// added for passport (levi added)
var passport = require("../config/middleware/passport");

module.exports = function(app) {

        app.post("/api/post", function(req,res){
            db.Post.create(req.bod).then(function(dpPost){
                res.json(dpPost);
            })
        })
    // app.get("/api/Ticket", function(req, res) {
    //     db.Ticket.findAll({
    //         // include: [db.Ticket]
    //     }).then(function(dbTickets) { 
    //         res.json(dbTickets);
    //     });
    // });
 
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
