var date = new Date();
var currentYear = date.getFullYear();
$('footer #footer-text #copyright #copyright-year').text(currentYear);
 
$('#moreprojects').showMore({
	minheight: 0
});