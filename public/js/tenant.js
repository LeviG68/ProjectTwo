$(document).ready(function() {

  $("#createTenant").on("submit", createTenantFormSubmit);
  

// var login = $('#loginTenant').on('submit', tenantLogIn)

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

  // A function for creating an author. Calls getAuthors upon completion
  function createTenant(tenantData) {
    $.post("/api/tenant", tenantData, function(data) {
      window.location.replace('/ticket');
    });
  }

});

