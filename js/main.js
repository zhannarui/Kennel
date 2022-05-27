$(function($){
	var url = document.location.href;
	var pos= url.indexOf("#");
	if (pos > 0) {
		url = url.substring(0, pos);
	}
	$.each($('.menu__list a'), function(index, value) {
		if (url.indexOf($(this).attr('href')) + 1) {
			$(this).addClass('active').parent().addClass('active');
		}
	});
});