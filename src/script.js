//let numeroAleatorio = 10;
let numeroAleatorio = Math.floor(Math.random()+1);
let tentativas = 0;

function jogoDeAdivinhacao() {
      const palpiteDigitado = pegarPalpiteDigitado();
      const palpitesFalhos = pegarPalpitesFalhos();
    
    if(!palpiteDigitado || palpiteDigitado < 1 || palpiteDigitado > 100){
        alert("Por favor, Digite um valor válido, entre 1 e 100!");
        return;
    } else if (palpiteDigitado === numeroAleatorio){
        alert("Parabéns, você advinhou !!");
        reiniciarJogo();
        return;
    } 
    if (palpiteDigitado > numeroAleatorio && !palpitesFalhos.includes(palpiteDigitado)){
        tentativas++;
        atualizarFeedback("Este numero é muito alto, tente novamente :(");
    } else if(palpiteDigitado < numeroAleatorio && !palpitesFalhos.includes(palpiteDigitado)){
        tentativas++;
        atualizarFeedback("Este numero é muito baixo, tente nomavemente :(");
    } else if(palpitesFalhos.includes(palpiteDigitado)){
        alert("Ops, esse numero já foi!"); 
        return;
    } 


    const novaPontuacao = 100 - (tentativas * 10);
    atualizarPontuacao(novaPontuacao);  

    
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
