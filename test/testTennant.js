var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("PM-HQ Tennant", function () {
  // Extending timeout to 10 seconds 

  this.timeout(10000);
  it("should allow the user to login", function (done) {
    evaluateLogin()
      .wait('.welcomeMessage')
      .evaluate(() => {
        return document.title;
      })
      .screenshot()
      .then(()=>{
        // test passes
      })
      .catch((err)=>{
        // test fail
      })
  })
  it("should allow a logged in tennant to submit a ticket", function (maketix) {
    evaluateLogin()
      .type("#ticketName", "temp@temp.com")
      .type("#ticketDescription", "Password")
      .screenshot()
      .click('#submit')
      .wait('.confirmation')
      .screenshot()
      .then(()=>{
        // test passes
      })
      .catch((err)=>{
        // test fail
      })
  })
});

function evaluateLogin() {
  return Nightmare({ show: true })
    .goto("localhost:8080")
    .type("#logInEmail", "Temp@temp.com")
    .type("#pwd", "Password")
    .click("#logIn")
}