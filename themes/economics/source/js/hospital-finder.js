$(document).ready(function () {
  var table = $("#hospital-finder").DataTable({
    autoWidth: false,
    ajax: "../../data/hospital-finder.txt",
    columns: [{
        className: "details-control",
        orderable: false,
        data: null,
        defaultContent: ""
      },
      {
        data: "Hospital Name"
      }
    ],
    order: [
      [1, "asc"]
    ]
  });

  // Add event listener for opening and closing details
  $("#hospital-finder tbody").on("click", "td.details-control", function () {
    var tr = $(this).closest("tr");
    var row = table.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      row.child.hide();
      tr.removeClass("shown");
    } else {
      // Open this row
      row.child(format(row.data())).show();
      tr.addClass("shown");
    }
  });
});