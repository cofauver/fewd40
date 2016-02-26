$('#F').on('input', function() {
	
	$('img').hide();//hides image for the next execution

	var farenheit = $('#F').val()
	var celcius
	
	celcius = (farenheit-32)/1.8
	celcius = celcius.toFixed(2);//round to 2 dps
	$('#C').val(celcius)
  	
  	if (celcius > 30) {
		$('.hot').show();
	} else if ((celcius <= 30) && (celcius > 20)) {
		$('.med').show();
	} else if (celcius <= 20) {
		$('.cold').show();
	} else {

	};

});	


$('#C').on('input', function() {
	
	$('img').hide();//hides image for the next execution

	var farenheit
	var celcius = $('#C').val()
	
	farenheit = (celcius*1.8)+32
	farenheit = farenheit.toFixed(2);//round to 2 dps
	$('#F').val(farenheit)
  	
  	if (farenheit > 86) {
		$('.hot').show();
	} else if ((farenheit <= 86) && (farenheit > 68)) {
		$('.med').show();
	} else if (farenheit <= 68) {
		$('.cold').show();
	} else {

	};

});	


//Old on way code
// $('#fc').click(f2c);
// 	function f2c() {

// 	$('img').hide();//hides image for the next execution

// 	var farenheit = $('#F').val()
// 	var celcius
	
// 	celcius = (farenheit-32)/1.8
// 	celcius = celcius.toFixed(2);//round to 2 dps
// 	$('#C').val(celcius)
  	
//   	if (celcius > 30) {
// 		$('.hot').show();
// 	} else if ((celcius <= 30) && (celcius > 20)) {
// 		$('.med').show();
// 	} else if (celcius <= 20) {
// 		$('.cold').show();
// 	} else {

// 	};
// };

