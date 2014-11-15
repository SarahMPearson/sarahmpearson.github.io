'use strict';

$(function(){
   $('.capstone').mouseenter(function(){
       $(this).animate({
           height: '+=10%'
       });
   });
   $('.capstone').mouseleave(function(){
       $(this).animate({
           height: '-=10px'
       });
   });
});
