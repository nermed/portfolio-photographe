$(document).ready(function(){

    let $btns = $('.project-area .button-group button');
    $btns.click(function(e){
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter:selector
        });
        return false;
    });
    $('project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
        // other options
      });
    //owl carousel
    $('.site-main .client-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0:{
                item: 1
            },
            500:{
                item:2
            }
        }
    })
    //header
    let nav_offset_top = $('.header_area').height() + 60;
    function navbarFixed(){
        if($('.header_area').length){
            let scroll = $(window).scrollTop();
            if(scroll >= nav_offset_top){
                $('.header_area .main-menu').addClass('navbar_fixed');
            } else {
                $('.header_area .main-menu').removeClass('navbar_fixed');
            }
        }
    }
    navbarFixed();

})