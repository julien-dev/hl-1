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