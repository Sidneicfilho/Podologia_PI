document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form_etapa");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita o envio tradicional do formulário

            // Captura os valores dos campos
            const campos = [
                "nome", "email", "endereco", "bairro", "cidade", "estado", "cep",
                "tel_res", "telefone", "tel_emergencia", "contato",
                "data_nascimento", "profissao", "sexo"
            ];

            let formData = {};
            let preenchido = true;

            campos.forEach(campo => {
                const valor = document.querySelector(`input[name="${campo}"]`)?.value.trim();
                if (!valor) preenchido = false;
                formData[campo] = valor || "Não informado";
            });

            if (!preenchido) {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return;
            }

            // Validação de e-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert("Por favor, insira um e-mail válido.");
                return;
            }

            // Envia os dados para o backend
            submitForm(formData);
        });
    }

    function submitForm(formData) {
        fetch("/submit-etapa", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao enviar os dados.");
                }
                return response.json();
            })
            .then(data => {
                // Armazena os dados no sessionStorage
                sessionStorage.setItem("id_cliente", data.id_cliente);
                Object.keys(formData).forEach(key => {
                    sessionStorage.setItem(key, formData[key]);
                });

                alert("Dados salvos com sucesso!");
                console.log("ID do cliente:", data.id_cliente);
                nextStep();
            })
            .catch(error => {
                alert("Erro ao enviar os dados! Por favor, tente novamente.");
                console.error("Erro:", error);
            });
    }

    function nextStep() {
        const idCliente = sessionStorage.getItem("id_cliente");
        if (!idCliente) {
            alert("Por favor, complete a etapa atual antes de prosseguir.");
            return;
        }

        let etapas = ["/etapa1", "/etapa2", "/etapa3", "/etapa4", "/etapa5", "/etapa6", "/etapa7"];
        let currentPath = window.location.pathname;
        let nextPage = "";

        for (let i = 0; i < etapas.length; i++) {
            if (currentPath.includes(etapas[i]) && i < etapas.length - 1) {
                nextPage = etapas[i + 1];
                break;
            }
        }

        if (nextPage) {
            window.location.href = nextPage;
        }
    }

    function showResumo() {
        const campos = [
            "nome", "email", "endereco", "bairro", "cidade", "estado", "cep",
            "tel_res", "telefone", "tel_emergencia", "contato",
            "data_nascimento", "profissao", "sexo"
        ];

        let resumoHtml = "<h3>Resumo dos Dados</h3>";

        if (campos.every(campo => !sessionStorage.getItem(campo))) {
            resumoHtml = "<p>Nenhum dado foi preenchido ainda.</p>";
        } else {
            campos.forEach(campo => {
                const valor = sessionStorage.getItem(campo) || "Não informado";
                const label = {
                    nome: "Nome", email: "E-mail", endereco: "Endereço", bairro: "Bairro",
                    cidade: "Cidade", estado: "Estado", cep: "CEP",
                    tel_res: "Tel. Residencial", telefone: "Celular",
                    tel_emergencia: "Tel. Emergência", contato: "Contato adicional",
                    data_nascimento: "Data de Nascimento", profissao: "Profissão", sexo: "Sexo"
                }[campo];

                resumoHtml += `<p><strong>${label}:</strong> ${valor}</p>`;
            });
        }

        const resumoDiv = document.getElementById("resumo");
        if (resumoDiv) {
            resumoDiv.innerHTML = resumoHtml;
        }
    }

    showResumo();
});
