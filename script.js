
var utterance = new SpeechSynthesisUtterance();
utterance.lang = 'en-UK';
utterance.rate = 1;


document.getElementById('playbtn').onclick = function(){
    var text = document.getElementById('textarea').value;
    utterance.text = text;
    speechSynthesis.speak(utterance);
};

