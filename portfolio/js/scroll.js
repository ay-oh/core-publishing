$(window).scroll(function () {
    // 스크롤 상단이 50px보다 크다면
    if ($(window).scrollTop() > 50) {
        $("header").addClass("active");
    } else {
        $("header").removeClass("active");
    }
});
