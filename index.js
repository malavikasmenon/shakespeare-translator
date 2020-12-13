var btnTranslate = document.querySelector("#btn-translate");

function handleClick() {
    //() => { outputTxt.innerText = txtArea.value }
    console.log("clicked");
    fetch(`https://api.funtranslations.com/translate/shakespeare.json?text=${txtArea.value}`)
        //fetch("https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json")
        .then(response => response.json())
        .then(data => outputTxt.innerText = data.contents.translated)
        .then(console.log(data.contents.translated))
        .catch((error) => {
            console.log("Error: ", error);
            alert("Something went wrong with the request");
        });
}

btnTranslate.addEventListener("click", handleClick);

var txtArea = document.querySelector("#txt-area");

var outputTxt = document.querySelector("#output-txt");