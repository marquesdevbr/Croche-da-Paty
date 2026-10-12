// ==================================================
// CROCHÊ DA PATY — script.js
// ==================================================
// Cuida do menu mobile (hamburger), da renderização
// dos cards de produto (Home e catálogo), do filtro
// por categoria e da página dinâmica de produto,
// todos usando os dados de produtos.js.
// A lightbox da galeria será adicionada aqui em uma
// etapa futura.
// ==================================================


// ---------- WhatsApp e Instagram ----------

// Número usado nos links de pedido. Formato: 55 + DDD + número, sem espaços/símbolos.
const WHATSAPP_NUMERO = "554998188447";

// Link oficial do Instagram
const LINK_INSTAGRAM = "https://www.instagram.com/marques.patriciamarques/";

// Monta o link do WhatsApp com uma mensagem já preenchida com o nome do produto
function gerarLinkWhatsApp(produto) {
    const mensagem = `Olá! Vi o ${produto.nome} no site Crochê da Paty e gostaria de saber mais informações. 😊`;
    return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

// Monta o link do WhatsApp com uma mensagem genérica (usado no footer e na página de contato)
function gerarLinkWhatsAppGeral() {
    const mensagem = "Olá! Vim pelo site Crochê da Paty e gostaria de saber mais informações. 😊";
    return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

// Preenche automaticamente todo link marcado com essas classes,
// então o número e o Instagram só precisam ser trocados aqui em um lugar.
document.querySelectorAll(".whatsapp-link").forEach((link) => {
    link.href = gerarLinkWhatsAppGeral();
    link.target = "_blank";
    link.rel = "noopener";
});

document.querySelectorAll(".instagram-link").forEach((link) => {
    link.href = LINK_INSTAGRAM;
    link.target = "_blank";
    link.rel = "noopener";
});


// ---------- Cards de produto ----------

// Monta o HTML de um card. O botão sempre leva à página de detalhes do produto.
function criarCardProduto(produto) {

    const etiquetaHtml = produto.etiqueta
        ? `<div class="etiqueta">${produto.etiqueta}</div>`
        : "";

    return `
        <div class="card">
            ${etiquetaHtml}
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="card-content">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <div class="preco">${produto.preco}</div>
                <a class="btn" href="produto.html?id=${produto.id}">Ver detalhes</a>
            </div>
        </div>
    `;
}

// Renderiza uma lista de produtos dentro de um container pelo id
function renderizarProdutos(lista, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = lista.map((produto) => criarCardProduto(produto)).join("");
}

// Se a página tiver o container de destaques (Home), preenche com listarDestaques()
const containerDestaque = document.getElementById("produtos-destaque");
if (containerDestaque && typeof listarDestaques === "function") {
    renderizarProdutos(listarDestaques(), "produtos-destaque");
}

// Se a página tiver o container do catálogo completo (produtos.html), preenche com listarProdutos()
const containerCatalogo = document.getElementById("produtos-lista");
if (containerCatalogo && typeof listarProdutos === "function") {
    renderizarProdutos(listarProdutos(), "produtos-lista");
}


// ---------- Filtro por categoria ----------

// Nomes de exibição para as categorias já conhecidas. Uma categoria nova
// (que não estiver aqui) aparece com a primeira letra de cada palavra maiúscula.
const NOMES_CATEGORIAS = {
    "mesa-posta": "Mesa Posta",
    tapetes: "Tapetes",
    passadeiras: "Passadeiras",
    personalizados: "Personalizados"
};

function nomeCategoria(categoria) {
    if (NOMES_CATEGORIAS[categoria]) {
        return NOMES_CATEGORIAS[categoria];
    }
    return categoria.replace(/(^|\s)\S/g, (letra) => letra.toUpperCase());
}

// Monta os botões de filtro com base nas categorias que existem hoje em produtos.js
function renderizarFiltros() {
    const container = document.getElementById("filtros");
    if (!container || typeof obterCategoriasUnicas !== "function") return;

    const categorias = obterCategoriasUnicas();

    let html = `<button class="filtro-btn ativo" data-categoria="todos">Todos</button>`;
    categorias.forEach((categoria) => {
        html += `<button class="filtro-btn" data-categoria="${categoria}">${nomeCategoria(categoria)}</button>`;
    });

    container.innerHTML = html;
}

renderizarFiltros();

// Precisa ser depois do renderizarFiltros(), já que os botões são criados dinamicamente
const botoesFiltro = document.querySelectorAll(".filtro-btn");

botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {

        // Marca visualmente qual botão está ativo
        botoesFiltro.forEach((b) => b.classList.remove("ativo"));
        botao.classList.add("ativo");

        // Filtra e renderiza de novo o catálogo
        const categoria = botao.dataset.categoria;
        const produtosFiltrados = filtrarPorCategoria(categoria);
        renderizarProdutos(produtosFiltrados, "produtos-lista");
    });
});


// ---------- Página de detalhes do produto ----------

const containerDetalhe = document.getElementById("produto-detalhe");

if (containerDetalhe) {

    const parametros = new URLSearchParams(window.location.search);
    const idProduto = parametros.get("id");
    const produto = typeof buscarProdutoPorId === "function" ? buscarProdutoPorId(idProduto) : null;

    if (produto) {

        const disponibilidade = produto.status === "disponivel" ? "Disponível" : "Indisponível no momento";
        const personalizavel = produto.personalizado ? "Sim, esta peça aceita personalização." : "Esta peça não aceita personalização.";

        containerDetalhe.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="detalhe-info">
                <p class="detalhe-categoria">${nomeCategoria(produto.categoria)}</p>
                <h2>${produto.nome}</h2>
                <div class="preco">${produto.preco}</div>
                <p>${produto.descricao}</p>
                <p><strong>Tamanho:</strong> ${produto.tamanho}</p>
                <p><strong>Cores disponíveis:</strong> ${produto.cores.join(", ")}</p>
                <p><strong>Disponibilidade:</strong> ${disponibilidade}</p>
                <p>${personalizavel}</p>
                <a class="btn" href="${gerarLinkWhatsApp(produto)}" target="_blank" rel="noopener">Fazer pedido pelo WhatsApp</a>
            </div>
        `;

    } else {

        containerDetalhe.innerHTML = `
            <p style="text-align:center; width:100%;">
                Produto não encontrado. <a href="produtos.html" style="color:#b07d52; font-weight:600;">Voltar ao catálogo</a>
            </p>
        `;

    }
}


// ---------- Rodapé: ano automático ----------

const anoAtual = document.getElementById("ano-atual");
if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}


// ---------- Galeria: lightbox ----------

const galeriaItens = document.querySelectorAll(".galeria-item");
const lightbox = document.getElementById("lightbox");

if (lightbox && galeriaItens.length) {

    const lightboxImagem = document.getElementById("lightbox-imagem");
    const lightboxFechar = document.getElementById("lightbox-fechar");

    const abrirLightbox = (item) => {
        lightboxImagem.src = item.src;
        lightboxImagem.alt = item.alt;
        lightbox.classList.add("ativo");
    };

    const fecharLightbox = () => {
        lightbox.classList.remove("ativo");
    };

    galeriaItens.forEach((item) => {
        item.addEventListener("click", () => abrirLightbox(item));
    });

    lightboxFechar.addEventListener("click", fecharLightbox);

    // Fecha ao clicar fora da imagem (no fundo escuro)
    lightbox.addEventListener("click", (evento) => {
        if (evento.target === lightbox) fecharLightbox();
    });

    // Fecha ao apertar Esc
    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") fecharLightbox();
    });
}


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
