
$(".dropdown-btn").click(function () {
    $(this).find("i").toggleClass("rotate-180");
})







// --------------------Profile password show start----------------------------

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  // --------------------Profile password end----------------------------





// ----------------------product-details read-more button----------------------------

$('.view-review').click(function() {
  $('.more-reviews').slideToggle();
  if ($('.view-review').text() == "View all Reviews") {
    $(this).text("View less Reviews")
  } else {
    $(this).text("View all Reviews")
  }
});


// ----------------------product-details read-more button----------------------------

