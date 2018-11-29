$(function() {
  $(".ui-resizable-handle-se").removeClass("ui-icon ui-icon-gripsmall-diagonal-se");
  $(".drag").draggable();
});


$( document ).ready( function()
{
    $(".sticky").each( function()
    {
        $( this ).attr( 'data-buzz' , $( this ).text() );
    } );
} );