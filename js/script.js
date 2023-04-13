$(function () {
  $(".banner-slid").slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToscScroll: 1,
    dots: false,
    //   infinite: true,
    adaptiveHeight: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
    prevArrow: '<i class="fa-solid fa-left-long left-slide-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-right-long right-slide-arrow"></i>',
  });
  $(".service-slide").slick({
    autoplay: false,
    slidesToShow: 3,
    slidesToscScroll: 1,
    adaptiveHeight: true,
    pauseOnHover: false,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: '<i class="fa-sharp fa-solid fa-angle-up up-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-angle-down down-arrow" ></i>',
  });
  $(".review-slider").slick({
    autoplay: false,
    slidesToShow: 3,
    slidesToscScroll: 1,
    adaptiveHeight: true,
    pauseOnHover: false,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: '<i class="fa-sharp fa-solid fa-angle-up review-up-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-angle-down review-down-arrow" ></i>',
    asNavFor: ".review-detils-slider",
  });
  $(".review-detils-slider").slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToscScroll: 1,
    adaptiveHeight: true,
    pauseOnHover: false,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    asNavFor: ".review-slider",
  });
  $(".counter").counterUp({
    delay: 100,
    time: 3000,
  });

  $(".invest-wrapper").slick({
    autoplay: true,
    slidesToShow: 5,
    slidesToscScroll: 1,
    dots: false,
    adaptiveHeight: true,
    speed: 500,
    cssEase: "linear",
    pauseOnHover: false,
    prevArrow:'<i class="fa-solid fa-angles-left invest-left"></i>',
    nextArrow:'<i class="fa-solid fa-angles-right invest-right"></i>',
  });
});
