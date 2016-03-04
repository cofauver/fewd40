//error thrown example
$('body').append('<h1>Hi world!</h1>');
//console.log example, log each of the pies and the index before the switch 
var pies=['Cherry','Pumpkin','Banana','a','Rhubarb'];
$('body').append('There are '+pies.length+' total pies.<br>');
pies.forEach(function(element,index){

	/*

	if(element === 'Cherry'){
		$('body').append(index+1+') '+element+': Yum!<br>');
	}else if(element === 'Rhubarb'){
		$('body').append(index+1+') '+element+': Yuck<br>');
	}else if(element === 'Pumpkin'){
		$('body').append(index+1+') '+element+': meh<br>');
	}if(element === 'Banana'){

	}
	Switch is different syntax for repetitive if/else if 
	situations

	The code below is equivalant to the code commented out above.
	*/

	switch(element){
		case 'Cherry': $('body').append(index+1+') '+element+': Yum!<br>');
		break;
		case 'Rhubarb': $('body').append(index+1+') '+element+': Yuck<br>');
		break;
		case 'Banana':
		case 'Pumpkin': $('body').append(index+1+') '+element+': meh<br>');
		break;
	}
});
//breakpoint example, put inside the function
function doSomething(myThing){
	debugger;
	$('body').append('<p>Paragraph</p>');
	console.log(myThing)
}
doSomething('a great thing');