$(document).ready(function () {
  var table = $("#hospital-finder").DataTable({
    pagingType: "full",
    autoWidth: false,
    ajax: "../../data/hospital-finder.txt",
    columns: [{
        className: "details-control",
        orderable: false,
        data: null,
        defaultContent: ""
      },
      {
        data: "hospital_name"
      },
      {
        data: "address"
      },
      {
        data: "city"
      },
      {
        data: "state"
      },
      {
        data: "zip_code"
      },
      {
        data: "provider_id",
        visible: false
      },
      {
        data: "county_name",
        visible: false
      },
      {
        data: "phone",
        visible: false
      },
      {
        data: "hospital_type",
        visible: false
      },
      {
        data: "hospital_ownership",
        visible: false
      },
      {
        data: "emergency_services",
        visible: false
      },
      {
        data: "meets_meaningful_use_criteria",
        visible: false
      },
      {
        data: "overall_ratings",
        visible: false
      },
      {
        data: "comparative_mortality",
        visible: false
      },
      {
        data: "comparative_safety",
        visible: false
      },
      {
        data: "comparative_readmission",
        visible: false
      },
      {
        data: "comparative_pt_experience",
        visible: false
      },
      {
        data: "comparative_care_effect",
        visible: false
      },
      {
        data: "comparative_timeliness",
        visible: false
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