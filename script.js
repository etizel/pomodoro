"use strict"; // obriga variaveis serem criadas
/*
Vou tentar deixar o mais documentado possível
entao as duvidas que tu tiver tu vai me perguntando ok
essa primeira parte é do contador que acredito ser a parte
mais complicada pra ti atualmente.
*/
// aqui é apenas um template string para por o zero na frente é entre apostrofe e é aquela logica ali
// o slice é pq quando for maior que 9 ficaria assim 010 ou 011, 020, tu pegar a fatia de -2 seria da direita para esquerda 
// daria pra fazer com um if ou ternario mas gosto de faze assim acho mais pratico

const formatDigit = (digit) => `0${digit}`.slice(-2);

const updateTime = (time) => {

    const seconds = document.getElementById('segundos');
    const minuts = document.getElementById('minutos');
    const hours = document.getElementById('horas');
    
    // aqui acho q nao tem dificuldades né   vai dividindo e multiplicando pra achar minutos hora segundos 
    const qtSeconds = time % 60;
    const qtMinuts = Math.floor((time % (60 * 60)) / 60);
    const qtHours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));

    
    seconds.textContent = formatDigit(qtSeconds);
    minuts.textContent = formatDigit(qtMinuts);
    hours.textContent = formatDigit(qtHours);

}

// aqui no caso time é o valor da que é passado quando chamo a  pela fução countdown
const countdown = (time) => {
    
    const count = () => {
        if (time === 0) {
            clearInterval(id);
            console.log("da pra chamar uma função aqui") // aqui é só onde tu pode faze uma chamada de funçao 
        }
        console.log(time); // aqui é só uma acora pra testar

        updateTime(time); 
        time--;
    }

    //setInterval(callbak,tempoEmMiliSegundos);
    const id = setInterval(count, 1000);
}
// o valor que vai dentro do parenteses será a variavel time
countdown(11200);