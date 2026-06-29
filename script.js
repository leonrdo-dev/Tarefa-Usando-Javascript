const lista = document.querySelector("#lista");
const formulario = document.querySelector("#formulario");
const input = document.querySelector("#tarefa");
const mensagem = document.querySelector("#mensagem");
const contador = document.querySelector("#contador");

let total = 0;

formulario.addEventListener("submit", function(evento){

  evento.preventDefault();
  const texto = input.value.trim();

 if(texto === "" ){

  mensagem.textContent = "Você precisa adicionar uma tarefa.";
  return;

 }
 
 const item = document.createElement("li");
 
 item.textContent = texto;
 
 lista.appendChild(item);
 
 input.value = "";
 mensagem.textContent = "Tarefa adicionada com sucesso!";
 
  total++;
 contador.textContent = total;

})