$(document).ready(function(){
    $("#banner").click(function(){
      $("#text").slideToggle(1500);
      $(this).toggleClass("open");
    });
  });
 