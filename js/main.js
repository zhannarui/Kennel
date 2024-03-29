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

$('.mobile__menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu__body').toggleClass('menu-active');   
    $('.mobile__menu-btn').toggleClass('menu-btn-active');
});
let btnMenu = $(".mobile__menu-btn");
let menu = $(".menu__body");
$(document).click(function(e){
if(!btnMenu.is(e.target)&&btnMenu.has(e.target).length === 0 && 
!menu.is(e.target) && menu.has(e.target).length === 0
){
	menu.removeClass('menu-active');
	btnMenu.removeClass('menu-btn-active');
}
});
$('.aboutUs-text-btnMore').click(function(){
	$('.aboutUs-text-more').slideToggle(500, function(){
		if ($(this).is(':hidden')) {
			$('.aboutUs-text-dots').removeClass('aboutUs-text-dots-active');
			$('.aboutUs-text-btnMore').html('Подробнее');
		} else {
			$('.aboutUs-text-dots').toggleClass('aboutUs-text-dots-active');
			$('.aboutUs-text-btnMore').html('Скрыть');
		}							
	});
	return false;
});