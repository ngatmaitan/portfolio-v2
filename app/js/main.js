var date = new Date();
var currentYear = date.getFullYear();
$('footer #footer-text #copyright #copyright-year').text(currentYear);

$('#moreprojects').showMore({
	minheight: 0
}); 

$('.skillbar').each( function() {
	$(this).find('.skillbar-bar').css('width', $(this).attr('data-percent'));
	$(this).find('.skillbar-percent').text($(this).attr('data-percent'));
})