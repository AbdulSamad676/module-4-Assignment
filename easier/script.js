// Load SpeakGoodBye.js and SpeakHello.js before using them
document.write(
	'<script type="text/javascript" src="SpeakGoodBye.js"></script>'
);
document.write('<script type="text/javascript" src="SpeakHello.js"></script>');

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
		var firstLetter = names[i].charAt(0).toLowerCase();

		if (firstLetter === 'j') {
			byeSpeaker.speak(names[i]);
		} else {
			helloSpeaker.speak(names[i]);
		}
	}
})();
