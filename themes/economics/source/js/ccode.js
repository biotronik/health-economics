// C-Code Search Tool

// New Code
/* Formatting function for row details - modify as you need */
function format(d) {
  // `d` is the original data object for the row
  return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
    '<tr>' +
    '<td>HCPCS Level II Description:</td>' +
    '<td>' + d.description + '</td>' +
    '</tr>' +
    '</table>';
}

$(document).ready(function () {
  var table = $('#ccode').DataTable({
    // "columnDefs": [{
    //   "width": "24%",
    //   "targets": [1, 2, 3, 4]
    // }],
    "autoWidth": false,
    "ajax": "../../data/ccode.txt",
    "columns": [{
        "className": 'details-control',
        "orderable": false,
        "data": null,
        "defaultContent": ''
      },
      {
        "data": "device_category"
      },
      {
        "data": "device_name"
      },
      {
        "data": "model_number"
      },
      {
        "data": "c_code"
      },
      {
        "data": "description",
        "visible": false
      }
    ],
    "order": [
      [1, 'asc']
    ]
  });

  // Add event listener for opening and closing details
  $('#ccode tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = table.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      row.child.hide();
      tr.removeClass('shown');
    } else {
      // Open this row
      row.child(format(row.data())).show();
      tr.addClass('shown');
    }
  });
});










// // Old Code
// function format(d) {
//   // `d` is the original data object for the row
//   return (
//     '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
//     '<tr>' +
//     '<td>Full name:</td>' +
//     '<td>' +
//     d.device_category +
//     '</td>' +
//     '</tr>' +
//     '<tr>' +
//     '<td>Extension number:</td>' +
//     '<td>' +
//     d.device_name +
//     '</td>' +
//     '</tr>' +
//     '<tr>' +
//     '<td>Extra info:</td>' +
//     '<td>And any further details here (images etc)...</td>' +
//     '</tr>' +
//     '</table>'
//   );
// }

// $(document).ready(function () {
//   var table = $("#ccode").DataTable({
//     "ajax": "data/ccode.txt",
//     "columns": [{
//         "className": "details-control",
//         "orderable": false,
//         "data": null,
//         "defaultContent": ""
//       },
//       {
//         "data": "device_category"
//       },
//       {
//         "data": "device_name"
//       },
//       {
//         "data": "model_number"
//       },
//       {
//         "data": "c_code"
//       }
//     ],
//     "order": [
//       [1, "asc"]
//     ]
//   });

//   // Add event listener for opening and closing details
//   $("#ccode tbody").on("click", "td.details-control", function () {
//     var tr = $(this).closest("tr");
//     var row = table.row(tr);

//     if (row.child.isShown()) {
//       // This row is already open - close it
//       row.child.hide();
//       tr.removeClass("shown");
//     } else {
//       // Open this row
//       row.child(format(row.data())).show();
//       tr.addClass("shown");
//     }
//   });
// });

// $(document).ready(function() {
//   $("#ccode").DataTable({
//     ajax: ".data/ccode.txt",
//     data: dataSet,
//     responsive: true,
//     columns: [
//       {
//         title: "Device Category"
//       },
//       {
//         title: "Device Name"
//       },
//       {
//         title: "Model Number",
//         width: "40px"
//       },
//       {
//         title: "C Code",
//         width: "50px"
//       },
//       {
//         title: "HCPCS Level II Description"
//       }
//     ]
//   });
// });