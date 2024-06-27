let textoIngresado = '';
let textoEncriptado = '';
let textoDesencriptado = '';

function cajaDeResultadosEncriptado() {
    textoIngresado = document.querySelector('#textoIngresadoEnCaja').value;
    if (textoIngresado === '') {
        mostrarTexto();
    } else {
        textoEncriptado = encriptarTexto(textoIngresado);
        mostrarTextoEncriptado(textoEncriptado);
        mostrarImagen();
    }
}

function cajaDeResultadosDesencriptado() {
    textoIngresado = document.querySelector('#textoIngresadoEnCaja').value;
    if (textoIngresado === '') {
        mostrarTexto();
    } else {
        textoDesencriptado = desencriptarTexto(textoIngresado);
        mostrarTextoDesencriptado(textoDesencriptado);
        mostrarImagen();
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

function mostrarImagen() {
    document.getElementById("imagenSinTexto").style.display = "none";
    document.getElementById("mensajeNoEncontrado").style.display = "none";
    document.getElementById("textoPlaceholder").style.display = "none";
    document.getElementById("textoResultado").style.display = "block";
}

function mostrarTexto() {
    document.getElementById("imagenSinTexto").style.display = "block";
    document.getElementById("mensajeNoEncontrado").style.display = "block";
    document.getElementById("textoPlaceholder").style.display = "block";
    document.getElementById("textoResultado").style.display = "none";
}
