// list of languages is probably not loaded, wait for it
if(window.speechSynthesis.getVoices().length == 0) {
	window.speechSynthesis.addEventListener('voiceschanged', function() {
        Bienvenida();
	});
}
else {
    // languages list available, no need to wait
    Bienvenida();
}


function textToSpeech() {

    var available_voices = window.speechSynthesis.getVoices();
	// this will hold an english voice
	var spanish_voice = '';
	// find voice by language locale "en-US"
	// if not then select the first voice
	for(var i=0; i<available_voices.length; i++) {
		if(available_voices[i].lang === 'es-MX') {
			spanish_voice = available_voices[i];
			break;
		}
	}
	if(spanish_voice === '')
		spanish_voice = available_voices[0];

	// new SpeechSynthesisUtterance object
	var utter = new SpeechSynthesisUtterance();
	utter.rate = 1;
	utter.pitch = 0.5;
	utter.text = 'Hola mundo';
	utter.voice = spanish_voice;
	// speak
	window.speechSynthesis.speak(utter);
}

function Bienvenida()
{
	// get all voices that browser offers

    var available_voices = window.speechSynthesis.getVoices();
	// this will hold an english voice
	var spanish_voice = '';
	// find voice by language locale "en-US"
	// if not then select the first voice
	for(var i=0; i<available_voices.length; i++) {
		if(available_voices[i].lang === 'es-MX') {
			spanish_voice = available_voices[i];
			break;
		}
	}
	if(spanish_voice === '')
		spanish_voice = available_voices[0];

	// new SpeechSynthesisUtterance object
	var utter = new SpeechSynthesisUtterance();
	utter.rate = 1;
	utter.pitch = 0.5;
	utter.text = 'Hola, Bienvenido a Infinity Room';
	utter.voice = spanish_voice;
	// speak
	window.speechSynthesis.speak(utter);
}

function Jugar()
{
	// get all voices that browser offers

    var available_voices = window.speechSynthesis.getVoices();
	// this will hold an english voice
	var spanish_voice = '';
	// find voice by language locale "en-US"
	// if not then select the first voice
	for(var i=0; i<available_voices.length; i++) {
		if(available_voices[i].lang === 'es-MX') {
			spanish_voice = available_voices[i];
			break;
		}
	}
	if(spanish_voice === '')
		spanish_voice = available_voices[0];

	// new SpeechSynthesisUtterance object
	var utter = new SpeechSynthesisUtterance();
	utter.rate = 1;
	utter.pitch = 0.5;
	utter.text = 'Hey vamos a jugar!';
	utter.voice = spanish_voice;
	// speak
	window.speechSynthesis.speak(utter);
}

function creatumapa()
{
	// get all voices that browser offers

    var available_voices = window.speechSynthesis.getVoices();
	// this will hold an english voice
	var spanish_voice = '';
	// find voice by language locale "en-US"
	// if not then select the first voice
	for(var i=0; i<available_voices.length; i++) {
		if(available_voices[i].lang === 'es-MX') {
			spanish_voice = available_voices[i];
			break;
		}
	}
	if(spanish_voice === '')
		spanish_voice = available_voices[0];

	// new SpeechSynthesisUtterance object
	var utter = new SpeechSynthesisUtterance();
	utter.rate = 1;
	utter.pitch = 0.5;
	utter.text = 'Crea tu mapa';
	utter.voice = spanish_voice;
	// speak
	window.speechSynthesis.speak(utter);
}