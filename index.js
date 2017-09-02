$(function(){
 $(".header").css("display","none");
 $(".contents").css("display","none");
});

$(window).on("load",function(){
  $(".contents").fadeIn("slow");
  $(".header").delay(2200).slideDown("slow");
});
