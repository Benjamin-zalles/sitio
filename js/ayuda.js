function abrir() {
    let ventanAyuda = document.getElementById('ayuda2');
    ventanAyuda.classList.add('activado');
}
document.getElementById('abrir-ayuda').addEventListener('click', abrir);


function cerrar() {
    let ventanaAyuda2 = document.getElementById('ayuda2')
    ventanaAyuda2.classList.remove('activado');
}
document.getElementById('cerrar-ayuda').addEventListener('click', cerrar);