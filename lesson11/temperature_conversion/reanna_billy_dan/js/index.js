//************************************************
//
// Reanna Miranda, Billy Kemper and Dan Pitrowiski
//
//************************************************

 $( document ).ready(function() {
  });

  var previousC = 0.1111;
  var previousF = 0.1111;
  var f = 0; 
  var c = 0;


function convert() {

  f = $('#f').val();
  c = $('#c').val();

  console.log(f);
  console.log(c);

  f = parseFloat(f);
  c = parseFloat(c);

  if ((c !== previousC ) && (isNaN(c)  === false)) {
  	  f = (c*1.8)+32;
  	  $('#f').val(f);
  	  console.log(f);
  	  console.log(c);
  }

  if ((f !== previousF ) && (isNaN(f) === false)) {
  	  c = (f-32)/1.8;
  	  $('#c').val(c);
  	  console.log(f);
  	  console.log(c);
  }

  previousC = c;
  previousF = f;

}



$('#entry').on('submit', function(e){
	e.preventDefault();
	convert();
	console.log('change background');


	if (c < 0){
	$( "body" ).attr( "class", "" );
	$( "body" ).addClass( "cold" );

	}

	if ((c >= 0) && ( c <= 30)){
	$( "body" ).attr( "class", "" );
	$( "body" ).addClass( "mild" );
	}

	if (c > 30){
	$( "body" ).attr( "class", "" );	
	$( "body" ).addClass( "hot" );
	}

});



