if (document.getElementById("creditos2")) {
    document.getElementById("creditos2").addEventListener("click", activarModalCreditos2);
}

if (document.getElementById("btn-menu")) {
    document.getElementById("btn-menu").addEventListener("click", pasarPaginaMenu);
}

function activarModalCreditos2() {
    $('#modal_creditos2').modal('show');
}

function pasarPaginaMenu() {
    window.location.href = 'menu.html';
}