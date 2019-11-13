
var utterance = new SpeechSynthesisUtterance();
var lang = ['en-UK', 'fr-FR', 'nl-BE', 'it-IT', 'da-BK', 'fr-BE'];
utterance.rate = 1;


document.getElementById('playbtn').onclick = function(){
    var text = document.getElementById('textarea').value;
    utterance.text = text;
    var langIndex = Math.floor(Math.random() * lang.length);
    utterance.lang = lang[langIndex];
    console.log(lang[langIndex])
    speechSynthesis.speak(utterance);
};


//responsiveVoice.OnVoiceReady = function (){
    // function choseVoice() {
    //     var voices = ["Australian Female", "Australian Male", "UK English Male", "Uk English Female"];
    //     var voiceIndex = Math.floor(Math.random() * voices.length);
    //     return voices[voiceIndex];
    // }
