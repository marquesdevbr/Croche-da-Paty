// ==================================================
// CROCHÊ DA PATY — script.js
// ==================================================
// Cuida do menu mobile (hamburger) e da renderização
// dos cards de produto a partir dos dados definidos
// em produtos.js. Outras funcionalidades (filtro por
// categoria, lightbox da galeria) serão adicionadas
// aqui em etapas futuras.
// ==================================================


// ---------- Cards de produto ----------

// Monta o HTML de um card. "contexto" define o botão:
// "destaque" (Home) leva ao catálogo completo;
// "catalogo" (produtos.html) leva direto ao WhatsApp.
function criarCardProduto(produto, contexto) {

    const etiquetaHtml = produto.etiqueta
        ? `<div class="etiqueta">${produto.etiqueta}</div>`
        : "";

    const botaoHtml = contexto === "destaque"
        ? `<a class="btn" href="produtos.html">Ver detalhes</a>`
        : `<a class="btn" href="[INSERIR LINK DO WHATSAPP]">Comprar</a>`;

    return `
        <div class="card">
            ${etiquetaHtml}
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="card-content">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <div class="preco">${produto.preco}</div>
                ${botaoHtml}
            </div>
        </div>
    `;
}

// Renderiza uma lista de produtos dentro de um container pelo id
function renderizarProdutos(lista, containerId, contexto) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = lista.map((produto) => criarCardProduto(produto, contexto)).join("");
}

// Se a página tiver o container de destaques (Home), preenche com listarDestaques()
const containerDestaque = document.getElementById("produtos-destaque");
if (containerDestaque && typeof listarDestaques === "function") {
    renderizarProdutos(listarDestaques(), "produtos-destaque", "destaque");
}

// Se a página tiver o container do catálogo completo (produtos.html), preenche com listarProdutos()
const containerCatalogo = document.getElementById("produtos-lista");
if (containerCatalogo && typeof listarProdutos === "function") {
    renderizarProdutos(listarProdutos(), "produtos-lista", "catalogo");
}


// ---------- Filtro por categoria ----------

const botoesFiltro = document.querySelectorAll(".filtro-btn");

botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {

        // Marca visualmente qual botão está ativo
        botoesFiltro.forEach((b) => b.classList.remove("ativo"));
        botao.classList.add("ativo");

        // Filtra e renderiza de novo o catálogo
        const categoria = botao.dataset.categoria;
        const produtosFiltrados = filtrarPorCategoria(categoria);
        renderizarProdutos(produtosFiltrados, "produtos-lista", "catalogo");
    });
});


// ---------- Menu mobile ----------

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
