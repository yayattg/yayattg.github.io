function askQuestions() {

	var firstName = prompt('what is your first name?');
	var lastName = prompt('what is your last name?');
	var fullName = firstName+' '+lastName

	console.log(fullName)

	var userAge = prompt('How old are you?');

	userAge = parseInt(userAge);

	if(userAge >= 18) {
		console.log('User is an adult.');

	} else if (userAge >= 13) {
		console.log('User is a teenager.');
	}  else {
	 	console.log('Go away, child!');
	}

	//Change .text() function using Jquery 

	$('h2').text('Hello ' + fullName)

	//api.jquery.com library for avaliability

	// $('h2').hmtl('<p>Hello</p>' + fullName) --- use this will allow an HTML element in it, but not .text function (view it as text)

	//make sure to use == rather than = otherwise the first name will be reassigned everytimeec

	/*assignment, when first name is general, last name not assembly then greeting General.*/

	if(firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') {
		console.log('Hello General, we have the same first name');
	} else if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() == 'assembly') {
		console.log('Hello Employee!');
	} else {
		console.log('Hello ' + fullName);
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'green' ||
		faveColour == 'yellow') {
		$('h1').css('color', faveColour);
	}

}


// alert($);

// when the page has loaded

$(function() {

//Hide all the content

	$('img').on('click', askQuestions);

	$('h3').next().hide();	

// when user clicks an h3

	$('h3').on('click', function() {

		//SlideToggle the next element (the toogle needs to be Capital/camelCase)
		$(this).next().slideToggle(1000);

		//the 5000 is millersecond
		//Toggle the next element
		// $(this).next().toggle();

		//Hide the next element
		// $(this).next().hide();

		//this - which ever specific elemt the user click on.
		//it'll also allow argument, within the bracket

		//margin is allowed overlap between two elements.






	});







});

//linotype.com font cost give some quote on pay for font. 
//google.com/fonts -- google licensed all these fonts for you. free tracking for website browsing...
//fontsquirral, dafont.com
