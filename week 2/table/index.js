function addrow() {
    let nome = document.querySelector('#nome').value;
    let idade = document.querySelector('#idade').value;
    var sexo = document.getElementsByName('sexo');
    let tbody = document.getElementById('corpo');
    let row = document.createElement('tr');
    tbody.appendChild(row);
    let linha = document.createElement('td');
    linha.textContent = nome;
    row.appendChild(linha);
    linha = document.createElement('td');
    linha.textContent = idade;
    row.appendChild(linha);
    linha = document.createElement('td');
    if (sexo[0].checked) {
        linha.textContent = "M";
        row.appendChild(linha);
    } else {
        linha.textContent = "F";
        row.appendChild(linha);
    }
    

}