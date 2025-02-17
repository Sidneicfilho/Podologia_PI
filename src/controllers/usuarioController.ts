// src/controllers/usuarioController.ts
import { Request, Response } from 'express';
import { Etapa1 } from '../models/Etapa1';
import { Etapa2 } from '../models/etapa2';
import { Etapa3 } from '../models/etapa3';
import { Etapa4 } from '../models/etapa4';
import { Etapa5 } from '../models/etapa5';
import { Etapa6 } from '../models/etapa6';
import { v4 as uuidv4 } from 'uuid';


let formData: {
    id_cliente?: number;
    nome?: string;
    endereco?: string; 
    bairro?: string; 
    cidade?: string; 
    estado?: string; 
    cep?: string; 
    tel_res?: string; 
    telefone?: string; 
    tel_emergencia?: string; 
    data_nascimento?: Date; 
    sexo?: string; 
    profissao?: string; 
    email?: string; 
    contato?: string;
 } = {};

let formData2: {
    id_cliente?: number;
    queixa_principal?: string;
    frequenta_podologo?: 'Sim' | 'Não';
    frequencia_visita_podologo?: string;
    uso_medicamento?: 'Sim' | 'Não';
    tipo_medicamento?: string;
    alergico?: 'Sim' | 'Não';
    alergia_substancia?: string;
    posicao_trabalho?: 'Em pé' | 'Sentado' | 'Andando';
    duracao_trabalho?: string;
    tempo_em_pe?: 'Sim' | 'Não';
    tempo_sentado?: 'Sim' | 'Não';
    tempo_caminhando?: 'Sim' | 'Não';
    numero_calcado?: string;
    tipo_calcado_diario?: 'Chinelo' | 'Tênis' | 'Outro';
    tipo_calcado_qual?: 'Ortopédico' | 'Descanso' | 'Outro';
    fumante?: 'Sim' | 'Não';
    menstruacao?: 'Sim' | 'Não';
    gestante?: 'Sim' | 'Não';
    amamentando?: 'Sim' | 'Não';
    dum?: Date;
    pratica_atividade_fisica?: 'Sim' | 'Não';
    frequencia_atividade_fisica?: string;
    esporte_atividade?: string;
    tipo_calcado_esporte?: string;
} = {};

let formData3: {
    id_cliente?: number;
    Osteoporose?: boolean;
    Renal?: boolean;
    Epilepsia?: boolean;
    Quimioterapia_Radioterapia?: boolean;
    Hipotiroidismo?: boolean;
    Antecedente_Oncologico?: boolean;
    Hepatite?: boolean;
    Cardiopatia?: boolean;
    Hipotensao?: boolean;
    Reumatismo?: boolean;
    Hanseniase?: boolean;
    Cirurgia_MMII?: boolean;
    Marca_Passo?: boolean;
    Hipertensao?: string;
    Insulina?: string;
    Dieta_Hidrica?: string;
    Injetavel?: boolean;
    Dieta_Alimentar?: boolean;
    Via_Oral?: boolean;
    Taxa_Glicemica?: string;
    Alteracoes_Vasculares?: boolean;
} = {};


let formData4: {
    id_cliente?: number;
    Tipo_Pisada?: string[];
    Flexivel_D?: boolean;
    Flexivel_E?: boolean;
    Rigido_E?: boolean;
    Rigido_D?: boolean;
    Espalmado_D?: boolean;
    Espalmado_E?: boolean;
    Martelo_E?: boolean;
    Martelo_D?: boolean;
    Queda_Metatarso_E?: boolean;
    Queda_Metatarso_D?: boolean;
    Tipo_Marcha?: string;
    Joelho?: string;
    Articulacao?: string;
    Sensibilidade_Dor?: string;
    Marcha_Descricao?: string;
} = {};

let formData5: {
    id_cliente?: number;
    PD_halux?: 'Normal' | 'Involuído' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PD_2?: 'Normal' | 'Involuído' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PD_3?: 'Normal' | 'Involuído' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PD_4?: 'Normal' | 'Involuído' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PD_5?: 'Normal' | 'Involuído' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PE_halux?: 'Normal' | 'Involuído' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PE_2?: 'Normal' | 'Involuído' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PE_3?: 'Normal' | 'Involuído' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PE_4?: 'Normal' | 'Involuído' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PE_5?: 'Normal' | 'Involuído' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    Onicoatrofia?: boolean;
    Onicocriptose?: boolean;
    Onicorrexe?: boolean;
    Granuloma?: boolean;
    Onicogrifose?: boolean;
    Onicolise?: boolean;
    Onicofose?: boolean;
    Psoriase_ungueal?: boolean;
    Onicomicose?: boolean;
    outras_alteracoes?: string;
} = {};

