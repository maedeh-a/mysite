


$(document).ready(function() {
    $("a[href^='#']").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
    });

    /* Initializing Accordion */
    $("#accordion" ).accordion();

    /* Set click listener to  fab( Flaoting action button)  */
    $('div.btn-group-fab').click(function(){
        $(this).toggleClass('active');
    });
    
});


