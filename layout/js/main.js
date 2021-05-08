$(function(){
    $(window).on("scroll",function(){
        var scr=$(this).scrollTop();
        if(scr >=20)
        {
            $(".main-navbar").addClass("scroll-nav");
            $(".top-nav").addClass("top-hide");
        }
        else
        {
            $(".main-navbar").removeClass("scroll-nav");
            $(".top-nav").removeClass("top-hide");
        }
        //$(window).off("scroll");
        var offset=$(".info-counter").offset().top;
        if(scr>2400)
        {
            $('.time').countTo();
        }
       
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });

    //our team
    $(".team-memeber").hover(function(){
        $(this).find(".member-icons").show();
        $(".member-icons").parent(".team-memeber").addClass("our-member-hover");
    },function(){
        $(this).find(".member-icons").hide();
        $(".member-icons").parent(".team-memeber").removeClass("our-member-hover"); 
    });

    ////icon in navbar
    $(".nav-icon").on("click",function(){
        $(".nav-links").slideToggle();
    });
})