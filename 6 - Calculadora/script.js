'use strict';

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => operador !== undefined;

const calcular = () => {
    if (operacaoPendente()) {
        const numeroAtual = +display.textContent.replace(',', '.');
        novoNumero = true;
        // if (operador == '+') {
        //     atualizarDisplay(numeroAnterior + numeroAtual)
        // } else if (operador == '-') {
        //     atualizarDisplay(numeroAnterior - numeroAtual)
        // } else if (operador == '*') {
        //     atualizarDisplay(numeroAnterior * numeroAtual)
        // } else if (operador == '/') {
        //     atualizarDisplay(numeroAnterior / numeroAtual)
        // }

        //outra opção para fazer no lugar do if acima
        const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`)
        atualizarDisplay(resultado)
    }
}

const atualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto.toLocaleString('BR');
        novoNumero = false
    } else {
        display.textContent += texto.toLocaleString('BR');
    }
}

const inserirNumero = (event) => atualizarDisplay(event.target.textContent);
numeros.forEach(numero => numero.addEventListener('click', inserirNumero));

const selecionarOperador = (event) => {
    if (!novoNumero) {
        calcular();
        novoNumero = true;
        operador = event.target.textContent;
        numeroAnterior = +display.textContent.replace(',', '.');
    }
}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador))

const ativarIgual = () => {
    calcular();
    operador = undefined;
}
document.getElementById('igual').addEventListener('click', ativarIgual);

const limparDisplay = () => display.textContent = '';
document.getElementById('limparDisplay').addEventListener('click', limparDisplay)

const limparCalculo = () => {
    limparDisplay();
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
}
document.getElementById('limparCalculo').addEventListener('click', limparCalculo)

const removerUltimoNumero = () => display.textContent = display.textContent.slice(0, -1);
document.getElementById('backspace').addEventListener('click', removerUltimoNumero);

const inverterSinal = () => {
    novoNumero = true;
    atualizarDisplay(display.textContent * -1);
};
document.getElementById('inverter').addEventListener('click', inverterSinal);

const existeDecimal = () => display.textContent.indexOf(',') !== -1;
const existeValor = () => display.textContent.length > 0;
const inserirDecimal = () => {
    if (!existeDecimal()) {
        if (existeValor()) {
            atualizarDisplay(',');
        } else {
            atualizarDisplay('0,');
        }
    }
}
document.getElementById('decimal').addEventListener('click', inserirDecimal);

const mapTeclado = {
    '0': 'tecla0',
    '1': 'tecla1',
    '2': 'tecla2',
    '3': 'tecla3',
    '4': 'tecla4',
    '5': 'tecla5',
    '6': 'tecla6',
    '7': 'tecla7',
    '8': 'tecla8',
    '9': 'tecla9',
    ',': 'decimal',
    '+': 'operadorAdicionar',
    '-': 'operadorSubtrair',
    '*': 'operadorMultiplicar',
    '/': 'operadorDividir',
    'Enter': 'igual',
    '=': 'igual',
    'Backspace': 'backspace',
    'Escape': 'limparCalculo',
    'c': 'limparDisplay'
}

const mapearTeclado = (event) => {
    const tecla = event.key;
    const teclaPermitida = () => Object.keys(mapTeclado).indexOf(tecla) !== -1;
    if (teclaPermitida()) {
        document.getElementById(mapTeclado[tecla]).click();
    }
}
document.addEventListener('keydown', mapearTeclado);