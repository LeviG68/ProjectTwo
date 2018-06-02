$(document).ready(function() { 
    getTicket();
    disPlayTicket();

        function getTicket(getTicket) {
          console.log('happening');
            $.get("/api/ticket", function(data) {
            console.log("ticket", data);
            });
        }


      // Function for creating a new list row for authors
        function createTicketRow(ticketData) {
            console.log(ticketData);
            var newTr = $("<tr>");
            newTr.data("ticket", ticketData);
            newTr.append("<td>" + ticketData.id + "</td>");
            newTr.append("<td>" + ticketData.status + "</td>");
            newTr.append("<td>" + ticketData.category + "</td>");
            newTr.append("<td>" + ticketData.comment + "</td>");
            newTr.append("<td>" + ticketData.createdAt + "</td>");
            return newTr;
            $("#ticketList").append(newTr);
        }

        function disPlayTicket() {
            $.get("/api/ticket", function(data) {
              for (var i = 0; i < data.length; i++) {
                $("#ticketList").append(createTicketRow(data[i]));
              }
            });
          }

});