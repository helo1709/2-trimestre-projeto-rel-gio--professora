const botoes = document.querySelectorAll(".botoes");
console.log(botoes)
for(let i=0; i<botoes.length; i++){
    botoes[i].onclick = funcion(){
        botoes[i].classList.add("ativo");
    }
}