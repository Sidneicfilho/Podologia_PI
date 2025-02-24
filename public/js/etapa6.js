function saveData() {
    // Lista de campos booleanos
    const booleanFields = [
        'bromidrose', 'hidrose', 'desidrose', 'isquemia', 'mal_perfurante', 'edema',
        'tinea', 'psoriase', 'tungiase', 'fissuras', 'verruga_plantar', 'calo_dorsal', 'querotose',
        'calo_plantar', 'hiperqueratose', 'calo_interdigital'
    ];

    // Lista dos campos a serem salvos
    const inputs = [
        'bromidrose', 'hidrose', 'desidrose', 'isquemia', 'mal_perfurante', 'edema',
        'tinea', 'psoriase', 'tungiase', 'fissuras', 'verruga_plantar', 'calo_dorsal', 'querotose',
        'calo_plantar', 'hiperqueratose', 'calo_interdigital', 'outras_alteracoes', 'comentarios', 'teve_erisipela',
        'perfusao_PD', 'perfusao_PE'
    ];

    const formData = {};

    // Preenche o formData e salva no localStorage
    inputs.forEach(inputName => {
        const selectedInput = document.querySelector(`input[name="${inputName}"]:checked`);
        if (selectedInput) {
            if (inputName === 'teve_erisipela') {
                formData[inputName] = selectedInput.value; // Armazena 'Sim' ou 'Não'
            } else if (booleanFields.includes(inputName)) {
                formData[inputName] = selectedInput.value === 'true' ? 1 : 0; // Converte para 1 ou 0
            } else {
                formData[inputName] = selectedInput.value;
            }
            localStorage.setItem(inputName, formData[inputName]);
        } else {
            if (booleanFields.includes(inputName)) {
                formData[inputName] = 0;
                localStorage.setItem(inputName, 0);
            } else {
                const textInput = document.getElementById(inputName);
                if (textInput && textInput.value) {
                    formData[inputName] = textInput.value;
                    localStorage.setItem(inputName, textInput.value);
                } else {
                    formData[inputName] = null;
                    localStorage.removeItem(inputName);
                }
            }
        }
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
        alert('Dados salvos com sucesso!');
        console.log('Sucesso:', data);
    })
    .catch(error => {
        alert('Erro ao salvar os dados!');
        console.error('Erro:', error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Recuperando os valores salvos no localStorage e preenchendo o formulário
    const inputs = [
        'bromidrose', 'hidrose', 'desidrose', 'isquemia', 'mal_perfurante', 'edema',
        'tinea', 'psoriase', 'tungiase', 'verruga_plantar', 'calo_dorsal', 'querotose',
        'calo_plantar', 'hiperqueratose', 'calo_interdigital', 'outras_alteracoes', 'comentarios', 'teve_erisipela'
    ];

    inputs.forEach(inputName => {
        const savedValue = localStorage.getItem(inputName);
        if (savedValue !== null) {
            const inputElement = document.querySelector(`input[name="${inputName}"][value="${savedValue}"]`);
            if (inputElement) {
                inputElement.checked = true;
            } else {
                const textInput = document.getElementById(inputName);
                if (textInput) {
                    textInput.value = savedValue;
                }
            }
        }
    });

    // Recupera e preenche o id_cliente
    const id_cliente = localStorage.getItem('id_cliente');
    if (id_cliente) {
        document.getElementById('id_cliente').value = id_cliente;
    } else {
        alert('ID do cliente não encontrado no localStorage!');
    }
});
