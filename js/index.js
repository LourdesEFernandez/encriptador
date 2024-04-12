// mensaje principal
function mainText(){
    document.getElementById("subtitle").textContent = "¡El que busca encuentra!";
    document.getElementById("messageEncrypted").textContent = "Encuentra aquí tu mensaje";
}

// generar mensaje encriptado
function encrypt() {
    let messageEncrypted = "";
    let message = document.querySelector("#message").value;
    let arrMessage = Array.from(message);
    
    for (i = 0 ; i < arrMessage.length; i++) {        
        var letra = arrMessage[i];
        if (letra == "a") {
            messageEncrypted += letra + "i";
            } else if (letra == "e"){ 
                messageEncrypted += letra + "nter"; 
            } else if (letra == "i"){ 
                messageEncrypted += letra + "mes";
            } else if (letra == "o"){ 
                messageEncrypted += letra + "ber";
            } else if (letra == "u"){ 
                messageEncrypted += letra + "fat";
            } else{
                messageEncrypted += letra;
            }
        }

    if( message != 0){
        // limpiar area para mostrar mensaje
        ocultar("m-box-img");
        // mostrar mensaje 
        document.getElementById("subtitle").textContent = "Mensaje encriptado";
        document.querySelector("#messageEncrypted").innerHTML = messageEncrypted;
        // limpiar caja de texto
        limpiar("#message");
        // mostrar boton reiniciar
        document.getElementById("restar").style.display = "grid";
    } else {
        swal("¡Mmmm!", "Intenta ingresando un texto", "warning");
    }
    return messageEncrypted;
}

// desencriptar mensaje
function decrypt(){
    let message = document.getElementById("message").value;
    
    let messageDecrypt = message
    .replaceAll("ai", 'a')
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u"); 

    if (message.length != 0) {
        // mostrar mensaje 
        document.getElementById("subtitle").textContent = "Mensaje desencriptado";
        document.querySelector("#messageEncrypted").textContent = messageDecrypt; 
        ocultar("m-box-img");
        // limpiar caja de texto
        limpiar("#message");

        document.querySelector("#restar").style.display = "grid";
    } else {
        swal("¡Mmmm!", "Intenta ingresando un texto", "warning");
    }
    return messageDecrypt;
}

function ocultar(id) {
    document.getElementById(id).style.display = "none";
}

function limpiar(id) {
    document.querySelector(id).value = "";
}

function restar() {
    mainText();
    document.querySelector("#m-box-img").style.display = "flex";
    document.querySelector("#restar").style.display = "none";
}

mainText();