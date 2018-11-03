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

// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
}); 

$('#poster-gallery').showMoreImages({
	minheight: 0
});  