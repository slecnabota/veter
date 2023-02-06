$("body").on("click", ".selected", function(event) {
    event.stopPropagation();
    $(this).siblings(".container-options").toggleClass("open");  
  });
  
  $("body").on("click", ".search", function(event) {
    event.stopPropagation(); 
  });
  
  $("body").on("click", function() {
    $(".container-options").removeClass("open");
  });
  
  $("body").on("click", ".option", function() {
    var value = $(this).find("span").html();
    $(".selected").html(value);
    $("#sel").val(value);
    $(".container-options").toggleClass("open");  
  });

function openArrow(){
  document.querySelector(".selected").classList.toggle("arrow-up");
}
// 