// ==================================================
// CROCHÊ DA PATY — script.js
// ==================================================
// Por enquanto, este arquivo cuida apenas do menu
// mobile (hamburger). Outras funcionalidades (filtro
// de produtos, lightbox da galeria, WhatsApp) serão
// adicionadas aqui em etapas futuras.
// ==================================================

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

if (menuToggle && nav) {

    menuToggle.addEventListener('click', () => {
        const menuAberto = nav.classList.toggle('aberto');
        menuToggle.classList.toggle('ativo', menuAberto);
        menuToggle.setAttribute('aria-expanded', menuAberto);
    });

    // Fecha o menu automaticamente ao clicar em um link
    // (evita que o menu fique aberto depois de navegar)
    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('aberto');
            menuToggle.classList.remove('ativo');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

}
