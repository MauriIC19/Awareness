if (document.getElementById("autoconocimiento")) {
    document.getElementById("autoconocimiento").addEventListener("click", pasarPaginaAutoconocimiento);
}

if (document.getElementById("estres")) {
    document.getElementById("estres").addEventListener("click", pasarPaginEstres);
}

if (document.getElementById("creatividad")) {
    document.getElementById("creatividad").addEventListener("click", pasarPaginaCreatividad);
}

function pasarPaginaAutoconocimiento() {
    window.location.href = 'autoconocimiento.html';
}

function pasarPaginEstres() {
    window.location.href = 'player.html';
}

function pasarPaginaCreatividad() {
    window.location.href = 'creatividad.html';
}