var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-text");
var outputDev = document.querySelector("#output-area");





function clickHandler() {

    var input = inputText.value
    var api = "https://api.funtranslations.com/translate/minion.json";
    var url = api + "?text=" + input;
    fetch(url)

        .then((response) => response.json())
        .then((json) => {
            translated = json.contents.translated;
                outputDev.innerText = translated;
            })
        }

    btnTranslate.addEventListener("click", clickHandler)