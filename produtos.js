// ==================================================
// CROCHÊ DA PATY — produtos.js
// ==================================================
// Dados de DEMONSTRAÇÃO dos produtos, apenas para
// desenvolvimento. Serão substituídos pelos produtos
// reais quando estiverem disponíveis.
//
// Também ficam aqui as funções de acesso aos dados,
// usadas pelo script.js para montar os cards nas
// páginas (Início, Produtos e, futuramente, a página
// de detalhes do produto).
// ==================================================

const produtos = [
    // ---------- PRODUTOS REAIS ----------
    {
        id: "centro-de-mesa",
        nome: "Centro de Mesa",
        categoria: "mesa-posta",
        preco: "R$ 80,00",
        imagem: "assets/images/produtos/centro-de-mesa.jpg",
        tamanho: "Diâmetro de 0,77m",
        descricao: "Peça artesanal para decorar a mesa.",
        cores: ["Preto", "Amarelo mostarda"],
        etiqueta: "Novo",
        destaque: true,
        status: "disponivel",
        personalizado: false
    },
    {
        id: "trilho-de-mesa",
        nome: "Trilho de Mesa",
        categoria: "mesa-posta",
        preco: "R$ 80,00",
        imagem: "assets/images/produtos/trilho-de-mesa.jpg",
        tamanho: "0,70m x 0,40m",
        descricao: "Trilho artesanal para compor a decoração da mesa.",
        cores: ["Cru", "Vermelho"],
        etiqueta: null,
        destaque: true,
        status: "disponivel",
        personalizado: false
    },

    {
        id: "sousplat-mesa-posta",
        nome: "Sousplat Mesa Posta",
        categoria: "mesa-posta",
        preco: "R$ 120,00 (jogo com 4 peças)",
        imagem: "assets/images/produtos/sousplat.jpg",
        tamanho: "Diâmetro de 0,38m (cada peça)",
        descricao: "Jogo de sousplats artesanais para mesa posta.",
        cores: ["Vermelho"],
        etiqueta: "Destaque",
        destaque: true,
        status: "disponivel",
        personalizado: false
    },

    // ---------- PRODUTOS DE DEMONSTRAÇÃO (trocar pelos reais aos poucos) ----------
    {
        id: "tapete-floral",
        nome: "Tapete Floral",
        categoria: "tapetes",
        preco: "R$ 95,00",
        imagem: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
        tamanho: "0,90m x 0,60m",
        descricao: "Ideal para sala ou quarto.",
        cores: ["Rosa", "Bege", "Branco"],
        etiqueta: "Mais vendido",
        destaque: true,
        status: "disponivel",
        personalizado: false
    },
    {
        id: "passadeira-elegance",
        nome: "Passadeira Elegance",
        categoria: "passadeiras",
        preco: "R$ 140,00",
        imagem: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=800&q=80",
        tamanho: "1,50m x 0,50m",
        descricao: "Produção artesanal.",
        cores: ["Bege", "Marrom"],
        etiqueta: null,
        destaque: true,
        status: "disponivel",
        personalizado: false
    },
    {
        id: "tapete-redondo",
        nome: "Tapete Redondo",
        categoria: "tapetes",
        preco: "R$ 120,00",
        imagem: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80",
        tamanho: "Diâmetro de 0,80m",
        descricao: "Disponível em várias cores.",
        cores: ["Rosa", "Creme", "Marrom"],
        etiqueta: null,
        destaque: true,
        status: "disponivel",
        personalizado: false
    },
    {
        id: "conjunto-personalizado",
        nome: "Conjunto Personalizado",
        categoria: "personalizados",
        preco: "Sob consulta",
        imagem: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
        tamanho: "Sob medida",
        descricao: "Criado especialmente para o seu espaço.",
        cores: ["Sob consulta"],
        etiqueta: "Exclusivo",
        destaque: true,
        status: "disponivel",
        personalizado: true
    }
];


// Retorna todos os produtos
function listarProdutos() {
    return produtos;
}

// Retorna apenas os produtos marcados como destaque (usado na Home)
function listarDestaques() {
    return produtos.filter((produto) => produto.destaque);
}

// Retorna um produto pelo id (será usado na página de detalhes futuramente)
function buscarProdutoPorId(id) {
    return produtos.find((produto) => produto.id === id);
}

// Retorna os produtos de uma categoria específica ("todos" retorna tudo)
function filtrarPorCategoria(categoria) {
    if (categoria === "todos") {
        return produtos;
    }
    return produtos.filter((produto) => produto.categoria === categoria);
}

// Retorna a lista de categorias que realmente existem hoje nos produtos cadastrados,
// na ordem em que aparecem (sem repetir). Usada para gerar os botões de filtro.
function obterCategoriasUnicas() {
    const categorias = produtos.map((produto) => produto.categoria);
    return [...new Set(categorias)];
}
