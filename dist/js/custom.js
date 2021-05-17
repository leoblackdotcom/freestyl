$(document).ready(function() {
  
	var controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({triggerElement: "#header"})
					.setClassToggle("main", "active")
          .addTo(controller);

  // make this last item
  $('body').addClass('loaded');

});