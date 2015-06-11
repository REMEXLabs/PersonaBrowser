$(document).ready(function() {

    /* Main-Nav Mobile */
    $('#main-nav .nav-layer').bind('click', function(){
        if($('#menu-header-menu').hasClass('open')){
            $('#menu-header-menu').removeClass('open');
            $('#menu-header-menu > li').slideUp();
        }
        else{
            $('#menu-header-menu').addClass('open');
            $('#menu-header-menu > li').slideDown();
        }
    });
	/* End Main-Nav Mobile */

    /* Stage */
    if($('#stage .slide-wrapper .slide').length > 1){

        var $prev = $('<a class="prev">prev</a>'),
            $next = $('<a class="next">next</a>'),
            $nav = $('<ul class="nav"></ul>');

        $('#stage').append($next ,$prev, $nav);

        $('#stage .slide-wrapper').carouFredSel({
            circular: true,
            infinite: true,
            auto: {
                pauseDuration: 300000
            },
            pagination: {
               container: '.nav',
                fx: 'crossfade',
                duration: 600,
                anchorBuilder: function(nr, item) {
                    return '<li>' + nr + '</li>';
                }
            },
            prev: {
                button: $prev
            },
            next: {
                button: $next
            },
            swipe: {
                onTouch: true
            }
         });
    };
    /* End Stage */


    /* Persona Detailseite Tabs */
    $(".active-description").click(function()
    {

        var $this = $(this);
		
		$('.active-description.active').removeClass('active');
		$(this).addClass('active');

    });
    /* End Persona Detailseite Tabs */
	
	/* Span über Select Felder legen */
	/** Nochmal die JS Min version prüfen
	$('form select').each(function() {
		var $this = $(this),
			vars = $this.getUrlVars(),
			$dropdown;

		for( var i = 0; vars && i < vars.length; i++ ) {
			if( vars[i] == $this.attr('name') ) {
				$this.find('option[value=' + vars[vars[i]] + ']').attr('selected', 'selected');
			}
		}
		$dropdown = $('<span class="js-select">' + $(':selected', $this).text() + '</span>');
		$this.after($dropdown);
		$this.height($dropdown.outerHeight())
			.css('line-height', $dropdown.innerHeight() + "px")
			.width($dropdown.outerWidth());
		if( $this.attr('disabled') == 'disabled' ) {
			$dropdown.addClass('disabled');
		}
		$this.bind('change.dropdown', function() {
			$dropdown.text( $(':selected', $(this)).text() );
			if( $this.parents('form').hasClass('sendOnChange') ) {
				$this.parents('form').submit();
			}
		});
	}); **/
	/* End Span über Select-Felder legen */

    /* Persona_all Größen anpassung */



});



