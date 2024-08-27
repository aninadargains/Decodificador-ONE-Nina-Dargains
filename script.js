const textArea2 = document.getElementById("campo-mensagem");
const imagem = document.getElementById("img-mensagem");

function clicado() {
    if (imagem == true) {
        imagem.style.display="inline-block";
        return imagem = false;
    } else{
        imagem.style.display="none";
        return imagem = true;
    }
}



const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}

function btnCopiar(mensagem) {
    
    const texto = mensagem.value;
    navigator.clipboard.writeText(texto);
    mensagem.value = " ";

    alert('O texto copiado foi: ' + texto)
}


window.onscroll = function() {
    scrollFunction();
}
  
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTop").style.display = "block";
    } else {
      document.getElementById("scrollToTop").style.display = "none";
    }
}