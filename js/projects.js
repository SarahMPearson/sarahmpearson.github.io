'use strict';

$(document).ready(function(){
   $('.capstone').mouseenter(function(){
       $(this).animate(function(){
         $(this).height(10);
       });
   });
   $('.capstone').mouseleave(function(){
       $(this).animate(function(){
         $(this).height(10);
       });
   });
   var year = new Date().getFullYear();

  $("span.currentYear").html(year);

});
