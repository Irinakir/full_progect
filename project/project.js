$(".product").on('click', function() {
  //$('.new_prod_part').click(function(){
    $('#popup-container').css('display', 'flex');
  });
  $('#popup-container').click(function(e){
    if(this===e.target){
    $('#popup-container').css('display', 'none');
    }
    });
