// Wrap the entire contents of SpeakHello.js inside of an IIFE
console.log('Hello JS')(function () {
	// Create an object, called 'helloSpeaker'
	var helloSpeaker = {};

	// Attach the "speak" method to the 'helloSpeaker' object
	helloSpeaker.speak = function (name) {
		let speakWord = 'Hello';
		console.log(speakWord + ' ' + name);
	};

	// Expose the 'helloSpeaker' object to the global scope
	window.helloSpeaker = helloSpeaker;
})();
