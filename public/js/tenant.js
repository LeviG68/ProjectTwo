$(document).ready(function () {
  $("#createTenant").on("submit", createTenantFormSubmit);
  $("#login").on("click", login);
  // var login = $('#loginTenant').on('submit', tenantLogIn);


  function createTenantFormSubmit(event) {
    event.preventDefault();
    // Calling the upsertAuthor function and passing in the value of the name input
    createTenant({
      // tenantId: this.tenantId.val().trim(),
      firstName: $("#firstName").val().trim(),
      lastName: $("#lastName").val().trim(),
      phoneNumber: $("#phone").val().trim(),
      registeredEmail: $("#userName").val().trim(),
      password: $("#registerPsw").val().trim(),
      state: $("#state").val().trim(),
      zipCode: $("#zipCode").val().trim(),
      city: $("#city").val().trim(),
      unit: $("#unit").val().trim(),


    });
    console.log("*******This works at line 15 in createTicket.js*********");
  }



  function login(event) {
    event.preventDefault();
    console.log("login ran");
    var loginObject = {
      registeredEmail: $('#logInEmail').val().trim(),
      password: $('#pwd').val().trim(),
    }
    $.post("/api/login", {
        email: loginObject.registeredEmail,
        password: loginObject.password
      })
      .then(function (data) {
        window.location.replace("/ticket");
      })
  }

  var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

  // var requiresAdmin = function () {
  //   return [
  //     ensureLoggedIn('/admin'),
  //     function (req, res, next) {
  //       if (req.user && req.user.isTenant === true)
  //         next();
  //       else
  //         res.send(401, 'Unauthorized');
  //     }
  //   ]
  // };

  // function tenantLogIn(event) {
  //   console.log('Loging in');
  //   event.preventDefault();
  //   logTenantIn({
  //     registeredEmail: $('#logInEmail').val().trim(),
  //     password: $('#pwd').val().trim(),
  //   });
  //   console.log(logTenantIn)
  //   return logTenantIn;
  // }

  // function logTenantIn(tenantData) {
  //   $.post('/api/login', tenantData, function(data) {
  //     console.log("api routes ran");
  //     // window.location.replace('/ticket');
  //   }).then(function(data) {
  //     window.location.replace('/ticket');
  //   })
  // }

  // A function for creating an author. Calls getAuthors upon completion
  function createTenant(tenantData) {
    $.post("/api/tenant", tenantData, function (data) {
      window.location.replace('/ticket');
    });
  }
});