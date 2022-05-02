$(function(){

    if($(window).width() > 767)
    {
        var quoteh=$("#quote").height();
        $(".quotefit").css({height:quoteh}); 

        var grh=$("#gr").height();
        $(".grfit").css({height:grh}); 
        
        var h1h=$("#have1").height();
        $(".havefit1").css({height:h1h});
    
        var h2h=$("#have2").height();
        $(".havefit2").css({height:h2h});
    }

});