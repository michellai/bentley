var isMobile;

// Identify if visitor on mobile with lame sniffing to remove parallaxing title
if( navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/BlackBerry/)
){
  isMobile = true;
}

$(document).ready(function() {

  // Global vars
  var $artHeaderInner = $('.art-header-inner');
  var $artHeader = $('.art-header');
  var $artTitle = $('.art-title');
  var $artSubtitle = $('.art-subtitle');
  var $artTime = $('.art-time');
  var artTitleFontSize = parseInt($artTitle.css('font-size'));
  var $nav = $('.nav');
  var windowScroll;

  // Apply Fittext to article titles to make it scale responsively in a smooth fashion
<<<<<<< HEAD
  $artTitle.fitText(1, { minFontSize: '34px' });
=======
  $artTitle.fitText(1, { minFontSize: '24px', maxFontSize: '81px' });
>>>>>>> Updated Bentley Ghost Theme to be consistent with Freelancer Bootstrap navbar

  // Identify if visitor has a large enough viewport for parallaxing title
  function isLargeViewport() {
    if($nav.css('position') == "relative") {
      return false;
    } else {
      return true;
    }
  }

  // If large viewport and not mobile, parallax the title
  if(!isMobile) {
    $(window).scroll(function() {
      if(isLargeViewport()) {
        slidingTitle();
      }
    });
  }

  // Window gets large enough, need to recalc all parallaxing title values
  $(window).resize(function() {
    if(isLargeViewport()) {
      slidingTitle();
    }
  });

  // Functional parallaxing calculations
  function slidingTitle() {
    //Get scroll position of window
    windowScroll = $(this).scrollTop();

    //Slow scroll of .art-header-inner scroll and fade it out
    $artHeaderInner.css({
      'margin-top' : -(windowScroll/3)+"px",
<<<<<<< HEAD
      'opacity' : 1-(windowScroll/550)
=======
      'opacity' : 1-(windowScroll/250)
>>>>>>> Updated Bentley Ghost Theme to be consistent with Freelancer Bootstrap navbar
    });

    //Slowly parallax the background of .art-header
    $artHeader.css({
      'background-position' : 'center ' + (-windowScroll/8)+"px"
    });

    //Fade the .nav out
    $nav.css({
      'opacity' : 1-(windowScroll/400)
    });
  }

	// Link to top of page without changing URL
	$('.back-to-top a').click(function(e) {
		e.preventDefault();
		$(window).scrollTop(0);
	})
  
	// Cover image of the header
	var $postImage = $('img[alt="cover"]');
	if ( $postImage.length ) {
		var postImageURL = $postImage.attr('src');
		$('.art-header').css('background-image','url(' + postImageURL + ')');
		$('.art-header').css('background-size','100%');
		
		// Change color scheme to white
<<<<<<< HEAD
		$('#logo h1').css('color','white');
		$('.art-title').css('color','white');
		$('.art-subtitle').css('color','white');
		$('.art-time').css('color','white');
		$('.nav-primary li a').css('color','white');
		
		// Add Text Shadows
		$('.art-title').css('text-shadow','3px 3px 0 rgba(0,0,0,0.1), -1px -1px 0 rgba(0,0,0,0.1), 1px -1px 0 rgba(0,0,0,0.1), -1px 1px 0 rgba(0,0,0,0.1), 1px 1px 0 rgba(0,0,0,0.1)');
		$('.art-subtitle').css('text-shadow','3px 3px 0 rgba(0,0,0,0.1), -1px -1px 0 rgba(0,0,0,0.1), 1px -1px 0 rgba(0,0,0,0.1), -1px 1px 0 rgba(0,0,0,0.1), 1px 1px 0 rgba(0,0,0,0.1)');
		$('.art-time').css('text-shadow','3px 3px 0 rgba(0,0,0,0.1), -1px -1px 0 rgba(0,0,0,0.1), 1px -1px 0 rgba(0,0,0,0.1), -1px 1px 0 rgba(0,0,0,0.1), 1px 1px 0 rgba(0,0,0,0.1)');
=======
	/*	$('#logo h1').css('color','white');
		$('.art-title').css('color','white');
		$('.art-subtitle').css('color','white');
		$('.art-time').css('color','white');
		$('.nav-primary li').css('color','white');
	*/	
		// Add Text Shadows
		$('.art-title').css('text-shadow','3px 3px 0 rgba(0,0,0,0.1), -1px -1px 0 rgba(0,0,0,0.1), 1px -1px 0 rgba(0,0,0,0.1), -1px 1px 0 rgba(0,0,0,0.1), 1px 1px 0 rgba(0,0,0,0.1)');
		$('.art-subtitle').css('text-shadow','3px 3px 0 rgba(0,0,0,0.1), -1px -1px 0 rgba(0,0,0,0.1), 1px -1px 0 rgba(0,0,0,0.1), -1px 1px 0 rgba(0,0,0,0.1), 1px 1px 0 rgba(0,0,0,0.1)');
>>>>>>> Updated Bentley Ghost Theme to be consistent with Freelancer Bootstrap navbar
		
	}
	$postImage.remove();
	
	// Subtitles
	var $subtitle = $('span[id="subtitle"]');
	if ( $subtitle.length ) {
		var subtitleText = $('#subtitle').text();
		$('.art-subtitle').html(subtitleText);
		
	}
	$subtitle.remove();
	
	// Make punctuation smarter
	jQuery.fn.smarten = (function() {
	 
	  function smartenNode(node) {
		if (node.nodeType === 3) {
		  node.data = node.data
			.replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018")      // Opening singles
			.replace(/'/g, "\u2019")                             // Closing singles & apostrophes
			.replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c") // Opening doubles
			.replace(/"/g, "\u201d")                             // Closing doubles
			.replace(/--/g, "\u2013")                            // En dashes
			.replace(/---/g, "\u2014")                           // Em dashes
			.replace(/\.{3}/g, "\u2026");                        // Ellipsis
		} else if (node.nodeType === 1) {
		  if (node = node.firstChild) do {
			smartenNode(node);
		  } while (node = node.nextSibling);
		}
	  }
	 
	  return function() {
		return this.each(function(){
		  smartenNode(this);
		});
	  };
	 
	}());
	 
	// Instantiation
	$('article').smarten();

<<<<<<< HEAD
});
=======
});
>>>>>>> Updated Bentley Ghost Theme to be consistent with Freelancer Bootstrap navbar
