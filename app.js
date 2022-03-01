var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-text");
var outputDev = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getserverURL(text) {

    return serverURL + "?" + "text=" + text;
}

function clickHandler() {
    var textinput = inputText.value;
    fetch(getserverURL(textinput))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        outputDev.innerText=translatedText;
    })

}

btnTranslate.addEventListener("click", clickHandler)