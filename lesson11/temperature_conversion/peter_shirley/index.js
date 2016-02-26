$(document).ready(function() {

	// Prevent submit page reload
	$("button").on('click', function(event){
		event.preventDefault();
	});


	// Binds submit with convert()
	$('#convertButton').click(convert);


	// Define global variables
	var tempF;
	var activeInput;


	// Checks if F temp is being selected
	$('#inputF').focus(function() {
		activeInput="Fahrenheit";
		$('#inputC').val("");
		$('#inputF').attr("placeholder", "Fahrenheit");
	});


	// Checks if C temp is being selected
	$('#inputC').focus(function() {
		activeInput="celsius";
		$('#inputF').val("");
		$('#inputC').attr("placeholder", "Celsius");
	});





	// Takes temp, convert temp, trigger color replacement function
	function convert(){


		// Capture user input
		tempF = $('#inputF').val();
		tempF = parseFloat(tempF);

		tempC = $('#inputC').val();
		tempC = parseFloat(tempC);


		if (activeInput === "Fahrenheit"){
			var tempC = ((tempF-32)/1.8);				// Conversion calculation
			$('#inputC').attr("placeholder",tempC);		// Display new temp in opposite field
			tempColor(tempF);							// Replace color
		} 
		else if (activeInput === "celsius"){
			var tempF = ((tempC*1.8)+32);
			$('#inputF').attr("placeholder",tempF);
			tempColor(tempF);
		}
		else {
			console.log("Error");
			$('#inputC').attr("placeholder", "Error!");
		};
	};





	// Removes all color classes
	function resetColor(){
		$(".image").removeClass('cold freezing warm hot');
	}





	// Applies color to circle
	function tempColor(x){
		if (x>0 && x<=20){
			resetColor();
			$(".image").addClass('freezing');
		}
		else if (x>20 && x<=40){
			resetColor();
			$(".image").addClass('cold');
		}
		else if (x>40 && x<=60){
			resetColor();
			$(".image").addClass('warm');
		}
		else if (x>61){
			resetColor();
			$(".image").addClass('hot');
		}
	}

});



