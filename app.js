var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-text");
var outputDev = document.querySelector("#output-area");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

// var serverURL = "https://api.funtranslations.com/translate/sith.json"



// function errorHandler(error)
// {
//     if (
//         error ==
//         "TypeError: Cannot read properties of undefined (reading 'translated')"
//       ) {
//         alert("Please wait for an hour and try later!");
//       } else {
//         alert("Error: " + error);
//       }
//     }


function getserverURL(text) {


  return serverURL + "?" + "text=" + text;

}




function clickHandler() {
    var userInput = inputText.value;
 
    fetch(getserverURL(userInput))
   console.log("url : ")
        // .then(response => response.json())
        // .then(json => {
        //     var translatedText = json.contents.translated;
        //     outputDev.innerText = translatedText;
            
        // })

// .catch(errorHandler);
}


btnTranslate.addEventListener("click", clickHandler())