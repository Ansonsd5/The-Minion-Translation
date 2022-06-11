var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-text");
var outputDev = document.querySelector("#output-area");


btnTranslate.addEventListener("click", clickHandler)

function errorHandler(error) {
    if (
      error ==
      "TypeError: Cannot read properties of undefined (reading 'translated')"
    ) {
      alert("Please wait for an hour and try later!");
    } else {
      alert("Error: " + error);
    }
  }

function clickHandler() {

    var input = inputText.value
    if(input==""){
        alert("Input somthing to Translate")
    }
    var api = "https://api.funtranslations.com/translate/minion.json";
    var url = api + "?text=" + input;
    fetch(url)

        .then((response) => response.json())
        .then((json) => {
            translated = json.contents.translated;
                outputDev.innerText = translated;
            })
    .catch(errorHandler)
        }
    

    