let formData6: {
    id_cliente?: number;
    bromidrose?: boolean;
    hidrose?: boolean;
    desidrose?: boolean;
    isquemia?: boolean;
    mal_perfurante?: boolean;
    edema?: boolean;
    tinea?: boolean;
    psoriase?: boolean;
    tungiase?: boolean;
    verruga_plantar?: boolean;
    calo_dorsal?: boolean;
    querotose?: boolean;
    calo_plantar?: boolean;
    hiperqueratose?: boolean;
    calo_interdigital?: boolean;
    perfusao_PD?: 'Normal' | 'Pálido' | 'Cianótico';
    perfusao_PE?: 'Normal' | 'Pálido' | 'Cianótico';
    teve_erisipela?: 'Sim' | 'Não';
    outras_alteracoes?: string;
    comentarios?: string;
} = {};



export const etapa1 = async (req: Request, res: Response) => {
    try {
        // Busca o último cliente do banco de dados
        const ultimoCliente = await Etapa1.findOne({
            order: [['id_cliente', 'DESC']]
        });
        
        // Se não existir nenhum cliente, começa do 1
        // Se existir, incrementa 1 ao último ID
        const id_cliente = ultimoCliente ? Number(ultimoCliente.id_cliente) + 1 : 1;
        
        res.render('etapa1', { id_cliente });
    } catch (error) {
        console.error('Erro ao buscar último ID:', error);
        res.status(500).send('Erro ao gerar ID do cliente');
    }
};

// Função para processar o formulário
export const etapa1Post = (req: Request, res: Response) => {
    // Desestruturando os dados do formulário
    const { id_cliente, nome, endereco, bairro, cidade, estado, cep, tel_res, telefone, tel_emergencia, data_nascimento, sexo, profissao, email, contato } = req.body;

    // Verificando se o id_cliente foi enviado
    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário!");
        return;
    }

    // Armazenando o id_cliente na sessão
    req.session.id_cliente = id_cliente;

    // Verificando se o id_cliente foi armazenado corretamente
    console.log('ID Cliente armazenado na sessão:', req.session.id_cliente);

    // Inicializando formData com os dados do formulário
        formData.nome = nome;
        formData.endereco = endereco;
        formData.bairro = bairro;
        formData.cidade = cidade;
        formData.estado = estado;
        formData.cep = cep;
        formData.tel_res = tel_res;
        formData.telefone = telefone;
        formData.tel_emergencia = tel_emergencia;
        formData.data_nascimento = data_nascimento;
        formData.profissao = profissao;
        formData.sexo = sexo;
        formData.email = email;
        formData.contato = contato;
    

    // Redirecionando para a próxima etapa
    res.redirect('/etapa2');
};





export const etapa2 = (req: Request, res: Response) => {
    // Recuperar o id_cliente da sessão
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário para continuar!");
        return;
    }

    res.render('etapa2', { id_cliente });
};

export const etapa2Post = (req: Request, res: Response) => {
    // Recuperar o id_cliente da sessão
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário!");
        return;
    }

    // Preencher formData2
    formData2.id_cliente = id_cliente;
    formData2.queixa_principal = req.body.queixa_principal;
    formData2.frequenta_podologo = req.body.frequenta_podologo;
    formData2.frequencia_visita_podologo = req.body.frequencia_visita_podologo;
    formData2.uso_medicamento = req.body.uso_medicamento;
    formData2.tipo_medicamento = req.body.tipo_medicamento;
    formData2.alergico = req.body.alergico;
    formData2.alergia_substancia = req.body.alergia_substancia;
    formData2.posicao_trabalho = req.body.posicao_trabalho;
    formData2.duracao_trabalho = req.body.duracao_trabalho;
    formData2.tempo_em_pe = req.body.tempo_em_pe;
    formData2.tempo_sentado = req.body.tempo_sentado;
    formData2.tempo_caminhando = req.body.tempo_caminhando;
    formData2.numero_calcado = req.body.numero_calcado;
    formData2.tipo_calcado_diario = req.body.tipo_calcado_diario;
    formData2.tipo_calcado_qual = req.body.tipo_calcado_qual;
    formData2.fumante = req.body.fumante;
    formData2.menstruacao = req.body.menstruacao;
    formData2.gestante = req.body.gestante;
    formData2.amamentando = req.body.amamentando;
    formData2.dum = new Date(req.body.dum);
    formData2.pratica_atividade_fisica = req.body.pratica_atividade_fisica;
    formData2.frequencia_atividade_fisica = req.body.frequencia_atividade_fisica;
    formData2.esporte_atividade = req.body.esporte_atividade;
    formData2.tipo_calcado_esporte = req.body.tipo_calcado_esporte;

    // Redirecionar para a próxima etapa
    res.redirect('/etapa3');
};



