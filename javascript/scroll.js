OFFSET_TO_SHOW_BUTTON = 100;

$(window).scroll(function(e){
    var currentScrollPosition = $(document).scrollTop()

    if (currentScrollPosition >= OFFSET_TO_SHOW_BUTTON){
        $('#jumpToTop').show();
    } else {
        $('#jumpToTop').hide();        
    };
})


$("#jumpToTop").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});