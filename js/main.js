$(document).ready(function(){
    $(".slider-main").owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        items: 1
    });
    $(".slider-supplier").owlCarousel({
        margin:40,
        loop:true,
        autoWidth:true,
        nav:true,
        dots:false,
        items: 4
    });
    $(".toggle-filter").click(function(e){
        let activeThisFilter = $(this).hasClass("active"),
            filterAttrActive = $(this).parent().find(".active").attr("data-filter"),
            filterAttr = $(this).attr("data-filter");
        
        if(activeThisFilter === false) {
            $(".card-item-container[data-filter="+filterAttr+"]").show();
            $(".card-item-container").not("[data-filter="+filterAttr+"]").hide();
        }
        else {
            $(".card-item-container:hidden").show();
        }
        
        if(filterAttrActive != "" && filterAttrActive != filterAttr) {
            $(this).parent().find(".active").toggleClass("active");
        }
        $(this).toggleClass("active");

        
        return false;
    });
    
    /*** start page ***/
    if($(".start-page-block--items").length > 0 ) {
        $(window).on("mousemove",function(e){
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;  
            $(".start-page-block--items").css('transform','translate(-' + x * 50 + 'px, -' + y * 50 + 'px)');
        })
    }
    /*** filters ***/
    $(".filter-block-opened .h2").click(function(){
       $(this).parent().toggleClass("filter-block-opened--open"); 
    });
});


