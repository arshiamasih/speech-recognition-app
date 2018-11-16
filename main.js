
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const mic = document.querySelector("#mic");
const bg = document.querySelector('html');

mic.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

recognition.onresult = function(event) {
  var color = event.results[0][0].transcript;
  bg.style.backgroundColor = color;
}
