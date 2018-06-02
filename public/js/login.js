$(document).ready(function() { 
    $("#login").on("click", login)
    function login(event) {
        event.preventDefault();
        console.log("login ran");
        var loginObject = {
          registeredEmail: $('#logInEmail').val().trim(),
          password: $('#pwd').val().trim(),
        }
        $.post("/api/login", {email: loginObject.registeredEmail, password: loginObject.password})
        .then(function(data) {
          window.location.replace("/ticket");
        })
      }
});