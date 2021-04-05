const submitButton = document.querySelector ('#submit-button');
submitButton.addEventListener ('click', function (){

const inputText = document.querySelector ('#translator-input')
const saveInputValue = inputText.value;
console.log (saveInputValue);
let header = document.querySelector ('#results');
header.innerText = encode (saveInputValue);

const radioButtons = document.querySelectorAll ('[name= "translation-section"]')
let selectedValue;
for (const radio of radioButtons){
    if (radio.checked){
    selectedValue = radio.value;
    }else if (selectedValue === 'encode'){
     const encoded =  encode(saveInputValue);
     header = encoded;
    }else if (selectedValue === 'translate'){
     const translated = translate (saveInputValue);
     header = translated;
    }
    }


})


