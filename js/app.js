$(document).ready(function() {
    $("#lightSlider").lightSlider({
        pager: false,
    }); 

    $("#lightSlider-2").lightSlider({
        pager: false,
    }); 
    $("#lightSlider-3").lightSlider({
        pager: false,
    }); 
    $("#lightSlider-4").lightSlider({
        pager: false,
    }); 
    $("#lightSlider-5").lightSlider({
        pager: false,
    }); 
  });






  let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});
