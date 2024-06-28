let textoIngresado = '';
let textoEncriptado = '';
let textoDesencriptado = '';

function cajaDeResultadosEncriptado() {
    textoIngresado = document.querySelector('#textoIngresadoEnCaja').value;
    if (textoIngresado === '') {
        mostrarImagen();
    } else {
        textoEncriptado = encriptarTexto(textoIngresado);
        mostrarTextoEncriptado(textoEncriptado);
        mostrarTexto();
        mostrarBotonCopiar();
    }
}

function cajaDeResultadosDesencriptado() {
    textoIngresado = document.querySelector('#textoIngresadoEnCaja').value;
    if (textoIngresado === '') {
        mostrarImagen();
    } else {
        textoDesencriptado = desencriptarTexto(textoIngresado);
        mostrarTextoDesencriptado(textoDesencriptado);
        mostrarTexto();
        mostrarBotonCopiar();
    }
}

function encriptarTexto(texto) {
    textoEncriptado = texto.replace(/a/g, 'atYa1Kh')
                            .replace(/e/g, 'LkqWe8')
                            .replace(/i/g, 'IdF45')
                            .replace(/o/g, 'ktAsM8A')
                            .replace(/u/g, 'gtERHas');
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    textoDesencriptado = texto.replace(/atYa1Kh/g, 'a')
                              .replace(/LkqWe8/g, 'e')
                              .replace(/IdF45/g, 'i')
                              .replace(/ktAsM8A/g, 'o')
                              .replace(/gtERHas/g, 'u');
    return textoDesencriptado;
}

function mostrarTextoEncriptado(texto) {
    document.getElementById("textoResultado").textContent = texto;
    mostrarImagen();
}

function mostrarTextoDesencriptado(texto) {
    document.getElementById("textoResultado").textContent = texto;
    mostrarImagen();
}

function copiarTexto() {
    let textoACopiar = document.getElementById("textoResultado");
    let textoSeleccionado = window.getSelection();
    let range = document.createRange();

    range.selectNodeContents(textoACopiar);
    textoSeleccionado.removeAllRanges();
    textoSeleccionado.addRange(range);
    document.execCommand("copy");
}

function mostrarTexto() {
    document.getElementById("imagenSinTexto").style.display = "none";
    document.getElementById("mensajeNoEncontrado").style.display = "none";
    document.getElementById("textoPlaceholder").style.display = "none";
    document.getElementById("textoResultado").style.display = "block";
}

function mostrarImagen() {
    document.getElementById("imagenSinTexto").style.display = "block";
    document.getElementById("mensajeNoEncontrado").style.display = "block";
    document.getElementById("textoPlaceholder").style.display = "block";
    document.getElementById("textoResultado").style.display = "none";
    ocultarBotonCopiar();
}

function mostrarBotonCopiar() {
    document.getElementById("copiarBotonContainer").style.display = "flex";
}

function ocultarBotonCopiar() {
    document.getElementById("copiarBotonContainer").style.display = "none";
}
