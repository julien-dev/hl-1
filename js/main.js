$( document ).one( "pagecreate", ".main-page", function() {
    $( "#main-footer" ).toolbar({ theme: "a" });
    var curNavId = null;

  /*  $(document).on("pagebeforeshow","#main-bhgs-index",function(){ // 当进入页面二时
        $("#yl").trigger("tap");
        $("#bhgs").addClass("ui-btn-active");
    });*/
     $( "#alignment-example" ).on( "popupafterclose", function( event, ui ) {
         $("#"+curNavId).addClass("ui-btn-active");
     } );
    $( "#alignment-example" ).on( "popupafteropen", function( event, ui ) {
        $("#"+curNavId).addClass("ui-btn-active");
        event.stopPropagation();
        event.result =false ;
        return false;
    } );
    var popup = $("#alignment-example") ;
    popup.delegate("a","tap",function(event,index){
        popup.find("a.ui-btn-active").removeClass("ui-btn-active");
        $(this).addClass("ui-btn-active");
       // curNavId = "bhgs";
        var link = $(this).jqmData( "url" );
        navChange(link)
    });
    var footerNav = $("#footer-nav");
    footerNav.delegate("a","tap",function(event,index){
        var link = $(this).jqmData( "url" );
        curNavId = $(this).jqmData( "id" );
        if(link){
            popup.find("a.ui-btn-active").removeClass("ui-btn-active");
            navChange(link)
        }
        else{
            footerNav.find("a.ui-btn-active").removeClass("ui-btn-active");
            if(!$.mobile.popup.active||!$.mobile.popup.active._isOpen){
                $( "#alignment-example").popup("open",
                    {"positionTo":$(this)});
                event.stopPropagation();
                event.result =false ;
                return false ;
            }
        }
    });

    $(document).on("pagebeforeshow","",function(event,page){
        footerNav.find("a.ui-btn-active").removeClass("ui-btn-active");
        if(page.prevPage.length===0){
            var curPageId = page.toPage[0].id;
            var arr = curPageId.split("-");
            curNavId = arr[1] ;
            if(curNavId==="bhgs"){
                $("#"+arr[2]).trigger("tap");
            }
        }



    });
    $(document).on("pageshow","",function(){
        $("#"+curNavId).addClass("ui-btn-active");
    });

    function navChange( next ) {
        $( ":mobile-pagecontainer" ).pagecontainer( "change", next + ".html", {
            transition: "slide"
        });
    }

    $.mobile.document.on( "vmousemove", ".ui-popup-screen.ui-overlay-inherit", function( evt ) {
        if($.mobile.popup.active&&$.mobile.popup.active._isOpen){
            $.mobile.popup.active.close();
        }
    });
    $(document ).on( "scrollstart", function( event ) {
        if($.mobile.popup.active&&$.mobile.popup.active._isOpen){
            $.mobile.popup.active.close();
        }

    })
   /* $(document ).on( "tap", function( event ) {
        if($.mobile.popup.active&&$.mobile.popup.active._isOpen){
            $.mobile.popup.active.close();
        }
    })*/

})