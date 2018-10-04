function myFunction() {
  var x = document.getElementById("hotness");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$(window).on("load", function() {
  $("#disclaimerModal").modal("show");
});
