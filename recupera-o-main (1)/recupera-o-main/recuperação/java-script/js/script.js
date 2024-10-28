//semaforo
//Define uma variável luzAtual inicializada com o valor 0.
let luzAtual = 0;

//Define a função mudarLuz, que será responsável por alternar a luz acesa de acordo com o índice armazenado em luzAtual.
function mudarLuz() {
    const luzes = document.querySelectorAll('.luz');//Esta linha seleciona todos os elementos HTML que possuem a classe luz
    luzes.forEach(luz => luz.classList.remove('aceso')); 
    
    luzes[luzAtual].classList.add('aceso');
    // o código adiciona a classe aceso ao elemento na posição luzAtual da lista luzes, fazendo com que essa luz seja acesa.

   
    luzAtual = (luzAtual + 1) % luzes.length; 
    //Essa linha incrementa o índice luzAtual em 1, e o operador % faz com que o índice volte a 0 se ele alcançar o número total de elementos em luzes. Isso cria um loop contínuo sobre as luzes, garantindo que o valor de luzAtual seja sempre um índice válido da lista.
}


setInterval(mudarLuz, 200);

//calculadora
let currentNumber = '';//Define uma variável currentNumber como uma string vazia. Ela será usada para armazenar o número
let previousNumber = '';//Define previousNumber como uma string vazia. Essa variável armazenará o número anterior para realizar a operação com currentNumber.
let operation = null;//Define a variável operation como null. Ela armazenará o operador matemático (+, -, *, ou /)

function appendNumber(number) { //Define a função appendNumber, que adiciona o número clicado à variável currentNumber.
    currentNumber += number;
    updateDisplay(currentNumber);
}

function setOperation(op) { //Define a função setOperation, que armazena a operação matemática escolhida e prepara a calculadora para o próximo número.
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculateResult();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function updateDisplay(value) { //Define a função updateDisplay, que exibe o valor atual no display da calculadora.


    document.getElementById('display').value = value;
}

function clearDisplay() { //Define a função clearDisplay, que redefine a calculadora, apagando todos os valores armazenados e limpando o display.
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay('');
}

function calculateResult() { //Define a função calculateResult, que calcula o resultado da operação matemática usando os valores previousNumber e currentNumber.
    if (currentNumber === '' || previousNumber === '') return;
    let result;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operation = null;
    previousNumber = '';
    updateDisplay(currentNumber);
}

//index
function redirectPage(url) {
    window.location.href = url;
}

//softskills
function toggleDescription(id) {
    const description = document.getElementById(id);
    description.classList.toggle('hidden'); //description.classList.toggle('hidden'); Usa o método toggle da classList do elemento para alternar a classe 'hidden':

   // Se o elemento já possui a classe 'hidden', o método toggle a remove, tornando o elemento visível.
   // Se o elemento não possui a classe 'hidden', o método toggle a adiciona, escondendo o elemento.
}