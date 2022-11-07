function autofillhot() {
    let prefix = document.querySelector('#email').value;

    if (prefix.includes('@gmail.com')) {
        prefix = prefix.replace('@gmail.com', '@hotmail.com');
        document.querySelector('#email').value = prefix;
    }

    else if (prefix.includes('@hotmail.com')) {
        document.querySelector('#email').value = prefix;
    }

    else {
        prefix = prefix + '@hotmail.com';
        document.querySelector('#email').value = prefix;
    }  
}

function autofillg() {
    let prefix = document.querySelector('#email').value;

    if (prefix.includes('@hotmail.com')) {
        prefix = prefix.replace('@hotmail.com', '@gmail.com');
        document.querySelector('#email').value = prefix;
    }

    else if (prefix.includes('@gmail.com')) {
        document.querySelector('#email').value = prefix;
    }

    else {
        prefix = prefix + '@gmail.com';
        document.querySelector('#email').value = prefix;
    }
}

function togglepassword() {
    let text = document.querySelector('#senha');
    let tipo = text.getAttribute('type');

    text.setAttribute('type', tipo === 'password' ? 'text' : 'password');
}

function dropdownlist() {
    let min = 1922;
    let max = 2022;
    let select = document.querySelector('select');
    let opti = document.getElementById("ano").options.length;

    if (opti > 2) {
        return;
    } else {
        for (i = min; i <= max; i++) {
            opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            select.appendChild(opt);
        }
    }
}

function image() {
    let img_r = document.querySelector('#certo');
    let img_w = document.querySelector('#errado');
    let nascimento = document.querySelector('#ano').value;
    let currentYear = new Date().getFullYear();
    let botao = document.querySelector('button');

    if ((currentYear - nascimento) >= 18) {
        img_r.style.display = "inline";
        img_w.style.display = "none";
        botao.disabled = false;
    } else {
        img_r.style.display = "none";
        img_w.style.display = "inline";
        botao.disabled = true;
        }
}

function check() {
    let first_pw = document.querySelector('#senha').value;
    let second_pw = document.querySelector('#confirmapw').value;

    if ((first_pw == "") || (second_pw == "")) {
        alert('Preencha todos os campos de senha!');
    } else if (first_pw != second_pw) {
        alert('As senhas não coincidem!');
    }
    else {
        alert('Cadastro Concluído!');
    }
}