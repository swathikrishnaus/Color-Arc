
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






// ----------------------Review rating stars----------------------------

let startsbox = document.querySelectorAll('.starbox')
startsbox.forEach((box) => {
  let stars = box.querySelectorAll('svg')
  stars.forEach((star, index, arr) => {
    star.addEventListener('click', function() {
      let current = index;
      arr.forEach((_star, _index) => {
        if (_index <= current) {
          _star.style.fill = '#ffbb00'
        } else {
          _star.style.fill = '#a09f9f'
        }
      })

    })
  })
})

// ----------------------Review rating stars----------------------------
