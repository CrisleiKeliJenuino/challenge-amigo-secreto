//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

// Cria uma lista vazia para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputNome = document.getElementById('amigo'); // Seleciona o input do HTML onde o usuário digita o nome do amigo
    const nome = inputNome.value.trim();                // Pega o valor digitado e remove espaços do início e do fim
                                                    
    if (nome && !listaAmigos.includes(nome)) {          // Verifica se o nome não está vazio e ainda não foi adicionado à lista 
        listaAmigos.push(nome);                         // Adiciona o nome à lista de amigos
        atualizarLista();                               // Atualiza a lista exibida no HTML
        inputNome.value = '';                           // Limpa o input para o próximo nome
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() { 
    const ul = document.getElementById('listaAmigos'); // Seleciona o elemento <ul> no HTML que vai mostrar a lista    
    ul.innerHTML = '';                                 // Limpa o conteúdo do <ul> para evitar duplicação
    
    
    listaAmigos.forEach((amigo) => {             // Percorre a lista de amigos                                      
        const li = document.createElement('li'); // Cria um novo elemento <li> para cada amigo        
        li.textContent = amigo;                  // Define o texto do <li> como o nome do amigo
        ul.appendChild(li);                      // Adiciona o <li> criado dentro do <ul>
    });
}

// Função para sortear um amigo da lista
function sortearAmigo() {
    if (listaAmigos.length === 0) { // Se a lista estiver vazia, mostra mensagem de erro e sai da função
        document.getElementById("resultado").innerHTML = "<li>Adicione pelo menos um amigo!</li>";
        return;                    // interrompe a execução da função
    }
    
    const indice = Math.floor(Math.random() * listaAmigos.length); // Gera um índice aleatório dentro do tamanho da lista
    const sorteado = listaAmigos[indice];                          // Seleciona o amigo sorteado usando o índice aleatório    
    document.getElementById("resultado").innerHTML = `<li>O amigo secreto sorteado foi: ${sorteado}</li>`; // Mostra o resultado do sorteio no elemento HTML com id "resultado"
}
