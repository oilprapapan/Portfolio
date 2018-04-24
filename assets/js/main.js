/*Navbar*/ 
$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 1){
        $('#navbar').css('padding','0 20px')
    } else{
        $('#navbar').css('padding',' 20px')
    }
})

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


/* page title*/ 
var typed = new Typed("#typed", {
    strings: ["Position : Web Developer.", "Position : front-end developer."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });

/* Smooth Scrolling*/ 
$(function(){
    $('a[href*="#"]:not([href="#"])').click(function(){
        if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && location.hostname == this.hostname){
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
        },1000);
        return false;
    }
}
});
});

  /* Progress bars*/
var delay = 1;
$(".progress-bar").each(function(i){
    $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: delay,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now)+'%');
        
        return false;
        }
    });
});

