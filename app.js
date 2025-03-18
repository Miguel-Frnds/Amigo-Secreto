let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome) {
    amigos.push(nome);
    exibirAmigos();
    input.value = "";
  } else {
    alert("Digite um nome válido!");
  }
}

function exibirAmigos() {
  const lista = document.getElementById("lista-amigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const item = document.createElement("li");
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo antes de sortear!");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  // Exibe o resultado
  const resultado = document.getElementById("resultado-sorteio");
  resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
  resultado.classList.add("mensagem-verde");

  // Limpa a lista da tela
  document.getElementById("lista-amigos").innerHTML = "";
}
