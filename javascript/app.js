// Seleciona o botão com o ID 'botao' e armazena em uma constante
const botao = document.getElementById('botao');
// Seleciona o elemento com o ID 'resultados-pesquisa' e armazena em uma constante
const novoConteudo = document.getElementById('resultados-pesquisa');
// Adiciona um ouvinte de evento ao botão. Quando o botão for clicado...
botao.addEventListener('click', () => {
    // ... rola suavemente até a seção com o ID 'resultados-pesquisa'
    novoConteudo.scrollIntoView({ behavior: 'smooth' });
});

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;

    
    if (campoPesquisa == "") {
        section.innerHTML = "<p class='item-resultado'>Campo vazio, digite algum filme, ator ou gênero</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let tags = "";


    
    // Itera sobre cada resultado da pesquisa
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || 
         tags.includes(campoPesquisa)) {
            // Cria uma nova div para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2 style="text-align: center;">${dado.titulo}: <h3 style="text-align: center; color: #222831; ">Top: ${dado.top}</h3></h2>
                <img width="25%" height="400" " src="${dado.imagem}">
                <iframe width="70%" height="400" style="float: right";  src="${dado.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p class="descricao-meta" style="color:#222831;">Ano de lançamento: ${dado.anoLancamento}</p>
                <p class="descricao-meta">${dado.descricao}</p>
                <span>Nota: </span><span class="nota">${dado.nota}</span><span class="meta"> Metascore <a href="https://www.imdb.com/list/ls569249036/?year=2023%2C&sort=popularity%2Casc&view=compact" target="_blank">IMDb</a></span>
                <div><a href="${dado.link}" target="_blank">Mais Informações</a></div>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p class='item-resultado'>Apenas filmes do top 10 🎬</p>"
    }
    // Insere os resultados na seção HTML
    section.innerHTML = resultados;

}




