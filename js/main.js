$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu").toggleClass("menu--active");
  });
  $(".testimon__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinity: true,
    prevArrow:
      '<button class="prev__btn slider__btn"><img src="images/prev__btn.svg"></button>',
    nextArrow:
      '<button class="next__btn slider__btn"><img src="images/next__btn.svg"></button>',
    responsive: [
      {
        breakpoint: 1315,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".blog__inner").slick({
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    infinity: true,
    prevArrow:
      '<button class="prev__btn-2 slider__btn"><img src="images/prev__btn.svg"></button>',
    nextArrow:
      '<button class="next__btn-2 slider__btn"><img src="images/next__btn.svg"></button>',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  });

  $(".service__inner-play-popup").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});
