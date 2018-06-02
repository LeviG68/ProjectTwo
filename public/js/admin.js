$(document).ready(function() { 
    getAdminTicket();
    // test();
    // getAdminTenant();
    // displayAdminTicket();

    let firstName;
    let lastName;
    let phoneNumber;
    let email;
    let streetAddress;
    let unit;
    let TicketId;
    let TenantId;
    let category;
    let status;
    let comment;
    let dateCreated;    
    let completeTicket = [];
    let customer = {};
    let ticket = {};

    var statusOptions = {
        "open": "Open",
        "acknowledge": "Acknowledge",
        "inprogress" : "Inprogress",
        "closed": "Closed"
    }


    function getAdminTicket() {
        console.log('happning');
            $.get("/api/ticket", function(data) {
                // console.log("------", data.length);
            for (var i = 0; i < data.length; i++) {
                
        

            var container = $("<div>");
                container.addClass("well");

            var newButton = $("<button class='updateButton'>").text("Update");    

            var statusSelect = $('<select class="selectMargin"/>');            
            for (var val in statusOptions) {
                $('<option/>', {value: val, text: statusOptions[val]}).appendTo(statusSelect);
            }

            statusSelect.appendTo(container);
            newButton.appendTo(container);  
            $("#displayTix").append(container);    
           
                 


            var newTr = $("<tr>");
            newTr.append("<td class='ticketLabel'>" + "<strong>Id: </strong>" + data[i].id + "</td>");
            newTr.append("<td class='ticketLabel'>" + "<strong>Status: </strong>" + data[i].status + "</td>");
            newTr.append("<td class='ticketLabel'>" + "<strong>Category: </strong>" + data[i].category + "</td>");
            newTr.append("<td class='commentWidth'>" + "<strong>Comment: </strong>" + data[i].comment + "</td>");
            newTr.append("<td class='commentWidth'>" + "<strong>Created: </strong>" + data[i].createdAt + "</td>");

           
            $(container).append(newTr); 

                }
               
            });
        }

        var tenant;

        // function getAdminTenant(getAdminTenant) {
        //     $.get("/api/Tenant", function(data) {
        //         // displayAdminTenant();
        //         for (var j = 0; j < data.length; j++) {
        //             TenantId = data[j].id;
        //             firstName = data[j].firstName;
        //             console.log("this is the tenant------: " + TenantId + firstName);
        //         }

        //         console.log("This is the tie in: " + comment + TicketId + firstName + TenantId);

        //         // console.log("this is the tenant: " + tenant[0]);

        //     });
        // }

      

        // var displayAdminTenant = function createAdminTenant(adminTenantData) {
           
        //     var newTr = $("<tr>");
        //     var newRow2 = $("<tr>");
        //     newTr.data("Tenant", adminTenantData);
        //     console.log("------Admin: " + JSON.stringify(adminTenantData));
        //     newTr.append("<td>" + "First Name: " + adminTenantData.firstName + "</td>");
        //     newTr.append("<td>" + "Last Name: " + adminTenantData.lastName + "</td>");
        //     newTr.append("<td>" + "Street: " + adminTenantData.street + "</td>");
        //     newTr.append("<td>" + "Unit#: " + adminTenantData.unit + "</td>");
        //     newTr.append("<td>" + "Phone: " + adminTenantData.phoneNumber + "</td>");
        //     newTr.append("<td>" + "Email: " + adminTenantData.registeredEmail + "</td>");
        //     return newTr;
        //     $(container).append(newTr);
        // }

       var displayAdminTicket = function createAdminTicket(adminTicketData) {
            // console.log(ticketData);
           
            var newTr = $("<tr>");
            var newRow2 = $("<tr>");
            newTr.data("ticket", adminTicketData);
            newTr.append("<td>" + "Id: " + adminTicketData.id + "</td>");
            newTr.append("<td>" + "Status: " + adminTicketData.status + "</td>");
            newTr.append("<td>" + adminTicketData.category + "</td>");
            newTr.append("<td>" + adminTicketData.comment + "</td>");
            newTr.append("<td>" + adminTicketData.createdAt + "</td>");
            return newTr;
            $(container).append(newTr);
        }

        // function createAdminContainer() {
        //     $(container).append(displayAdminTenant, displayAdminTicket);
            
        // }

        function displayAdminTicket() {
            $.get("/api/tenant", function(data) {
                // console.log("this is the data in admin: " + data);
              for (var i = 0; i < data.length; i++) {
                  $("#displayTix").append(displayAdminTicket(data[i]));
              }
            });
          }


});