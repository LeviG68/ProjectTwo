var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("PM-HQ Admin", function () {
  // Extending timeout to 10 seconds 

  this.timeout(10000);
  it("should log in the user and send to the ticket management page", function (done) {
    Nightmare({ 
      show: true,
      // openDevTools: {detach: true }
    })
      .goto("http://localhost:8080")
      .type("#logInEmail", "admin@admin.com")
      .type("#pwd", "Password")
      .click("#login")
      .wait(5000)
      .evaluate(() => {
        return document.title;
      })
      // .screenshot()
      .then(function(title){
        // test passes
        expect(title).to.equal("Manage Ticket");
        done()
      })
      // .catch((err)=>{
      //   test fail
      // })
    // done()
  });
});