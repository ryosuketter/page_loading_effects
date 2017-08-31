$(function(){
 $(".header").css("display","none");
});

$(window).on("load",function(){
  $(".header").delay(1000).slideDown("slow");
});
