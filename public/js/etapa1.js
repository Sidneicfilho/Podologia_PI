document.getElementById('form_etapa1').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio tradicional do formulário

    // Captura os valores dos campos
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const endereco = document.querySelector('input[name="endereco"]').value;
    const bairro = document.querySelector('input[name="bairro"]').value;
    const cidade = document.querySelector('input[name="cidade"]').value;
    const estado = document.querySelector('input[name="estado"]').value;
    const cep = document.querySelector('input[name="cep"]').value;
    const tel_res = document.querySelector('input[name="tel_res"]').value;
    const telefone = document.querySelector('input[name="telefone"]').value;
    const tel_emergencia = document.querySelector('input[name="tel_emergencia"]').value;
    const contato = document.querySelector('input[name="contato"]').value;
    const data_nascimento = document.querySelector('input[name="data_nascimento"]').value;
    const profissao = document.querySelector('input[name="profissao"]').value;
    const sexo = document.querySelector('input[name="sexo"]').value;

    // Validação dos campos obrigatórios
    if (!nome || !email || !endereco || !bairro || !cidade || !estado || !cep || !tel_res || !telefone || !tel_emergencia || !contato || !data_nascimento || !profissao || !sexo) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Validação adicional (exemplo: formato de e-mail)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Envia os dados para o backend
    submitForm(nome, email, endereco, bairro, cidade, estado, cep, tel_res, telefone, tel_emergencia, contato, data_nascimento, profissao, sexo);
});

function submitForm(nome, email, endereco, bairro, cidade, estado, cep, tel_res, telefone, tel_emergencia, contato, data_nascimento, profissao, sexo) {
    // Envia os dados para o backend
    fetch('/submit-etapa1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome,
            email,
            endereco,
            bairro,
            cidade,
            estado,
            cep,
            tel_res,
            telefone,
            tel_emergencia,
            contato,
            data_nascimento,
            profissao,
            sexo
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar os dados.');
        }
        return response.json();
    })
    .then(data => {
        // Armazena o id_cliente e outros dados no sessionStorage
        sessionStorage.setItem('id_cliente', data.id_cliente);
        sessionStorage.setItem('nome', nome);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('endereco', endereco);
        sessionStorage.setItem('bairro', bairro);
        sessionStorage.setItem('cidade', cidade);
        sessionStorage.setItem('estado', estado);
        sessionStorage.setItem('cep', cep);
        sessionStorage.setItem('tel_res', tel_res);
        sessionStorage.setItem('telefone', telefone);
        sessionStorage.setItem('tel_emergencia', tel_emergencia);
        sessionStorage.setItem('contato', contato);
        sessionStorage.setItem('data_nascimento', data_nascimento);
        sessionStorage.setItem('profissao', profissao);
        sessionStorage.setItem('sexo', sexo);

        alert('Dados da Etapa1 salvos com sucesso!');
        console.log('ID do cliente:', data.id_cliente);
    })
    .catch(error => {
        alert('Erro ao enviar os dados! Por favor, tente novamente.');
        console.error('Erro:', error);
    });
}

// Função para avançar para a próxima etapa
function nextStep() {
    const idCliente = sessionStorage.getItem('id_cliente');
    if (!idCliente) {
        alert('Por favor, complete a etapa atual antes de prosseguir.');
        return;
    }

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

function showResumo() {
    const campos = [
        'nome', 'email', 'endereco', 'bairro', 'cidade', 'estado', 'cep',
        'tel_res', 'telefone', 'tel_emergencia', 'contato',
        'data_nascimento', 'profissao', 'sexo'
    ];

    let resumoHtml = "<h3>Dados Pessoais</h3>";

    if (campos.every(campo => !sessionStorage.getItem(campo))) {
        resumoHtml = "<p>Nenhum dado foi preenchido ainda.</p>";
    } else {
        campos.forEach(campo => {
            const valor = sessionStorage.getItem(campo) || "Não informado";
            const label = {
                nome: "Nome", email: "Email", endereco: "Endereço", bairro: "Bairro",
                cidade: "Cidade", estado: "Estado", cep: "CEP",
                tel_res: "Tel. Residencial", telefone: "Celular",
                tel_emergencia: "Tel. Emergência", contato: "Contato adicional",
                data_nascimento: "Data de Nascimento", profissao: "Profissão", sexo: "Sexo"
            }[campo];

            resumoHtml += `<p><strong>${label}:</strong> ${valor}</p>`;
        });
    }

    const resumoDiv = document.getElementById('resumo');
    if (resumoDiv) {
        resumoDiv.innerHTML = resumoHtml;
    }
}

document.addEventListener('DOMContentLoaded', showResumo);

