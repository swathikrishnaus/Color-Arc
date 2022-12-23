
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


  // jQuery(document).ready(function($){
  //   $(".show-more-btn").click(function(e){
  //     $(".show-more-item:hidden").slice(0,3).fadeIn();
  //     if ($(".show-more-item:hidden").length < 1) $(this).fadeOut();
  //   })
  // })


// ----------------------product-details read-more button----------------------------


$('#show-more-content').hide();

$('#show-more').click(function(){
	$('#show-more-content').show(300);
	$('#show-less').show();
	$('#show-more').hide();
});

$('#show-less').click(function(){
	$('#show-more-content').hide(150);
	$('#show-more').show();
	$(this).hide();
});
// ----------------------product-details read-more button----------------------------

