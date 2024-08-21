//valores definidos de la variable que no serán cambiados
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//almacenar las llaves de encriptación dentro de una matriz:
/*llaves" de encriptación a ocupar:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
/* funciones para operar en botones*/
/*arreglo multidimensional como variable cons*/
const  matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
// función de encriptar
function encriptar(stringEncriptada) {    

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])  
                       
    }        
} 
return stringEncriptada;
}

//nos permite hacer función del evento sobre botón encriptar
function btnEncriptar() {
    if (textArea.value.trim() !== "") { // Verificar si la textarea está vacía
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = ""; // Limpiar el área una vez se de el evento onclick
        mensaje.style.backgroundImage = "none"; // Quita imagen
    } else {
        Swal.fire("Debes ingresar un texto");
}
}
//función de desencriptar
function desencriptar(stringDesencriptada) {    

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            
                       
    }        
} 
return stringDesencriptada;
}
//nos permite hacer función del evento sobre botón desencriptar
function btnDesencriptar() {
    if (textArea.value.trim() !== "") { // Verificar si la textarea está vacía
        const textoDesencriptado = desencriptar(textArea.value);
        mensaje.value = textoDesencriptado;
        textArea.value = ""; // Limpiar el área una vez se de el evento onclick
        mensaje.style.backgroundImage = "none"; // Quita imagen
    } else {
        Swal.fire("Debes ingresar un texto");
}
}

function copiarMensaje(){
    navigator.clipboard.writeText(mensaje.value);
    Swal.fire("Texto copiado");
    textArea.value = "";    
}
// Easter Egg -Descubre en console un mensaje para descifrar
let text= "Desencripta lo siguiente --> fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";
console.log(text)