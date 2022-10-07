var num = Math.floor(Math.random() * 100);
function game() {
    
    document.querySelector('#number').disabled = false;
    document.querySelector('#check').disabled = false;
}
var i = 0;
function game2() {
    let numInput = document.querySelector('#number');
    while (num != numInput) {
        
        if (num > numInput) {
            alert('O número pensado é maior que esse');
            return;
        }

        if (num < numInput) {
            alert('O número pensado é menor que esse');
            return;
        }
        i++;
    }
    alert(`Acertou em ${i} vezes`);
}