$("#createTicket").on("submit", createTicketFormSubmit);

function createTicketFormSubmit(event) {
    event.preventDefault();
    createTix({
        category: $("#categoryOptions > select").val().trim(),
        comment: $("#comment").val().trim() 
    });
    console.log("*******This works at line 15 in createTicket.js*********") 
  }

  function createTix(ticketData) {
    $.post("/api/tenantTicket", ticketData)
      .then(ticketData);
    console.log("This is the ticketData in the createTicket.js: " + ticketData);
  }