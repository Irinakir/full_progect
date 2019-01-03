function Slider(params = {}) {
  const {
    containerSelector = '.slider',
    bodySelector = '.slider__wrapper',
    tagetSelector = 'img',
    sliderNextSelector = '.slider__next',
    sliderPrevSelector = '.slider__prev'
  } = params,
    sliderEl = document.querySelector(containerSelector) || createSliderEl(),
    sliderBodyEl = sliderEl.querySelector(bodySelector),
    sliderNextEl = sliderEl.querySelector(sliderNextSelector),
    sliderPrevEl = sliderEl.querySelector(sliderPrevSelector);
  let currentShownIndex = 0,
      slidesLength = 1;
  
  window.addEventListener('click', openSliderByCLick);
  
  sliderEl.addEventListener('click', closeSlider);

  sliderNextEl.addEventListener('click', function(e) {
    e.preventDefault();
    
    showSlide(currentShownIndex + 1);
  });
  
  sliderPrevEl.addEventListener('click', function(e) {
    e.preventDefault();
    
    showSlide(currentShownIndex - 1);
  })
  
  // Dop. Fuction
  
  function openSlider(targetEl) {
    const groupId = targetEl.dataset.group,
      querySelector = groupId 
          ? `${tagetSelector}[data-group=${groupId}]`
          : tagetSelector,
      targetCol = document.querySelectorAll(querySelector);
    
    fillSliderContent(targetCol);

    showSlide(Array.prototype.findIndex.call(
      targetCol, 
      function(el) {
        return el === targetEl;
      }
    ));
    
    if (targetCol.length > 0) {
      slidesLength = targetCol.length;
    } else {
      slidesLength = 1;
    }
    
    sliderEl.classList.add('slider--active');
  }
  
  function showSlide( slideIndex ) {
    if (slideIndex < 0) {
      slideIndex = slideIndex + slidesLength;
    }
    
    currentShownIndex = +slideIndex % slidesLength;
    
    sliderBodyEl.style.transform = `translateX(${-currentShownIndex*100}%)`;
  }
  
  function closeSlider(e) {
    if (e.target === e.currentTarget) {
      sliderEl.classList.remove('slider--active');

      sliderBodyEl.innerText = '';
    }
  }
  
  function fillSliderContent(targetCol) {
    sliderBodyEl.innerText = '';
    
    sliderBodyEl.append.apply(
      sliderBodyEl,
      [...targetCol].map(createSildeEl)
    );
  }
  
  function createSildeEl(targetEl) {
    const imgSrc = targetEl.dataset.bigSrc,
          titleText = targetEl.dataset.title,
          altText = targetEl.getAttribute('alt'),
          slideEl = createSlide(imgSrc, altText, titleText);
    
    return slideEl;
  }
    
  function createSlide(imgSrc, altText = '', titleText) {
    const slideEl = document.createElement('li'),
          imgEl = document.createElement('img');
    
    slideEl.classList.add('slider__item');
    slideEl.append(imgEl);
    
    imgEl.setAttribute('src', imgSrc);
    imgEl.setAttribute('alt', altText);
    
    if (titleText) {
      const titleEl = document.createElement('h3');
      
      titleEl.classList.add('slider__item-title');
      titleEl.innerText = titleText;
      
      slideEl.append(titleEl);
    }
    
    return slideEl;
  }
  
  function createSliderEl() {
    const sliderEl = document.createElement('div'),
          sliderViewboxEl = document.createElement('div'),
          sliderWrapperEl = document.createElement('ul'),
          sliderTapeEl = document.createElement('div'),
          sliderNext = document.createElement('button'),
          sliderPrev = document.createElement('button');
    
    sliderEl.classList.add('slider');
    sliderViewboxEl.classList.add('slider__viewbox');
    sliderWrapperEl.classList.add('slider__wrapper');
    sliderNext.classList.add('slider__next');
    sliderPrev.classList.add('slider__prev');
    sliderTapeEl.classList.add('slider__tape');
    
    sliderNext.innerText = 'Next';
    sliderPrev.innerText = 'Prev';
    
    sliderEl.append(sliderViewboxEl);
    sliderTapeEl.append(sliderWrapperEl);
    sliderViewboxEl.append(sliderTapeEl, sliderNext, sliderPrev);
    
    document.body.append(sliderEl);
    
    return sliderEl;
  }
  
  function openSliderByCLick(e) {
    const targetEl = e.target.closest(tagetSelector);
    
    if (targetEl) {
      e.preventDefault();
      openSlider(targetEl);
    }
  }
}

Slider({
  containerSelector: '.slider',
  tagetSelector: '[data-type="slide"]'
});

$(document).ready(function() { // Ждём загрузки страницы
	
	/*$(".image_zoom").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(this);	// Получаем изображение, на которое кликнули*/
	$(".button_zoom").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(".image_zoom");	// Получаем изображение, на которое кликнули
	
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
