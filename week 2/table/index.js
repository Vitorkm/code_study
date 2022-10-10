function addrow() {
    let nome = document.querySelector('#nome');
    let idade = document.querySelector('#idade');
    let sexo = document.getElementsByName('sexo').value;
    let tbody = document.getElementById('corpo');
    let row = document.createElement('tr');
    tbody.appendChild(row);
    linha = document.createElement('td');
    linha.value = nome;
    row.appendChild(linha);
    linha = document.createElement('td');
    linha.value = idade;
    row.appendChild(linha);
    linha = document.createElement('td');
    if (sexo == 1) {
        linha.value = "M";
        row.appendChild(linha);
    } else {
        linha.value = "F";
        row.appendChild(linha);
    }
    

}