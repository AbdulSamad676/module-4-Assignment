// Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function () {
	// Create an object, called 'byeSpeaker'
	var byeSpeaker = {};

	// Attach the "speak" method to the 'byeSpeaker' object
	byeSpeaker.speak = function (name) {
		let speakWord = 'Good Bye';
		console.log(speakWord + ' ' + name);
	};

	// Expose the 'byeSpeaker' object to the global scope
	window.byeSpeaker = byeSpeaker;
})();
