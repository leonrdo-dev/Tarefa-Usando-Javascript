const mensagem = document.querySelector("#mensagem");
const input = document.querySelector("#tarefa");
const formulario = document.querySelector("#formulario");
const lista = document.querySelector("#lista");
const contador = document.querySelector("#contador");

let total = 0;

function AdicionarItemLista(evento) {
    evento.preventDefault();

    const texto = input.value.trim();

    if (texto === "") {
        mensagem.textContent = "É necessário adicionar uma tarefa.";
        return;
    }

    const item = document.createElement("li");
    item.textContent = texto;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";

    botaoRemover.addEventListener("click", function(evento) {
        evento.stopPropagation();

        item.remove();

        total--;
        contador.textContent = total;
    });

    item.addEventListener("click", function () {
        item.classList.toggle("concluida");
    });

    item.appendChild(botaoRemover);
    lista.appendChild(item);

    mensagem.textContent = "Tarefa adicionada com sucesso!";

    total++;
    contador.textContent = total;

    input.value = "";
}

formulario.addEventListener("submit", AdicionarItemLista);