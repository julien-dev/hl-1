// Pagecreate will fire for each of the pages in this demo
// but we only need to bind once so we use "one()"
$(document).bind("mobileinit", function(){
    $.event.special.swipe.scrollSupressionThreshold ("10px")
    $.event.special.swipe.durationThreshold ("1000ms")
    $.event.special.swipe.horizontalDistanceThreshold ("10px");
    $.event.special.swipe.verticalDistanceThreshold ("75px");
});
$( document ).one( "pagecreate", ".cover-page", function() {
    $.mobile.buttonMarkup.hoverDelay = "false";
    // Initialize the external persistent header and footer
    $( "#footer" ).toolbar({ theme: "b" });
    var nextBtn = $('.next');
    var prevBtn = $('.prev');
    // Handler for navigating to the next page
    function navnext( next ) {
        $( ":mobile-pagecontainer" ).pagecontainer( "change", next + ".html", {
            transition: "slide"
        });
    }

    // Handler for navigating to the previous page
    function navprev( prev ) {
        $( ":mobile-pagecontainer" ).pagecontainer( "change", prev + ".html", {
            transition: "slide",
            reverse: true
        });
    }

    $( document ).on( "swipe", "", function( event ) {
       var x0= event.swipestart.coords[0];
       var x1 = event.swipestop.coords[0];
       if(x1-x0>30){
           nextBtn.trigger('click');
       }
        if(x0-x1>30){
            prevBtn.trigger('click');
        }
    });
   // $(".ui-page").unbind("swipeleft");
   // $(".ui-page").unbind("swiperight");
    // Navigate to the next page on swipeleft
   /* $( document ).on( "swipeleft", ".ui-page", function( event ) {
        // Get the filename of the next page. We stored that in the data-next
        // attribute in the original markup.
        var next = $( this ).jqmData( "next" );

        // Check if there is a next page and
        // swipes may also happen when the user highlights text, so ignore those.
        // We're only interested in swipes on the page.
        if ( next && ( event.target === $( this )[ 0 ] ) ) {
            navnext( next );
        }
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.result =false ;
        return false;
    });
    // The same for the navigating to the previous page
    $( document ).on( "swiperight", ".ui-page", function( event ) {
        var prev = $( this ).jqmData( "prev" );

        if ( prev && ( event.target === $( this )[ 0 ] ) ) {
            navprev( prev );
        }
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.result =false ;
        return false;
    });*/

    /*$(".ui-page").bind("swiperight", function(){
        var prev = $( this ).jqmData( "prev" );

        if ( prev && ( event.target === $( this )[ 0 ] ) ) {
            navprev( prev );
        }
    });
    $(".ui-page").bind("swipeleft", function(){
        var next = $( this ).jqmData( "next" );
        if ( next && ( event.target === $( this )[ 0 ] ) ) {
            navnext( next );
        }
    });*/


    // Navigate to the next page when the "next" button in the footer is clicked
    $( document ).on( "click", ".next", function(event) {
        var prev = $( ".ui-page-active" ).jqmData( "prev" );

        if ( prev ) {
            navprev( prev );
        }

    });



    $( document ).on( "click", ".prev", function(event) {
        var next = $( ".ui-page-active" ).jqmData( "next" );

        // Check if there is a next page
        if ( next ) {
            navnext( next );
        }
    });
    $( document ).on( "click", "#enter-btn", function(event) {
        //$.mobile.loadPage( "main-bhgs-jcx.html" );
        //$.mobile.changePage("main-bhgs-jcx.html", "slideup");
        window.location='main-bhgs-yl.html';
    });
});

$( document ).on( "pageshow", ".cover-page", function() {
    var thePage = $( this ),
        title = thePage.jqmData( "title" ),
        next = thePage.jqmData( "next" ),
        prev = thePage.jqmData( "prev" );




    // Prefetch the next page
    // We added data-dom-cache="true" to the page so it won't be deleted
    // so there is no need to prefetch it
    if ( next ) {
        $( ":mobile-pagecontainer" ).pagecontainer( "load", next + ".html" );
    }

    // We disable the next or previous buttons in the footer
    // if there is no next or previous page
    // We use the same footer on each page
    // so first we remove the disabled class if it is there
    $( ".next.ui-state-disabled, .prev.ui-state-disabled" ).removeClass( "ui-state-disabled" );

    if (  next ) {
        $( ".next" ).addClass( "ui-state-disabled" );
    }
    if ( prev ) {
        $( ".prev" ).addClass( "ui-state-disabled" );
    }
});
