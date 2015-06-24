head.ready(function() {

	$( ".js-datepicker" ).datepicker({
      showOn: "both",
      buttonImage: "img/svg/calendar.svg",
      dateFormat: 'dd.mm.yy'
    });

	$('.select').chosen({});

});