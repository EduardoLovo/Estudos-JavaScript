const turnOnOff = document.querySelector('#turnOnOff');
const lamp = document.querySelector('#lamp');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.png'
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.png'
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.png'
}

function lampOnOff() {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    } else {
        lampOff();
        turnOnOff.textContent = 'Ligar'
    }
}



turnOnOff.addEventListener('click', lampOnOff);


lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);

lamp.addEventListener('dblclick', lampBroken);


// textContent = conteudo