$(document).ready(function() {
  // Handler for .ready() called.
});

// Take Fahrenheit input
$(".submit_f").click(function(){
	var F = $(".Fahrenheit").val();
	console.log(F);
	F = parseFloat(F)
	var C = (F - 32)/1.8;
	$(".Celsius").val(C);
	C = parseFloat(C)
})

// take celcius input
$(".submit_c").click(function(){
	var C = $(".Celsius").val();
	console.log(C);
	C = parseFloat(C)
	var F = (1.8*C)+32;
	$(".Fahrenheit").val(F);
	F = parseFloat(F)
})

// convert if f input
$(".submit_f").click(function(){
	var F = $(".Fahrenheit").val();
	console.log(F);
	$('body').removeClass();
	F = parseFloat(F);
	if(F<=32){ 
		$('body').addClass('cold')
	}

	else if(F>32 && F<=60){
		$('body').addClass('mild')
		// console.log("supposed to be mild")
	}

	else {$('body').addClass('hot')}
})

// convert if c input
$(".submit_c").click(function(){
	var C = $(".Celsius").val();
	console.log(C);
	$('body').removeClass();
	C = parseFloat(C);
	if(C<=0){ 
		$('body').addClass('cold')
	}

	else if(C>0 && C<=15){
		$('body').addClass('mild')
		// console.log("supposed to be mild")
	}

	else {$('body').addClass('hot')}
})

