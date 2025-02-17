function saveData() {
    const fields = [
        "Osteoporose", "Renal", "Epilepsia", "Quimioterapia_Radioterapia", 
        "Hipotireoidismo", "Hepatite", "Antecedente_Oncologico", "Cardiopatia", 
        "Hipertensao", "Reumatismo", "Hanseniase", "Cirurgia_MMII", "Marca_Passo", 
        "Hipotensao", "Insulina", "Dieta_Hidrica", "Injetavel", "Dieta_Alimentar", 
        "Via_Oral", "Taxa_Glicemica", "Alteracoes_Vasculares"
    ];

    fields.forEach(field => {
        const input = document.querySelector(`input[name="${field}"]:checked`) || document.querySelector(`input[name="${field}"]`);
        if (input) {
            localStorage.setItem(field, input.value);
        }
    });
}

function submitForm() {
    const data = {};
    const fields = [
        "Osteoporose", "Renal", "Epilepsia", "Quimioterapia_Radioterapia", 
        "Hipotireoidismo", "Hepatite", "Antecedente_Oncologico", "Cardiopatia", 
        "Hipertensao", "Reumatismo", "Hanseniase", "Cirurgia_MMII", "Marca_Passo", 
        "Hipotensao", "Insulina", "Dieta_Hidrica", "Injetavel", "Dieta_Alimentar", 
        "Via_Oral", "Taxa_Glicemica", "Alteracoes_Vasculares"
    ];

    fields.forEach(field => {
        data[field] = localStorage.getItem(field);
    });

    fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Formulário enviado com sucesso!');
        console.log(data);
    })
    .catch(error => {
        alert('Erro ao enviar os dados!');
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
