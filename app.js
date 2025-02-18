const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = '';

    const novoItemLista = document.createElement('li');
    novoItemLista.textContent = nomeAmigo;
    listaAmigos.appendChild(novoItemLista);
}

function exibirAmigos() {
    const lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const nomeAmigo = amigos[i];
        const novoItemLista = document.createElement('li');
        novoItemLista.textContent = nomeAmigo;
        lista.appendChild(novoItemLista);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos para sortear. Adicione amigos a lista.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}