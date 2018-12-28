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
  
  $(".prod_img_zoom").on('click', function() {
  //$('.new_prod_part').click(function(){
    $('#popup-container').css('display', 'flex');
  });
  $('#popup-container').click(function(e){
    if(this===e.target){
    $('#popup-container').css('display', 'none');
    }
    });
    $(".prod_img_zoomg").on('click', function() {
  //$('.new_prod_part').click(function(){
    $('#popup-container').css('display', 'flex'),
      $("body").append(".prod_img_bg_zoom");
  });
  $('#popup-container').click(function(e){
    if(this===e.target){
    $('#popup-container').css('display', 'none');
    }
    });
});

