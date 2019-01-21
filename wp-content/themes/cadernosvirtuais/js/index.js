$(document).ready( function() {
	
	// Foundation Init
	$(document).foundation();
	
	// Annotator JS Init
	$(document.body).annotator();	
	
	// controlslist="nodownload"	
	$("audio").attr( "controlslist", "nodownload" );
	$("video").attr( "controlslist", "nodownload" );
	 
	// Photoswipe	
	function openPhotoSwipe( element ) {
		var pswpElement = document.querySelectorAll('.pswp')[0];
		
		console.log( element.attr("src") );
		console.log( element.width() ); 
		console.log( element.height() ); 
		
		// build items array
		var items = [
			{
				src: element.attr("src"),
				w: element.width(),
				h: element.height()
			}
		];
		
		// define options (if needed)
		var options = {
			history: false,
			focus: false,
			maxSpreadZoom: 30,
			showAnimationDuration: 0,
			hideAnimationDuration: 0
		};
		
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	};
	
	$(".content img").on("click", function(){
		openPhotoSwipe( $(this) );        
	});
	
	$(function(){
		// bind change event to select
		$('select').bind('change', function () {
			var url = $(this).val(); // get selected value
			console.log( $(this).val() );
			if (url) { // require a URL
			  window.location = url; // redirect
			}
			return false;
		});
	});
	
});