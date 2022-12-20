var textInput = document.querySelector('#input-text');
var textOutput = document.querySelector('#output');

function criptografar(){
  var text = textInput.value;
  var resultCrypto = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-text2">'
    + resultCrypto + '</textarea>' + 
    '<button class="btn-copy" id="copy" onclick="copy()">Copiar</button>';

}

function descriptografar(){
  var text = textInput.value;

  var resultDescrypto = text
  .replace(/enter/g, "e")
  .replace(/imes/g, "i")
  .replace(/ai/g, "a")
  .replace(/ober/g, "o")
  .replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-text2">'
      + resultDescrypto + '</textarea>' + 
    '<button class="btn-copy" id="copy" onclick="copy()">Copiar</button>'
}

function copy(){
  var textCopy = document.getElementById('input-text2');

  textCopy.select();
  document.execCommand('copy');
}