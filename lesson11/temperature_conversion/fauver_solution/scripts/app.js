var cTemp, fTemp;


$('form').on('submit',function(event){
	event.preventDefault();
	var newfTemp = parseFloat($('#fInput').val());
	var newcTemp = parseFloat($('#cInput').val());

	console.log('newfTemp = ' + newfTemp );
	console.log('newcTemp = ' + newcTemp );


	if(newfTemp !== fTemp && !isNaN(newfTemp)){
		fTemp = newfTemp;
		convertFtoC();
	}else if(newcTemp !== cTemp && !isNaN(newcTemp)){
		cTemp = newcTemp;
		convertCtoF();
	} 

	evaluateBackground();
	
});

function convertFtoC(){
	cTemp = (fTemp - 32)/1.8;
	console.log('FtoC executed')
	$('#cInput').val(cTemp);
};

function convertCtoF(){
	fTemp = (1.8*cTemp + 32);
	console.log('CtoF executed')
	$('#fInput').val(fTemp);
};

function evaluateBackground(){
	if(fTemp <= 32){
		$('body').removeClass('hot')
				.removeClass('temperate')
				.addClass('cold');
	}else if(fTemp <= 60){
		$('body').removeClass('hot')
				.removeClass('cold')
				.addClass('temperate');
	}else if(fTemp){
		$('body').removeClass('cold')
				.removeClass('temperate')
				.addClass('hot');
	}

}
