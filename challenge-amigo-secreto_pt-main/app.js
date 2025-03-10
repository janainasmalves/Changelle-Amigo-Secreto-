// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
  // Seleciona o input e obtém seu valor
  let nomeAmigo = document.querySelector('input').value.trim();
  
  // Verifica se o nome está vazio
  if (nomeAmigo === "") {
    alert('Por favor, insira um nome.');
    return;
  } else {
    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);
    // Atualiza a lista exibida na tela
    atualizarLista();
  }
  
  // Limpa o campo de entrada
  document.querySelector('input').value = "";
}

// Função para atualizar a lista na tela
function atualizarLista() {
  // Seleciona a UL pelo ID
  const lista = document.getElementById("listaAmigos");
  // Limpa o conteúdo atual da lista
  lista.innerHTML = "";
  
  // Percorre o array de amigos e adiciona cada um na lista
  amigos.forEach((nome) => {
    let li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
  // Verifica se o array 'amigos' está vazio
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear!");
    return; // Interrompe a função se não houver amigos
  }
  
  // Gera um índice aleatório com base no tamanho do array
  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  // Seleciona o nome correspondente
  const nomeSorteado = amigos[indiceSorteado];
  
  // Exibe o resultado na tela
  document.getElementById("resultado").textContent = "Amigo Secreto: " + nomeSorteado;
}