function saveData() {
    // Salvando os dados da ETAPA2
    if (document.getElementById('id_cliente')) {
        const id_cliente = document.getElementById('id_cliente').value;
        if (id_cliente) {
            sessionStorage.setItem('id_cliente', id_cliente);
        } else {
            console.error('ID do cliente não encontrado.');
        }
    }

    // Salvando os outros dados
    const fields = [
        'queixa_principal', 'frequenta_podologo', 'frequencia_visita_podologo', 
        'uso_medicamento', 'tipo_medicamento', 'alergico', 'alergia_substancia', 
        'posicao_trabalho', 'duracao_trabalho', 'tempo_em_pe', 'tempo_sentado', 
        'tempo_caminhando', 'numero_calcado', 'tipo_calcado_diario', 
        'tipo_calcado_qual', 'fumante', 'menstruacao', 'gestante', 'amamentando', 
        'dum', 'pratica_atividade_fisica', 'frequencia_atividade_fisica', 
        'esporte_atividade', 'tipo_calcado_esporte'
    ];

    fields.forEach(field => {
        const element = document.getElementById(field) || document.querySelector(`input[name="${field}"]:checked`);
        if (element) {
            const value = element.value;
            if (value) {
                sessionStorage.setItem(field, value);
            } else {
                console.warn(`Campo ${field} não preenchido.`);
            }
        }
    });
}

// Enviar os dados da ETAPA2 para o backend
function submitForm() {
    const data = {
        id_cliente: sessionStorage.getItem('id_cliente'),
        queixa_principal: sessionStorage.getItem('queixa_principal'),
        frequenta_podologo: sessionStorage.getItem('frequenta_podologo'),
        frequencia_visita_podologo: sessionStorage.getItem('frequencia_visita_podologo'),
        uso_medicamento: sessionStorage.getItem('uso_medicamento'),
        tipo_medicamento: sessionStorage.getItem('tipo_medicamento'),
        alergico: sessionStorage.getItem('alergico'),
        alergia_substancia: sessionStorage.getItem('alergia_substancia'),
        posicao_trabalho: sessionStorage.getItem('posicao_trabalho'),
        duracao_trabalho: sessionStorage.getItem('duracao_trabalho'),
        tempo_em_pe: sessionStorage.getItem('tempo_em_pe'),
        tempo_sentado: sessionStorage.getItem('tempo_sentado'),
        tempo_caminhando: sessionStorage.getItem('tempo_caminhando'),
        numero_calcado: sessionStorage.getItem('numero_calcado'),
        tipo_calcado_diario: sessionStorage.getItem('tipo_calcado_diario'),
        tipo_calcado_qual: sessionStorage.getItem('tipo_calcado_qual'),
        fumante: sessionStorage.getItem('fumante'),
        menstruacao: sessionStorage.getItem('menstruacao'),
        gestante: sessionStorage.getItem('gestante'),
        amamentando: sessionStorage.getItem('amamentando'),
        dum: sessionStorage.getItem('dum'),
        praticaAtividadeFisica: sessionStorage.getItem('pratica_atividade_fisica'),
        frequenciaAtividadeFisica: sessionStorage.getItem('frequencia_atividade_fisica'),
        esporteAtividade: sessionStorage.getItem('esporte_atividade'),
        tipoCalcadoEsporte: sessionStorage.getItem('tipo_calcado_esporte')
    };

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
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
    let nextPage = '';
 
    if (window.location.pathname.includes('etapa1')) {
        nextPage = '/etapa2';
    } else if (window.location.pathname.includes('etapa2')) {
        nextPage = '/etapa3';
    } else if (window.location.pathname.includes('etapa3')) {
        nextPage = '/etapa4';
    } else if (window.location.pathname.includes('etapa4')) {
        nextPage = '/etapa5';
    }
 
    if (nextPage) {
        window.location.href = nextPage;
    }
}

function previousStep() {
    saveData();
    let prevPage = '';
    if (window.location.pathname.includes('etapa3')) {
        prevPage = '/etapa2';
    } else if (window.location.pathname.includes('etapa2')) {
        prevPage = '/etapa1';
    }
    if (prevPage) {
        window.location.href = prevPage;
    }
}

if (window.location.pathname.includes('etapa7')) {
    showResumo();
}

document.addEventListener('DOMContentLoaded', function () {
    const id_cliente = sessionStorage.getItem('id_cliente') || localStorage.getItem('id_cliente');
    if (id_cliente) {
        document.getElementById('id_cliente').value = id_cliente;
    }
});