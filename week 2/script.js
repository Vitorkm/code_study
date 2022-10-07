// let nome = "Fernando";
// let idade = 22;
// let casado = false;
// let pais = ['roberta', 'mauro']
// let endereco = {
//     "rua": "rua dos chernes",
//     "numero": 45
// };
// let a = 3;
// let b = '3';

// console.log(a <= b);
// and &&
// or ||
// not !

// let idade = 17;
// if (idade >= 18 && idade <= 65) {
//     console.log("Voce deve votar");
// } else if (idade >= 16) {
//     console.log("Voce pode votar");
// } else {
//     console.log("Voce nao pode votar")
// }

// let x = 3
// while (x < 10) {
//     console.log("VKM")
//     x++; // x = x + 1
//     break;
// }

// let impares = [1, 3, 'VKM', 7, 9]
// for (let i = 0; i < impares.length; i++) {
//     console.log(impares[i]);
// }

// function funcaoExemplo() {
//     for (let i = 0; i < 5; i++){
//     console.log('VKM');
//     }
// } 

// funcaoExemplo();

// const funcaoExemplo = () => {
//     for (let i = 0; i < 5; i++){
//         console.log('VKM');
//     }
// }

// funcaoExemplo();

// function funcaoExemplo() {
//     console.log("VKM");
// }

function funcaoExemplo() {
    let container = document.querySelector('#container');
    let numInput = document.querySelector('#num').value;
    let list = document.createElement('ul');
    
    for (let i = 1; i <= numInput; i++) {
        let item = document.createElement('li');
        item.textContent = `Item ${i}`;
        list.appendChild(item);
    }
    container.appendChild(list);
    // let paragraph = document.createElement('p');
    // paragraph.textContent = 'Vitor Kretiska Medeiros';
    // container.appendChild(paragraph);
    // let buttonElement = document.querySelector('button');
    // console.log(nameInput.value);
    // nameInput.disabled = true;
    // nameInput.type = 'password';
    // title.style.backgroundColor = 'red'; // background-color
    // title.style.fontSize = '50px';
    // title.style.display = 'none';
    // buttonElement.textContent = 'Vitor';

}