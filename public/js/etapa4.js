function saveData() {
    const inputs = [
        { name: 'Tipo_Pisada', key: 'Tipo_pisada' },
        { name: 'Tipo_Marcha', key: 'Tipo_Marcha' },
        { name: 'Tipo_Joelho', key: 'Tipo_Joelho' },
        { name: 'Articulacao', key: 'Articulacao' },
        { name: 'Sensibilidade_Dor', key: 'Sensibilidade_Dor' },
        { name: 'Flexivel_E', key: 'Flexivel_E' },
        { name: 'Flexivel_D', key: 'Flexivel_D' },
        { name: 'Rigido_E', key: 'Rigido_E' },
        { name: 'Rigido_D', key: 'Rigido_D' },
        { name: 'Espalmado_E', key: 'Espalmado_E' },
        { name: 'Espalmado_D', key: 'Espalmado_D' },
        { name: 'Martelo_E', key: 'Martelo_E' },
        { name: 'Martelo_D', key: 'Martelo_D' },
        { name: 'Queda_Metatarso_E', key: 'Queda_Metatarso_E' },
        { name: 'Queda_Metatarso_D', key: 'Queda_Metatarso_D' },
        { name: 'Marcha_Descricao', key: 'Marcha_Descricao' }
    ];

    const formData = {};

    inputs.forEach(input => {
        const selectedInput = document.querySelector(`input[name="${input.name}"]:checked`) || document.querySelector(`input[name="${input.name}"]`);

        if (selectedInput) {
            if (input.key.includes('Flexivel') || input.key.includes('Rigido') || input.key.includes('Espalmado') || input.key.includes('Martelo') || input.key.includes('Queda_Metatarso')) {
                formData[input.key] = selectedInput.value === 'true';
            } else {
                formData[input.key] = selectedInput.value;
            }
        } else {
            if (input.key.includes('Flexivel') || input.key.includes('Rigido') || input.key.includes('Espalmado') || input.key.includes('Martelo') || input.key.includes('Queda_Metatarso')) {
                formData[input.key] = false;
            } else {
                formData[input.key] = null;
            }
        }

        localStorage.setItem(input.key, JSON.stringify(formData[input.key]));
    });
}

function submitForm() {
    const inputs = [
        "Tipo_pisada", "Tipo_Marcha", "Tipo_Joelho", "Articulacao",
        "Sensibilidade_Dor", "Flexivel_E", "Flexivel_D", "Rigido_E", 
        "Rigido_D", "Espalmado_E", "Espalmado_D", "Martelo_E", "Martelo_D",
        "Queda_Metatarso_E", "Queda_Metatarso_D", "Marcha_Descricao"
    ];

    const data = {};

    inputs.forEach(key => {
        data[key] = JSON.parse(localStorage.getItem(key));
    });

    console.log("Dados enviados para o backend:", data);

    fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Dados salvos com sucesso!');
        console.log(data);
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
