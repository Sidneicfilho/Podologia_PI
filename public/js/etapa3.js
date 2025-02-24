
function saveData() {
    // Lista de campos booleanos
    const booleanFields = [
        "Osteoporose", "Renal", "Epilepsia", "Quimioterapia_Radioterapia", 
        "Hipotireoidismo", "Hepatite", "Antecedente_Oncologico", "Cardiopatia", 
        "Hipertensao", "Reumatismo", "Hanseniase", "Cirurgia_MMII", "Marca_Passo", 
        "Hipotensao","Alteracoes_Vasculares"
    ];

    // Lista dos campos a serem salvos
    const inputs = [
       "Insulina", "Dieta_Hidrica", "Dieta_Alimentar", 
        , "Taxa_Glicemica", "Tipo_Insulina"
    ];

    const formData = {};

    // Preenche o formData e salva no localStorage
    inputs.forEach(inputName => {
        const selectedInput = document.querySelector(`input[name="${inputName}"]:checked`);
        if (selectedInput) {
            if (inputName === 'Insulina') {
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

function nextStep() {
    saveData();
    submitForm();

    const steps = ['etapa1', 'etapa2', 'etapa3', 'etapa4', 'etapa5'];
    const currentStep = steps.find(step => window.location.pathname.includes(step));

    if (currentStep) {
        const nextIndex = steps.indexOf(currentStep) + 1;
        if (nextIndex < steps.length) {
            window.location.href = `/${steps[nextIndex]}`;
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const id_cliente = localStorage.getItem('id_cliente');
    if (id_cliente && document.getElementById('id_cliente')) {
        document.getElementById('id_cliente').value = id_cliente;
    }
});
