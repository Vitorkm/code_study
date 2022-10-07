function impar() {
    let numInput = document.querySelector('#number').value;
    if (numInput == 1) {
        alert('É ímpar!');
        return;
    }
    for (let i = 2; i <= numInput; i++) {
        if (numInput % i == 1) {
            alert('É ímpar!');
            break;
        } else if (numInput % i == 0){
            alert('É par!');
            break;
        }

    }
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