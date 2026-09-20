# 🧶 Crochê da Paty

> Site desenvolvido para apresentar o trabalho artesanal de crochê e seus produtos.

**Status:** 🚧 Em desenvolvimento

---

## 📖 Sobre o projeto

O **Crochê da Paty** é um projeto de desenvolvimento web criado para apresentar o trabalho artesanal de crochê da minha mãe.

A proposta do projeto é criar uma presença digital simples, bonita e organizada, permitindo apresentar os produtos, destacar o trabalho artesanal e facilitar o contato com pessoas interessadas.

O site foi desenvolvido como um projeto pessoal, unindo aprendizado em desenvolvimento web com uma necessidade real.

---

## 🎯 Objetivo

O principal objetivo do projeto é criar uma vitrine digital para o trabalho de crochê, apresentando os produtos de maneira visualmente agradável e destacando o cuidado envolvido na produção artesanal.

Além disso, o projeto serve como oportunidade para colocar em prática conhecimentos de desenvolvimento web e continuar evoluindo minhas habilidades.

---

## ✨ Funcionalidades

Atualmente, o site conta com:

- 🧶 Identidade visual própria, com logo oficial e favicon
- 🏠 Site dividido em múltiplas páginas (Início, Produtos, Sobre, Galeria, Contato)
- 📱 Menu mobile com botão hamburger
- 🛍️ Catálogo de produtos com filtro por categoria (Tapetes, Passadeiras, Decoração, Personalizados)
- 📄 Página dinâmica de produto (`produto.html?id=...`), que carrega os dados a partir de um único arquivo
- 💬 Botão de pedido pelo WhatsApp, com mensagem preenchida automaticamente com o nome do produto
- 🖼️ Galeria com lightbox (clique para ampliar imagem) em JavaScript puro
- 📅 Ano do copyright no rodapé gerado automaticamente
- 🎨 Design com foco em simplicidade, elegância e aconchego
- ♻️ Estrutura pensada para facilitar manutenção e adição de novos produtos

---

## 🛍️ Produtos

O catálogo é alimentado por um arquivo central (`produtos.js`), onde cada produto tem nome, categoria, preço, tamanho, descrição, cores e etiqueta (ex: "Mais vendido", "Exclusivo").

Atualmente estão cadastrados produtos de **demonstração**, como:

- 🌸 Tapete Floral
- 🤎 Passadeira Elegance
- 🧶 Tapete Redondo
- 🎁 Conjunto Personalizado

Esses dados serão substituídos pelos produtos reais assim que estiverem disponíveis. A estrutura já foi pensada para isso: basta adicionar um novo item no `produtos.js` que ele aparece automaticamente no site (Home, catálogo e página de detalhes).

---

## 🎨 Identidade visual

A identidade visual do site foi pensada para transmitir uma sensação de:

- Aconchego
- Artesanato
- Elegância
- Simplicidade
- Cuidado

O site utiliza a logo oficial da marca (novelo de linha, gancho de crochê e coração), com uma paleta de cores extraída diretamente dela — tons de rosa/coral e marrom — combinada com tipografia Playfair Display (títulos) e Poppins (corpo do texto).

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3 (Grid, Flexbox, variáveis de layout, animações)
- JavaScript puro (sem frameworks ou bibliotecas)
- Google Fonts
- Design responsivo (mobile-first)

---

## 📁 Estrutura do projeto

```text
Crochê da Paty/
├── index.html          → Página inicial
├── produtos.html        → Catálogo com filtro por categoria
├── produto.html         → Página dinâmica de detalhes do produto
├── sobre.html           → História da marca e processo
├── galeria.html          → Galeria de fotos com lightbox
├── contato.html          → Contato (WhatsApp e Instagram)
│
├── style.css             → Estilos do site inteiro
├── script.js              → Menu mobile, cards, filtro, lightbox, WhatsApp
├── produtos.js             → Dados dos produtos e funções de acesso
│
├── assets/
│   ├── images/            → Logo e imagens gerais
│   └── icons/               → Favicon
│
└── README.md
```

---

## 🚀 Como executar

Clone o repositório:

```bash
git clone https://github.com/MarquesDevBR/Croche-da-Paty.git
```

Entre na pasta do projeto:

```bash
cd Croche-da-Paty
```

Depois, basta abrir o arquivo `index.html` em um navegador.

Também é possível utilizar uma extensão como o **Live Server** no Visual Studio Code para executar o projeto durante o desenvolvimento.

---

## 📚 Aprendizados

O desenvolvimento do Crochê da Paty permitiu praticar conceitos importantes de desenvolvimento web, como:

* Estruturação de um site com múltiplas páginas e componentes reaproveitados (header/footer)
* Organização de dados em JavaScript (arrays de objetos e funções de acesso)
* Manipulação do DOM para renderizar conteúdo dinamicamente
* Criação de filtros e de uma página de detalhes dinâmica via query string
* Criação de layouts responsivos com Flexbox e CSS Grid
* Tipografia e identidade visual
* Efeitos de hover, transições e um lightbox em JavaScript puro
* Organização de projetos web
* Versionamento utilizando Git e GitHub

---

## 🚧 Próximos passos

Algumas melhorias planejadas para futuras versões:

* [ ] Adicionar o número real do WhatsApp
* [ ] Adicionar o link real do Instagram
* [ ] Adicionar a história real da Paty na página Sobre
* [ ] Substituir os produtos de demonstração pelos produtos reais
* [ ] Adicionar fotos reais dos produtos e da galeria
* [ ] Avaliar um bot de atendimento no WhatsApp para agilizar pedidos

---

## 👩‍🎨 Sobre o projeto

O **Crochê da Paty** nasceu de uma ideia simples: transformar um trabalho artesanal feito com carinho em uma apresentação digital.

O projeto também representa uma forma de aplicar programação em algo real e próximo da minha família.

---

## 👨‍💻 Desenvolvedor

**Gabriel Marques**

Projeto desenvolvido como parte do meu aprendizado em desenvolvimento web e para apoiar a divulgação do trabalho artesanal da minha mãe.

---

## ❤️ Projeto

Desenvolvido com código, aprendizado e carinho pelo trabalho artesanal.

**Crochê da Paty — feito à mão com carinho.**
