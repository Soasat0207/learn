/* 
*  plugin start (no need for accordions, but I just wanted to try...)
*/

( function( $, window, document, undefined ) {

	"use strict";

		// Create the defaults once
		var pluginName = "accordion",
			defaults = {
				animationTime: 100,
			};

		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;
			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		$.extend( Plugin.prototype, {
			init: function() {
				var options = this.settings,
						self = $(this.element);
				
				var $containerData = '[data-accordion="container"]',
						$title = '[data-accordion="title"]';
				
				var allPanels = self.find($containerData),
						allTitles = self.find($title);
				
				//hide all panels to begin with
				var hidePanels = allPanels.hide();

				//on click
				self.on('click', function(event) {	
					var $title = $(event.target),
							$container = $title.next($containerData);
					
					//check if content is sibling or child node
					if (!$title.next($containerData).length > 0) {
						$container = $title.children($containerData);
					}
						
					//if title has content
					if ($container.length > 0) {
						//hide other panels
						if ($title.hasClass('open') === true) {
							$container.removeClass('open').slideUp(options.animationTime);
							$title.removeClass('open');
						} else {
							allPanels.removeClass('open').slideUp(options.animationTime);
							allTitles.removeClass('open');
							$container.addClass('open').slideDown(options.animationTime);
							$title.addClass('open');	
						}
					}
					return false;
				});
			}
		});

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function( options ) {
			return this.each( function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" +
						pluginName, new Plugin( this, options ) );
				}
			} );
		};

} )( jQuery, window, document );
/*end of plugin*/

//this is how you init your accordion.
$('.accordion').accordion({});


$( ".column" ).sortable({
    connectWith: ".column",
    handle: '[data-accordion="title"]',
});