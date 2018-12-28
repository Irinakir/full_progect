document.addEventListener('DOMContentLoaded', function() {
$(".product").on('click', function() {
  //$('.new_prod_part').click(function(){
    $('#popup-container').css('display', 'flex');
  });
  $('#popup-container').click(function(e){
    if(this===e.target){
    $('#popup-container').css('display', 'none');
    }
    });

$(".prod_img").on('click', function() {
  //$('.new_prod_part').click(function(){
    $('#popup-container').css('display', 'flex');
  });
  $('#popup-container').click(function(e){
    if(this===e.target){
    $('#popup-container').css('display', 'none');
    }
    });

$(".new_prod_part-img").on('click', function() {
  //$('.new_prod_part').click(function(){
    $('#popup-container').css('display', 'flex');
  });
  $('#popup-container').click(function(e){
    if(this===e.target){
    $('#popup-container').css('display', 'none');
    }
    });
  
 
});

  var x=false
  function imgchange(obj,imgX,imgY) {
   if  (x){
 
       $('#popup-container').css('display', 'flex'),  
         obj.src=imgX;
  });
  $('#popup-container').click(function(e){
    if(this===e.target){
    $('#popup-container').css('display', 'none');
    }
    });
   } 
 }