export const etapa3 = (req: Request, res: Response) => {
    // Recuperar o id_cliente da sessão
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário para continuar!");
        return;
    }

    res.render('etapa3', { resumo: formData, id_cliente });
};

export const etapa3Post = (req: Request, res: Response) => {
    // Recuperar o id_cliente da sessão
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário!");
        return;
    }

    // Preencher formData3
    formData3.id_cliente = id_cliente;
    formData3.Osteoporose = req.body.Osteoporose;
    formData3.Renal = req.body.Renal;
    formData3.Epilepsia = req.body.Epilepsia;
    formData3.Quimioterapia_Radioterapia = req.body.Quimioterapia_Radioterapia;
    formData3.Hipotiroidismo = req.body.Hipotiroidismo;
    formData3.Hepatite = req.body.Hepatite;
    formData3.Antecedente_Oncologico = req.body.Antecedente_Oncologico;
    formData3.Cardiopatia = req.body.Cardiopatia;
    formData3.Hipertensao = req.body.Hipertensao;
    formData3.Reumatismo = req.body.Reumatismo;
    formData3.Hanseniase = req.body.Hanseniase;
    formData3.Cirurgia_MMII = req.body.Cirurgia_MMII;
    formData3.Marca_Passo = req.body.Marca_Passo;
    formData3.Hipotensao = req.body.Hipotensao;
    formData3.Insulina = req.body.Insulina;
    formData3.Dieta_Hidrica = req.body.Dieta_Hidrica;
    formData3.Injetavel = req.body.Injetavel;
    formData3.Dieta_Alimentar = req.body.Dieta_Alimentar;
    formData3.Via_Oral = req.body.Via_Oral;
    formData3.Taxa_Glicemica = req.body.Taxa_Glicemica;
    formData3.Alteracoes_Vasculares = req.body.Alteracoes_Vasculares;

    // Redirecionar para a próxima etapa
    res.redirect('/etapa4');
};

export const etapa4 = (req: Request, res: Response) => {
    // Recuperar o id_cliente da sessão
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário para continuar!");
        return;
    }

    res.render('etapa4', { resumo: formData, id_cliente });
};

export const etapa4Post = (req: Request, res: Response) => {
    // Recuperar o id_cliente da sessão
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário!");
        return;
    }

    // Preencher formData4
    formData4.id_cliente = id_cliente;
    formData4.Tipo_Pisada = req.body.Tipo_Pisada;
    formData4.Flexivel_D = req.body.Flexivel_D;
    formData4.Flexivel_E = req.body.Flexivel_E;
    formData4.Rigido_D = req.body.Rigido_D;
    formData4.Rigido_E = req.body.Rigido_E;
    formData4.Espalmado_D = req.body.Espalmado_D;
    formData4.Espalmado_E = req.body.Espalmado_E;
    formData4.Martelo_E = req.body.Martelo_E;
    formData4.Martelo_D = req.body.Martelo_D;
    formData4.Queda_Metatarso_D = req.body.Queda_Metatarso_D;
    formData4.Queda_Metatarso_E = req.body.Queda_Metatarso_E;
    formData4.Tipo_Marcha = req.body.Tipo_Marcha;
    formData4.Joelho = req.body.Joelho;
    formData4.Articulacao = req.body.Articulacao;
    formData4.Sensibilidade_Dor = req.body.Sensibilidade_Dor;
    formData4.Marcha_Descricao = req.body.Marcha_Descricao;

    // Redirecionar para a próxima etapa
    res.redirect('/etapa5');
};



export const etapa5 = (req: Request, res: Response) => {
    // Recuperar o id_cliente da sessão
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário para continuar!");
        return;
    }

    res.render('etapa5', { resumo: formData, id_cliente });
};

