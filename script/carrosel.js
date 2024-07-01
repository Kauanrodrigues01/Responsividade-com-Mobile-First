function initializeSwiper() {
    const screenWidth = window.innerWidth;
    let swiperOptions;
  
    if (screenWidth < 1024) {
      swiperOptions = {
        mloop: true,
        effect: 'coverflow', // Escolha do efeito
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
      };
    } else if (screenWidth >= 1024) {
      swiperOptions = {
        spaceBetween: 10,
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      };
    }
  
    new Swiper('.swiper', swiperOptions);
  }
  
  // Inicialize o Swiper na carga da página
  initializeSwiper();
  
  // Atualize o Swiper ao redimensionar a janela
  window.addEventListener('resize', () => {
    document.querySelector('.swiper-container').swiper.destroy(true, true);
    initializeSwiper();
  });