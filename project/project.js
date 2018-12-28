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



$(document).ready(function() { // Ждём загрузки страницы
	
	$(".image_zoom").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						 "</div>");
		$(".popup").fadeIn(200); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(200);	// Медленно убираем всплывающее окн	
      setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 200);
		});
	});
	
});
