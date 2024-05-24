let numeroAleatorio = 0;
let tentativas = 0;

function jogoDeAdivinhacao() {
    /*
    Guiado
    ---
    1. Não aceita palpite vazio
    2. Dar dicas a cada palpite (maior ou menor)
    3. Atualizar a pontuação a cada palpite errado
    4. Mostrar todos os palpites errados
    5. Deve-se poder reiniciar o jogo a qualquer momento
    6. Se a pontuação chegar a zero, deve ser exibido um alerta e reiniciado o jogo
    
    Individual
    ---
    7. Só deve aceitar numeros entre 1 e 100
    8. Não deve aceitar palpite repetido
    */


    // to-do

    let numeroAleatorio = Math.floor(Math.random()+1);
    let tentativas = 0;

    function jogoDeAdivinhacao( ){
        const palpiteDigitado = Pegarpalpitedigitado()
        
        if(!palpiteDigitado){
            alert("Por favor, Digite um valor válido!");
            return;} 
        if (palpiteDigitado === numeroAleatorio){
            alert("Parabéns, você advinhou !!");
            reiniciarJogo;
            return;
        } else if (palpiteDigitado > numeroAleatorio){
            tentativas++;
            atualizarFeedback("Este numero é muito alto, tente novamente :(");
        } else (palpiteDigitado < numeroAleatorio){
            tentativas++;
            atualizarFeedback("Este numero é muito baixo, tente nomavemente :(");
        }
        const novaPontuacao = 100 - (tentativas * 10);
        atualizarPontuacao(novaPontuacao);    

        const = palpitesFalhos = pegarPalpitesFalhos;
        const = novosPalpitesFalhos = palpitesFalhos+ " " + palpiteDigitado;
        atualizarPalpitesFalhos(novosPalpitesFalhos);

        const pontuacaoAtual = pegarPontuacao;
        if(pontuacaoAtual === "Você tem 0 pontos"){
            alert("Deu ruim, boy! Dê seus pulos");
            reiniciarJogo();
        }
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
