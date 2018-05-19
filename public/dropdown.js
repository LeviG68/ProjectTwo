var statusOptions = {
  "open": "Open",
  "acknowledge": "Acknowledge",
  "inprogress" : "Inprogress",
  "closed": "Closed"
}


var statusSelect = $('<select/>');

for(var val in statusOptions) {
  $('<option/>', {value: val, text: statusOptions[val]}).appendTo(statusSelect);
}

statusSelect.appendTo("#statusOptions");

// this is a temp var for demonstration purposes, will not be required for final product 

var statusSelect2 = $('<select/>');

for(var val in statusOptions) {
  $('<option/>', {value: val, text: statusOptions[val]}).appendTo(statusSelect2);
}

statusSelect2.appendTo("#statusOptions2");

///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var categoryOptions = {
  "electrical": "Electrical",
  "plumbing": "Plumbing",
  "cosmetic" : "Cosmetic",
  "door": "Door"
}


var statusCatSelect = $('<select/>');

for(var vaule in categoryOptions) {
  $('<option/>', {value: vaule, text: categoryOptions[vaule]}).appendTo(statusCatSelect);
}

statusCatSelect.appendTo('#categoryOptions');