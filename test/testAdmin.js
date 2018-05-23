var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("PM-HQ", function () {
  // Extending timeout to 10 seconds 

  this.timeout(10000);
  it("should send user to the login page", function (done) {
    Nightmare({ show: true })
      // .goto("localhost:8080")
      .type("#logInEmail", "Temp")
      .type("#pwd", "Password")
      .click("#logIn")

      .evaluate(function () {
        return document.title;
        var tickets = [];
        $(".well").each(function () {
          var ticket = $("#ticknumber");
          tickNum.push(ticket);
        });
        return tickets.count();
      })
      // Asset the title is as expected
      .then(function (title) {
        expect(title).to.equal("Catalog | Codecademy");
        done();
      });
  });
});