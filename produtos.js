// ==================================================
// CROCHÊ DA PATY — produtos.js
// ==================================================
// Aqui ficam os produtos do site e as funções que o
// script.js usa para montar os cards (Início, Produtos)
// e a página de detalhes do produto.
//
// ------------------------------------------------
// COMO ADICIONAR UM PRODUTO NOVO
// ------------------------------------------------
// 1. Copie a foto para a pasta assets/images/produtos/
// 2. Copie o bloco modelo abaixo e cole no FIM da lista
//    de produtos (antes do "];"), com uma vírgula depois
//    do bloco anterior.
// 3. Troque os textos. Só estes 4 são obrigatórios:
//    nome, categoria, preco e imagem.
//    O resto pode apagar à vontade: o site simplesmente
//    não mostra a linha que estiver faltando.
//
//    {
//        nome: "Nome da peça",
//        categoria: "mesa-posta",
//        preco: "R$ 00,00",
//        imagem: "assets/images/produtos/nome-da-foto.jpg",
//        tamanho: "70 cm x 40 cm",
//        cores: ["Vermelho", "Cru"],
//        descricao: "Texto curto sobre a peça.",
//        etiqueta: "Novo",
//        destaque: true
//    },
//
// CATEGORIAS: use mesa-posta, tapetes, passadeiras ou
// personalizados. Para uma categoria nova, basta escrever
// o nome (ex: "almofadas") e o botão de filtro aparece
// sozinho na página de produtos.
//
// DESTAQUE: destaque: true faz o produto aparecer também
// na página inicial.
//
// ETIQUETA (opcional): "Novo", "Mais vendido", "Destaque"
// ou "Exclusivo". Não precisa colocar em todos.
// ==================================================

const produtos = [
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
        destaque: true,
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
        personalizado: false
    }
];


// ---------- Valores padrão ----------

// Transforma "Trilho de Mesa" em "trilho-de-mesa" (sem acento, sem espaço).
// É o id usado no endereço da página do produto: produto.html?id=trilho-de-mesa
function criarId(nome) {
    return nome
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

// Completa o que o produto não trouxe, para cadastrar só o essencial
produtos.forEach((produto) => {
    if (!produto.id) produto.id = criarId(produto.nome);
    if (!produto.status) produto.status = "disponivel";
    if (!produto.preco) produto.preco = "Consulte o valor";
    if (!produto.etiqueta) produto.etiqueta = null;
});


// ---------- Funções de acesso aos produtos ----------

// Retorna todos os produtos
function listarProdutos() {
    return produtos;
}

// Retorna apenas os produtos marcados como destaque (usado na Home)
function listarDestaques() {
    return produtos.filter((produto) => produto.destaque);
}

// Retorna um produto pelo id (usado na página de detalhes)
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
