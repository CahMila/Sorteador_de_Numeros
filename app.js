function sortear(){
    let quantidade = parseInt(document.getElementById ('quantidade').value);
    let de = parseInt(document.getElementById ('de').value);
    let ate = parseInt (document.getElementById ('ate').value);

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
      }

      if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }


    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio (de, ate);
       
        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio (de, ate);
        }
        
        sorteados.push(numero);

    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML =  `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    falarNumerosSorteados(sorteados); // Chama a função para falar os números sorteados
    alterarStatusBotao();
}    

function falarNumerosSorteados(sorteados){
    responsiveVoice.speak(`Os números sorteados são: ${sorteados.join(' , ')}`, 'Brazilian Portuguese Female', {rate: 0.9});

}
function obterNumeroAleatorio (min, max){
    //return parseInt (Math.random() * (max - min) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao')
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById ('quantidade').value = '';
    document.getElementById ('de').value = '';
    document.getElementById ('ate').value = '';
    document.getElementById ('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: Nenhum</label>';
    alterarStatusBotao();
}
