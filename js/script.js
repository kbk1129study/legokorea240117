$(function(){
    $('.menu').slicknav();
    // pc 슬라이드 업다운
    $(".menu>ul>li>a").mouseover(function(){
        $(".menu>ul>li>ul, #smenu_bar").slideDown("fast");
    });
    $(".headerInner").mouseleave(function(){
        $(".menu>ul>li>ul, #smenu_bar").fadeOut("fast");
    });
});