const textArea = document.querySelector(".text-area");
const messageArea = document.querySelector(".mensaje");
const contentImg = document.querySelector(".content-mu");
const messageInfo = document.querySelector(".mensaje-info");
const contentBtnCopy = document.querySelector(".content-btn-copiar");

// La letra "a" es convertida para "ai
// La letra "e" es convertida para "enwer"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

textArea.addEventListener("keydown", function (event) {
  const specialChars = /[!@#$%^&*(),.?":{}|<>_\-áéíóúÁÉÍÓÚ'¿]/g;
  const key = event.key;
  if (specialChars.test(key)) {
    alert("Caracter especial detectado");
    event.preventDefault();
  }
});

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  messageArea.value = textoEncriptado;
  textArea.value = "";
  contentImg.style.display = "none";
  messageInfo.style.display = "none";
  contentBtnCopy.style.display = "initial";
  messageArea.style.display = "initial";
}
function encriptar(stringEncriptado) {
  let convert = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < convert.length; i++) {
    if (stringEncriptado.includes(convert[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        convert[i][0],
        convert[i][1]
      );
    }
  }
  return stringEncriptado;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  messageArea.value = textoEncriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptado) {
  let convert = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptado = stringDesencriptado.toLowerCase();
  for (let i = 0; i < convert.length; i++) {
    if (stringDesencriptado.includes(convert[i][0])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        convert[i][1],
        convert[i][0]
      );
    }
  }
  return stringDesencriptado;
}

function copiar() {
  const contenido = document.querySelector(".mensaje").value;
  navigator.clipboard.writeText(contenido);
  alert("texto copiado");
}
