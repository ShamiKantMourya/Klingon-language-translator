const outputText = document.querySelector('#output');
const inputText = document.querySelector('#input');
const translateBtn = document.querySelector('#btn');


var url = "https://api.funtranslations.com/translate/klingon.json";

function getTranslation(text) {
    return url + "?" + "text=" + text;
}

function clickHandler() {
    var inputArea = inputText.value;
    fetch(getTranslation(inputArea))
        .then(response => response.json())
        .then(json => {
            outputText.innerText = json.contents.translated;
        })
}

translateBtn.addEventListener("click", clickHandler);