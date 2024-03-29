head.ready(function() {

	$( ".js-datepicker" ).datepicker({
      showOn: "both",
      buttonImage: "img/svg/calendar.svg",
      dateFormat: 'dd.mm.yy'
    });

	$('.select').chosen({});

	// scrollLeftBar
	
	$('.js-f-el').each(function () {
		function scrollLeftBar(){
			var a = document.querySelector('.js-f-el'), b = null, P = 0;
			window.addEventListener('scroll', Ascroll, false);
			document.body.addEventListener('scroll', Ascroll, false);
			function Ascroll() {
				if (b == null) {
					var Sa = getComputedStyle(a, ''), s = '';
					
					b = document.createElement('div');
					a.insertBefore(b, a.firstChild);
					var l = a.childNodes.length;
					for (var i = 1; i < l; i++) {
						b.appendChild(a.childNodes[1]);
					}
					a.style.height = b.getBoundingClientRect().height + 'px';
					a.style.padding = '0';
					a.style.border = '0';
				}
				var Ra = a.getBoundingClientRect(),
					R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('footer').getBoundingClientRect().top + 0);
				
				if ((Ra.top - P) <= 0) {
					if ((Ra.top - P) <= R) {
						b.className = 'is-stop';
						b.style.top = - R +'px';
						} 
					else {
						b.className = 'is-sticky';
						b.style.top = P + 'px';
					}
				}
				else {
					b.className = '';
					b.style.top = '';
				}
				window.addEventListener('resize', function() {
					a.children[0].style.width = getComputedStyle(a, '').width
				}, false);
			}
		}
		scrollLeftBar();
	});
	var slider = $('.js-slider, .js-slider-games');
	if (slider.length) {
		slider.each(function() {
			var this_ = $(this);
			slider.on('init', function(slick){
				$(this).addClass('is-init');
			});
			this_.slick({
				dots: false,
				infinite: true,
				speed: 500,
				cssEase: 'linear'
			});
		});
	};

	$('.nav__item span').each(function() {
		var this_ 	= $(this),
		totalWords 	= this_.html().split(/[\s\.\?]+/).length;
		if (totalWords > 1) {
			this_.parent().addClass('is-break');
		}
	});

	// $('.js-slider-games').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1
	// });
	
});