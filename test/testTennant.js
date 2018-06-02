var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("PM-HQ Tennant", function () {

  this.timeout(30000);
  it("should allow the user to login", function (done) {
    // evaluateLogin()
    Nightmare({ 
      show: true,
      // openDevTools: {detach: true }
    })
      .goto("http://localhost:8080")
      .type("#logInEmail", "temp@temp.com")
      .type("#pwd", "Password")
      .click("#login")
      .wait(5000)
      .evaluate(() => {
        return document.title;
      })
      // .screenshot()
      .then((title)=>{
        // test passes
        expect(title).to.equal("Submit Ticket");
        done() 
      })
      // .catch((err)=>{
        // console.error(err)
      })
    
  it("should allow a logged in tennant to submit a ticket", function (done) {
    // evaluateLogin() 
      // .screenshot()
    Nightmare({ 
      show: true,
      // openDevTools: {detach: true }
    })
      .goto("http://localhost:8080")
      .type("#logInEmail", "temp@temp.com")
      .type("#pwd", "Password")
      .click("#login")
      .wait("body > div > h1")
      .click(".form-group")
      .click("#categoryOptions > select > option:nth-child(1)")
      .type("#comment", "my lights are flickering")
      .click(".btn.btn-secondary")
      .wait("#confirmMSG")
      .evaluate(() => {
        return document.querySelector("#confirmMSG").innerText;
      })
      .then((confirmation)=>{
        // test passes
        expect(confirmation).to.equal("Your ticket has been submitted");
        console.log(confirmation);
        done()
      })
      .catch((err)=>{
        // console.error(err)
      })
  });
});