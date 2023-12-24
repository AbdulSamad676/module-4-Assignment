// Wrap the entire contents of script.js inside of an IIFE
(function () {
	var names = [
		'Yaakov',
		'John',
		'Jen',
		'Jason',
		'Paul',
		'Frank',
		'Larry',
		'Paula',
		'Laura',
		'Jim',
	];
	let helloSpeaker = {};
	let byeSpeaker = {};
	// Loop over the names array and say either 'Hello' or "Good Bye"
	for (var i = 0; i < names.length; i++) {
		// Retrieve the first letter of the current name in the loop.
		var firstLetter = names[i].charAt(0).toLowerCase();

		// Compare the 'firstLetter' retrieved to lower case 'j'
		if (firstLetter === 'j') {
			// If the same, call byeSpeaker's 'speak' method with the current name
			byeSpeaker.speak(names[i]);
		} else {
			// Otherwise, call helloSpeaker's 'speak' method with the current name
			helloSpeaker.speak(names[i]);
		}
	}
})();
// Wrap the entire contents of script.js inside of an IIFE
(function () {
	var names = [
		'Yaakov',
		'John',
		'Jen',
		'Jason',
		'Paul',
		'Frank',
		'Larry',
		'Paula',
		'Laura',
		'Jim',
	];

	// Loop over the names array and say either 'Hello' or "Good Bye"
	for (var i = 0; i < names.length; i++) {
		// Retrieve the first letter of the current name in the loop.
		var firstLetter = names[i].charAt(0).toLowerCase();

		// Compare the 'firstLetter' retrieved to lower case 'j'
		if (firstLetter === 'j') {
			// If the same, call byeSpeaker's 'speak' method with the current name
			byeSpeaker.speak(names[i]);
		} else {
			// Otherwise, call helloSpeaker's 'speak' method with the current name
			helloSpeaker.speak(names[i]);
		}
	}
})();
