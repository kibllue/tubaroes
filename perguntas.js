const perguntas = [
    {
        pergunta: "Quanto tempo um tubarão vive?",
        opcoes: [
            "Entre 15 e 20 anos ",
            "Entre 30 e 56 anos ",
            "Entre 5 e 30 anos ",
            "Entre 20 e 30 anos"
        ],
        resposta: 3 // índice da resposta correta
    },
    {
        pergunta: "Qual o maior tubarão já registrado?",
        opcoes: [
            "Tubarão-branco",
            "Tubarão-baleia",
            "Tubarão-martelo",
            "Tubarão raposa"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual o Tubarão mais temido?",
        opcoes: [
            "Tubarão tigre",
            "Tubarão galha preta",
            "Tubarão branco",
            "Tubarão mako-cavala"
        ],
        resposta: 2
    },
    {
        pergunta: "Qual o tubarão mais dócil?",
        opcoes: [
            "Cação-lixa",
            "Grande cação-frango",
            "Tubarão-prego",
            "Cação-lixa"
        ],
        resposta: 0
    },
    
    {
        pergunta: "Que animal os tubarões mais temem?",
        opcoes: [
            "Golfinhos",
            "Orcas",
            "Leões marinhos",
            "Tubarão galha preta"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual o Tubarão mais antigo?",
        opcoes: [
            "Tubarão cabeça-chata",
            "Tubarões tigres",
            "Tubarão galha branca oceânico",
            "Tubarão-da-Groenlândia"
        ],
        resposta: 3
    },

    
 
    
];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção. 🤨";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta! 💯";
    } else {
        resultadoDiv.innerHTML = "Resposta incorreta! Tente novamente. ❌ ";
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;

