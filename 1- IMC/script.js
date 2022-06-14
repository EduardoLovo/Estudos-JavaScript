const calcular = document.querySelector('#calcular');

function imc() {
    const nome = document.querySelector('#nome');
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const resultado = document.querySelector('#result');


    console.log(nome);

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso!';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II.'
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!!'
        }

        resultado.innerHTML = `${nome} seu IMC é ${valorIMC}, você esta ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc);



// innerHTML = textContent