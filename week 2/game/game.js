var i = 1;
var num = 0;

function game() {
    
    document.querySelector('#number').disabled = false;
    document.querySelector('#check').disabled = false;
    num = Math.floor(Math.random() * 100);
    
}


function game2() {
    let numInput = document.querySelector('#number').value;
    console.log(num);

    while (num != numInput) {

        if (num > numInput) {
            alert('O número pensado é maior que esse');
            i++;
            break;
        }

        if (num < numInput) {
            alert('O número pensado é menor que esse');
            i++;
            break;
        }

    }
    if (num == numInput) {
        alert(`Parabéns você acertou em ${i} vezes`);
        document.querySelector('#number').disabled = true;
        document.querySelector('#check').disabled = true;
        document.querySelector('#number').value = '';
        return;
    }
    
}