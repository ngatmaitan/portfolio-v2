var date = new Date();
var currentYear = date.getFullYear();
$('footer #footer-text #copyright #copyright-year').text(currentYear);
 
$('#moreprojects-link').click(function(){
	/*if ($(this).text() == "VIEW MORE") {
		$(this).text("VIEW LESS");
		$('#moreprojects').slideDown();
	} else {
		$(this).text("VIEW MORE");
		$('#moreprojects').slideUp();
	}*/
	var text = $('#moreprojects').is(':visible') ? 'VIEW MORE' : 'VIEW LESS';
	$(this).prev('#moreprojects').toggleClass('show');
	$('#moreprojects-link').text(text);
})