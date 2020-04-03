$(document).ready(function () {
  var modal = $('.modal');
  var modalThx = $('.modal-thx');
  var modalBtn = $('[data-toggle=modal]');

  // Обработка клика по кнопке и вызов модального окна
  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });

  // Обработка нажатия клавиши Esc
  // Если открыто модальное окно - закрывает его
  $(document).keydown(function (e) { 
    if (e.keyCode === 27) {
      modal.removeClass('modal--visible');
    };
    if (e.keyCode === 27) {
      modalThx.removeClass('modal-thx--visible');
    };
  });
  
  // Обработка клика, при открытом модальном окне
  $(modal).mouseup(function (e) { 
    var modalDialog = $('.modal__dialog');
    //Клик был не по модальному окну, и его дочерним элементам
    if (!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0) {
      modal.removeClass('modal--visible'); // Скрываем модальное окно
    }
  });
  $(modalThx).mouseup(function (e) { 
    var modalDialogThx = $('.modal-thx__dialog');
    //Клик был не по модальному окну, и его дочерним элементам
    if (!modalDialogThx.is(e.target) && modalDialogThx.has(e.target).length === 0) {
      modalThx.removeClass('modal-thx--visible'); // Скрываем модальное окно
    }
  });
  
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: '_Qe-vVit56M',
      events: {
        'onReady': videoPlay,
      }
    });
  })
  function videoPlay(event) { 
    event.target.playVideo();
  }

  var mySwiper = new Swiper ('.cases__swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.cases__swiper-button-next',
      prevEl: '.cases__swiper-button-prev',
    },
  })
  var mySwiper = new Swiper ('.reviews__swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews__swiper-button-next',
      prevEl: '.reviews__swiper-button-prev',
    },
  })
  var mySwiper = new Swiper ('.news__swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.news__swiper-button-next',
      prevEl: '.news__swiper-button-prev',
    },
  })
  // Валидация модального окна и отправка формы
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 18
      }
    },
    messages: {
      userName: {
        required: "Введите имя",
        minlength: "Имя не короче двух букв"
      },
      userPhone: {
        required: "Введите телефон",
        minlength: "Введите в формате +7 (XXX) XXX - XX - XX"
      }
    }, 
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send-modal.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThx.addClass('modal-thx--visible');
        }
      });
    }
  });

  // Валидация формы цены и отправка
  $('.price__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userEmail: {
        required: true,
        email: true
      },
      userWeb: "required",
      userMessage: "required"
    },
    messages: {
      userName: {
        required: "Введите имя",
        minlength: "Имя не короче двух букв"
      },
      userEmail: {
        required: "Введите Email",
        email: "Введите корректный Email"
      },
      userWeb: "Введите адрес сайта",
      userMessage: "Введите сообщение"
    }, 
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send-price.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modalThx.addClass('modal-thx--visible');
        }
      });
    }
  });
  // Валидация формы вопросов и отправка
  $('.questions__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userEmail: {
        required: true,
        email: true
      },
      userPhone: {
        required: true,
        minlength: 18
      },
      userMessage: "required"
    },
    messages: {
      userName: {
        required: "Введите имя",
        minlength: "Имя не короче двух букв"
      },
      userEmail: {
        required: "Введите Email",
        email: "Введите корректный Email"
      },
      userPhone: {
        required: "Введите телефон",
        minlength: "Введите в формате +7 (XXX) XXX - XX - XX"
      },
      userMessage: "Введите сообщение"
    }, 
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send-questions.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThx.addClass('modal-thx--visible');
        }
      });
    }
  });

  // Маска для телефона
  $('[type=tel]').mask('+7 (000) 000-00-00');

});