// $(function() {

// });

// sliding
$('.gnb a').click((e) => {
    // 800 -> 0.8
    $.scrollTo(this.hash || 0, 800);
    e.preventDefault();
});

// trigger
$('.trigger').click(() => {
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
});

// 클릭 시
$('.gnb a').click(() => {
    $('.gnb, .trigger').removeClass('active');
});

$(window).scroll(function () {
    // 스크롤 상단이 50px보다 크다면
    if ($(window).scrollTop() > 50) {
        $("header").addClass("active");
    } else {
        $("header").removeClass("active");
    }
});

$(".slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});
