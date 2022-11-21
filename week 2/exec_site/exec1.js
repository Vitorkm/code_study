function impar() {
    let numInput = document.querySelector('#number').value;
    if (numInput == 1) {
        alert('É primo!');
        return;
    }
    for (let i = 2; i < (numInput/2); i++) {
        if (numInput % i == 0) {
            alert('Não é primo!');
            return;
        } 
    }
    alert('É primo!');
}

function fatorial() {
    let fatInput = document.querySelector('#fat').value;
    let fatFinal = 1;
    if (fatInput == 1) {
        alert('1');
        return;
    }
    for (let i = 1; i <= fatInput; i++) {
        fatFinal = fatFinal * i;
    }
    alert(fatFinal);
}

function fibonacci() {
    let fibonacciInput = document.querySelector('#fibonacci').value;
    let ultimo = 1;
    let penultimo = 1;
    let fibonacci = 0;
    if (fibonacciInput == 1 || fibonacciInput == 2) {
        alert('1');
        return;
    }
    for (let i = 3; i <= fibonacciInput; i++) {
        fibonacci = ultimo + penultimo;
        penultimo = ultimo;
        ultimo = fibonacci;
    }
    alert(fibonacci);
}