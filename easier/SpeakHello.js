// Wrap the entire contents of SpeakHello.js inside of an IIFE
(function (window) {
	var helloSpeaker = {};
	var speakWord = 'Hello';
	helloSpeaker.speak = function (name) {
		console.log(speakWord + ' ' + name);
	};
	window.helloSpeaker = helloSpeaker;
})(window);
