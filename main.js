const nome = [];
const sobrenome = [];
const telefone = [];
let linhaTab = '';

addEventListener('submit', function(e) {
    e.preventDefault();

    addLinhaTab();
    attTab();
});

function addLinhaTab() {
    const inputFirstN = document.getElementById('input-nome');
    const inputLastN = document.getElementById('input-sobrenome');
    const inputTel = document.getElementById('input-telefone');

        if((telefone.includes(inputTel.value))) {
        alert(`Dados já inseridos. Por favor consulte a lista para encontrar o nome.`)
        } else {
        nome.push(inputFirstN.value);
        sobrenome.push(inputLastN.value);
        telefone.push(inputTel.value);

        let linhaCont = '<tr>';
        linhaCont += `<td>${inputFirstN.value}</td>`;
        linhaCont += `<td>${inputLastN.value}</td>`;
        linhaCont += `<td>${inputTel.value}</td>`;
        linhaCont += '</tr>';
        
        linhaTab += linhaCont;
        };
        
        inputFirstN.value = '';
        inputLastN.value = '';
        inputTel.value = '';
};

function attTab() {
    const tBody = document.querySelector('tbody')
    tBody.innerHTML = linhaTab;
};
