if (window.scrollY > 50) {
    cabecalho.classList.add("shadow");
    cabecalho.style.backgroundColor = "rgba(255, 255, 255, 0.95)"; // Fundo quase sólido ao rolar
    logo.style.height = "65px";
} else {
    cabecalho.classList.remove("shadow");
    cabecalho.style.backgroundColor = "#f8f9fa"; // Cor original (bg-light)
    logo.style.height = "95px";
}


