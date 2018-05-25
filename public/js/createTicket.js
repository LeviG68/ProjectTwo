$("#createTicket").on("submit", createTicketFormSubmit);


function createTicketFormSubmit(event) {
    event.preventDefault();
    // Calling the upsertAuthor function and passing in the value of the name input
    createTix({
        // tenantId: this.tenantId.val().trim(),
        category: $("#categoryOptions").val().trim(),
        comment: $("#comment").val().trim() 
             
    });
    console.log("*******This works at line 15 in createTicket.js*********") 
  }

  // A function for creating an author. Calls getAuthors upon completion
  function createTix(ticketData) {
    $.post("/api/tenantTicket", ticketData)
      .then(ticketData);
    console.log("This is the ticketData in the createTicket.js: " + ticketData);
  }