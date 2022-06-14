const img = document.querySelector('#img');
const buttons = document.querySelector('#buttons');
let colorIndex = 0
const text = document.querySelector('#text');
let intervalId = null

const trafficLight = (event) => {
    const btn = event.target.id
    stopAutomatic()
    turnOn[btn]()
    if (btn == 'red') {
        text.innerHTML = 'Pare!'
    } else if (btn == 'yellow') {
        text.innerHTML = 'Atenção'
    } else {
        text.innerHTML = 'Avance ^^'
    }
}

const nextIndex = () => {
    if (colorIndex < 2) {
        colorIndex++
    } else {
        colorIndex = 0;
    }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    console.log(color);
    turnOn[color]();

    nextIndex();

    if (color == 'red') {
        text.innerHTML = 'Pare!'
    } else if (color == 'yellow') {
        text.innerHTML = 'Atenção'
    } else {
        text.innerHTML = 'Avance ^^'
    }
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    // 'automatic': () => setTimeout(changeColor, 1000) --- executa apenas uma vez
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}



// -----------------------------------------
// const turnOnRed = () => {
//     img.src = "./img/vermelho.png"
// }
// const turnOnYellow = () => {
//     img.src = "./img/amarelo.png"
// }
// const turnOnGreen = () => {
//     img.src = "./img/verde.png"
// }

// const trafficLight = (event) => {
//     const btn = event.target.id
//     if (btn == 'red') {
//         turnOnRed()
//     } else if (btn == 'yellow') {
//         turnOnYellow()
//     } else if (btn == 'green') {
//         turnOnGreen()
//     }
// }
// -----------------------------------------

buttons.addEventListener('click', trafficLight);