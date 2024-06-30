const swiper = new Swiper('.swiper', {
    // speed: 400,
    spaceBetween: 15,

    slidesPerView: 3,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    // autoplay: {
    //     delay: 2500, // Tempo em milissegundos entre os slides
    //     disableOnInteraction: false, // Continuar autoplay após interação do usuário
    // },

    // loop: true, // Loop infinito dos slides

    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //     slidesPerView: 1,
    //     spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //     slidesPerView: 2,
    //     spaceBetween: 30
    //     },
    //     // when window width is >= 640px
    //     640: {
    //     slidesPerView: 3,
    //     spaceBetween: 40
    //     },

    //     780: {
    //     slidesPerView: 3,
    //     spaceBetween: 40
    //     }
    // }   
});