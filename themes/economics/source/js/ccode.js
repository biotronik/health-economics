$(document).ready(function () {
  var table = $("#ccode").DataTable({
    pagingType: "full",
    autoWidth: false,
    ajax: "../../data/ccode.txt",
    columns: [{
        className: "details-control",
        orderable: false,
        data: null,
        defaultContent: ""
      },
      {
        data: "model_number"
      },
      {
        data: "device_description"
      },
      {
        data: "device_category",
      },
      {
        data: "c_code"
      },
      {
        data: "description",
        visible: false
      },
      {
        data: "status",
        visible: false
      }
    ],
    order: [
      [1, "asc"]
    ]
  });

  // Add event listener for opening and closing details
  $("#ccode tbody").on("click", "td.details-control", function () {
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