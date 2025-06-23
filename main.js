const botoes = document.querySelectorAll(".botoes");
const textos = document.querySelectorAll(".abas-conteudo");
const contadores = document.querySelectorAll(".contador");
console.log(botoes)

for(let i=0; i< botoes.length; i++){
    botoes[i].onclick = function(){
        
        for (let j=0; j<botoes.length; j++){
            botoes[j].remove.add("ativo");
            textos[j].remove.add("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}