export const etapa5Post = async (req: Request, res: Response): Promise<void> => {
    // Recuperar o id_cliente da sessão
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário!");
        return;
    }

    // Preencher formData5
    formData5.id_cliente = id_cliente;
    formData5.PD_halux = req.body.PD_halux;
    formData5.PD_2 = req.body.PD_2;
    formData5.PD_3 = req.body.PD_3;
    formData5.PD_4 = req.body.PD_4;
    formData5.PD_5 = req.body.PD_5;
    formData5.PE_halux = req.body.PE_halux;
    formData5.PE_2 = req.body.PE_2;
    formData5.PE_3 = req.body.PE_3;
    formData5.PE_4 = req.body.PE_4;
    formData5.PE_5 = req.body.PE_5;
    formData5.Onicoatrofia = req.body.Onicoatrofia;
    formData5.Onicocriptose = req.body.Onicocriptose;
    formData5.Onicorrexe = req.body.Onicorrexe;
    formData5.Granuloma = req.body.Granuloma;
    formData5.Onicogrifose = req.body.Onicogrifose;
    formData5.Onicolise = req.body.Onicolise;
    formData5.Onicofose = req.body.Onicofose;
    formData5.Psoriase_ungueal = req.body.Psoriase_ungueal;
    formData5.Onicomicose = req.body.Onicomicose;
    formData5.outras_alteracoes = req.body.outras_alteracoes;

    // Redirecionar para a próxima etapa
    res.redirect('/etapa6');
};


export const etapa6 = (req: Request, res: Response) => {
    // Recuperar o id_cliente da sessão
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário para continuar!");
        return;
    }

    res.render('etapa6', { resumo: formData, id_cliente });
};

export const etapa6Post = (req: Request, res: Response) => {
    // Recuperar o id_cliente da sessão
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário!");
        return;
    }

    // Preencher formData6
    formData6.id_cliente = id_cliente;
    formData6.bromidrose = req.body.bromidrose;
    formData6.hidrose = req.body.hidrose;
    formData6.desidrose = req.body.desidrose;
    formData6.isquemia = req.body.isquemia;
    formData6.mal_perfurante = req.body.mal_perfurante;
    formData6.edema = req.body.edema;
    formData6.tinea = req.body.tinea;
    formData6.psoriase = req.body.psoriase;
    formData6.tungiase = req.body.tungiase;
    formData6.verruga_plantar = req.body.verruga_plantar;
    formData6.calo_dorsal = req.body.calo_dorsal;
    formData6.querotose = req.body.querotose;
    formData6.calo_plantar = req.body.calo_plantar;
    formData6.hiperqueratose = req.body.hiperqueratose;
    formData6.calo_interdigital = req.body.calo_interdigital;
    formData6.perfusao_PD = req.body.perfusao_PD;
    formData6.perfusao_PE = req.body.perfusao_PE;
    formData6.teve_erisipela = req.body.teve_erisipela;
    formData6.outras_alteracoes = req.body.outras_alteracoes;
    formData6.comentarios = req.body.comentarios;

    // Redirecionar para a próxima etapa
    res.redirect('/etapa7');
};



export const etapa7 = (req: Request, res: Response) => {
    // Recuperar o id_cliente da sessão
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário para continuar!");
        return;
    }

    res.render('etapa7', { resumo: formData, id_cliente });
};




export const submit = async (req: Request, res: Response): Promise<void> => {
    try {
        // Recuperar o id_cliente da sessão
        const id_cliente = req.session.id_cliente;

        if (!id_cliente) {
            res.status(400).send("ID do cliente não encontrado na sessão!");
            return; // Impede a execução do código subsequente se o cliente não existir
        }

        // Preencher os formData com o id_cliente
        formData.id_cliente = id_cliente;
        formData2.id_cliente = id_cliente;
        formData3.id_cliente = id_cliente;
        formData4.id_cliente = id_cliente;
        formData5.id_cliente = id_cliente;
        formData6.id_cliente = id_cliente;

        // Salvar no banco de dados
        await Etapa1.create(formData);
        await Etapa2.create(formData2);
        await Etapa3.create(formData3);
        await Etapa4.create(formData4);
        await Etapa5.create(formData5);
        await Etapa6.create(formData6);

        // Limpar a sessão
        req.session.destroy((err) => {
            if (err) {
                console.error("Erro ao destruir a sessão:", err);
                res.status(500).send("Erro ao finalizar a sessão.");
                return;
            }

            // Enviar resposta de sucesso
            res.send('Cadastro concluído com sucesso!');
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao salvar no banco de dados.');
    }
};










