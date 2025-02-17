function saveData() {
    // Salvando valores dos inputs PD e PE no localStorage
    const pdAndPeInputs = [
        'PD_halux', 'PD_2', 'PD_3', 'PD_4', 'PD_5',
        'PE_halux', 'PE_2', 'PE_3', 'PE_4', 'PE_5'
    ];

    pdAndPeInputs.forEach(inputName => {
        const checkedInput = document.querySelector(`input[name="${inputName}"]:checked`);
        if (checkedInput) {
            localStorage.setItem(inputName, checkedInput.value);
        }
    });

    // Salvando valor de 'outras_alteracoes' caso tenha um valor preenchido
    const outrasAlteracoesInput = document.getElementById('outras_alteracoes');
    if (outrasAlteracoesInput && outrasAlteracoesInput.value) {
        localStorage.setItem('outras_alteracoes', outrasAlteracoesInput.value);
    }

    // Lista de inputs para os dados das unhas
    const inputs = [
        'Onicoatrofia', 'Onicocriptose', 'Onicorrexe', 'Granuloma',
        'Onicogrifose', 'Onicolise', 'Onicofose', 'Psoriase_ungueal', 'Onicomicose'
    ];

    const formData = {};

    // Coletando os dados dos inputs do formulário
    inputs.forEach(inputName => {
        const selectedInput = document.querySelector(`input[name="${inputName}"]:checked`);
        formData[inputName] = selectedInput ? (selectedInput.value === 'true' ? 1 : 0) : 0;
        localStorage.setItem(inputName, formData[inputName]);
    });

    // Obtendo o id_cliente do localStorage e adicionando ao formData
    const id_cliente = localStorage.getItem('id_cliente');
    if (id_cliente) {
        formData.id_cliente = id_cliente;
    } else {
        alert('ID do cliente não encontrado!');
    }

    // Enviar para o backend
    fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Recuperando e preenchendo os dados do localStorage no formulário
    const pdAndPeInputs = [
        'PD_halux', 'PD_2', 'PD_3', 'PD_4', 'PD_5',
        'PE_halux', 'PE_2', 'PE_3', 'PE_4', 'PE_5'
    ];

    pdAndPeInputs.forEach(inputName => {
        const savedValue = localStorage.getItem(inputName);
        if (savedValue) {
            document.querySelector(`input[name="${inputName}"][value="${savedValue}"]`).checked = true;
        }
    });

    const outrasAlteracoes = localStorage.getItem('outras_alteracoes');
    if (outrasAlteracoes) {
        document.getElementById('outras_alteracoes').value = outrasAlteracoes;
    }

    const inputs = [
        'Onicoatrofia', 'Onicocriptose', 'Onicorrexe', 'Granuloma',
        'Onicogrifose', 'Onicolise', 'Onicofose', 'Psoriase_ungueal', 'Onicomicose'
    ];

    inputs.forEach(inputName => {
        const savedValue = localStorage.getItem(inputName);
        if (savedValue !== null) {
            document.querySelector(`input[name="${inputName}"][value="${savedValue}"]`).checked = true;
        }
    });

    const id_cliente = localStorage.getItem('id_cliente');
    if (id_cliente) {
        document.getElementById('id_cliente').value = id_cliente;
    } else {
        alert('ID do cliente não encontrado no localStorage!');
    }
});
