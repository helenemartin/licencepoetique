
var utterance = new SpeechSynthesisUtterance();
var lang = ['en-UK', 'fr-FR', 'nl-BE', 'it-IT', 'da-BK', 'fr-BE'];
utterance.rate = 1;

console.log(document.getElementsByTagName('button'));


function clickButtons(e){
    var text = document.getElementById(this.dataset.textarea).value;
    utterance.text = text;
    var langIndex = Math.floor(Math.random() * lang.length);
    utterance.lang = lang[langIndex];
    console.log(lang[langIndex])
    speechSynthesis.speak(utterance);
};

//on press button want to be able to read this one.
 //pass a parameter to a function
 // create a function getElementByClass

 

  var everyButton = document.getElementsByTagName('button');
  for( var i=0,il = everyButton.length; i< il; i ++ ){
  everyButton[i].onclick = clickButtons;
  }

      