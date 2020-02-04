$(document).ready(function(){
  $('.menu-tab').click(function(){
    $('.menu-hide').toggleClass('show');
    $('.menu-tab').toggleClass('active');
  });
  $('a').click(function(){
    $('.menu-hide').removeClass('show');
    $('.menu-tab').removeClass('active');
  });
    
//    var sitesLinks = $(".sitesLinks");
//    
//    sitesLinks.on(mouseover, function(){
//        if($(".site_resto").siblings.css('z-index') == 2) {
//            $(".site_resto").css('z-index', '5');
//        } else if($(".site_resto").siblings.css('z-index') == 3) {
//            $(".site_resto").css('z-index', '5');
//        } else if($(".site_resto").siblings.css('z-index') == 4) {
//            $(".site_resto").css('z-index', '5');
//        }
//    });
    
    $(".sitesLinks").on("mouseover", function(){
        var positionOnList = $(this).index() + 1;
        var focusedImg =  $(".imgSelect>ul>li:nth-child(" + positionOnList + ")>img");
        console.log(positionOnList);
        
       
        focusedImg.addClass("zoom");
        focusedImg.parent().siblings().children().removeClass("zoom");   
        
    });
    
    $(".sitesLinks").on("mouseout", function(){
        var positionOnList = $(this).index() + 1;
        var focusedImg =  $(".imgSelect>ul>li:nth-child(" + positionOnList + ")>img");
        console.log(positionOnList);
        
       
        focusedImg.removeClass("zoom");   
    });
    
    
});

