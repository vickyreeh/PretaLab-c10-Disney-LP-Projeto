let numeroAleatorio = 10;
//let numeroAleatorio = Math.floor(Math.random()+1);
let tentativas = 0;

function jogoDeAdivinhacao() {
      const palpiteDigitado = pegarPalpiteDigitado();
    
    if(!palpiteDigitado){
        alert("Por favor, Digite um valor válido!");
        return;
    } 
    if (palpiteDigitado === numeroAleatorio){
        alert("Parabéns, você advinhou !!");
        reiniciarJogo();
        return;
    } else if (palpiteDigitado > numeroAleatorio){
        tentativas++;
        atualizarFeedback("Este numero é muito alto, tente novamente :(");
    } else if(palpiteDigitado < numeroAleatorio){
        tentativas++;
        atualizarFeedback("Este numero é muito baixo, tente nomavemente :(");
    }
    const novaPontuacao = 100 - (tentativas * 10);
    atualizarPontuacao(novaPontuacao);  

    const palpitesFalhos = pegarPalpitesFalhos();
    const novosPalpitesFalhos = palpitesFalhos+ " " + palpiteDigitado;
    atualizarPalpitesFalhos(novosPalpitesFalhos);

    const pontuacaoAtual = pegarPontuacao();
    if(pontuacaoAtual === "Você tem 0 pontos"){
        alert("Deu ruim, boy! Dê seus pulos");
        reiniciarJogo();
    }
}
function reiniciarJogo() {
    // to-do
    const vaiReiniciar = confirm("Deseja jogar novamente?");

    if(vaiReiniciar === true){
        atualizarPalpitesFalhos("");
        atualizarPontuacao(100);
        atualizarFeedback("");
        limparPalpiteDigitado();
    }
}
