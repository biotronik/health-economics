$(document).ready(function () {
  var table = $("#cptcodes").DataTable({
    pagingType: "full",
    autoWidth: false,
    ajax: "../../data/cptcodes.txt",
    columns: [{
        className: "details-control",
        orderable: false,
        data: null,
        defaultContent: ""
      },
      {
        data: "procedure_type"
      },
      {
        data: "cpt_code"
      },
      {
        data: "cpt_code_description"
      },
      {
        data: "primary_category",
        visible: false
      },
      {
        data: "system",
        visible: false
      },
      {
        data: "sub_system",
        visible: false
      }
    ],
    order: [
      [1, "asc"]
    ]
  });

  // Add event listener for opening and closing details
  $("#cptcodes tbody").on("click", "td.details-control", function () {
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