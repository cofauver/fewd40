
$('#calc').click(function(){
	var a = $('#Fahr').val();
	var b = $('#Cels').val();

	a = parseFloat (a);
	b = parseFloat (b);

	if(isNaN(a)){
		calculatefar();	
		changecolor();
	} else if (isNaN(b)){
		calculatecel();	
		changecolor();
	};

	function calculatecel (){
		b = (a-32) / 1.8;
		$('#Cels').val(b);
		$('#Fahr').val('');
	};

	function changecolor(){
		if (a>=70) {
			$('body').attr('class','fire'); 
		}
		else if (a<=30) {
			$('body').attr('class','cold'); 
		} 
		else {
			$('body').attr('class','moderate'); 
		} 
	};

	function calculatefar (){
		a = (b*1.8) + 32;
		$('#Fahr').val(a);
		$('#Cels').val('');
	};

});