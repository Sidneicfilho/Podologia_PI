
import { Request, Response } from 'express';
import { Etapa1, Etapa1Instance } from "../models/Etapa1";
import { Etapa2, Etapa2Instance } from "../models/etapa2";
import { Etapa3, Etapa3Instance } from "../models/etapa3";
import { Etapa4, Etapa4Instance } from "../models/etapa4";
import { Etapa5, Etapa5Instance } from "../models/etapa5";
import { Etapa6, Etapa6Instance } from "../models/etapa6";
 
import { Op } from 'sequelize'; // Importa o operador correto

export const pesquisarUsuario = async (req: Request, res: Response) => {
    try {
        const { termo } = req.query; // Obtém o termo da URL (pode ser nome ou ID)
 
        if (!termo || termo.toString().trim() === '') {
            return res.render('pesquisa', { mensagem: 'Digite um nome ou ID para pesquisar.', usuarios: [] });
        }
 
        let usuarios;
 
        if (!isNaN(Number(termo))) {
            // Se for um número, busca por ID exato e inclui todas as etapas
            usuarios = await Etapa1.findAll({
                where: { id_cliente: Number(termo) },
                include: [
                    { model: Etapa2, as: 'dados_gerais', required: false },
                    { model: Etapa3, as: 'dadosclinicos', required: false },
                    { model: Etapa4, as: 'alteracoeslesoespes', required: false },
                    { model: Etapa5, as: 'formato_unhas', required: false },
                    { model: Etapa6, as: 'alteracoeslesoes', required: false }
                ]
            });
        } else {
            // Se for texto, pesquisa pelo nome usando LIKE e inclui todas as etapas
            usuarios = await Etapa1.findAll({
                where: { nome: { [Op.like]: `%${termo}%` } },
                include: [
                    { model: Etapa2, as: 'dados_gerais', required: false },
                    { model: Etapa3, as: 'dadosclinicos', required: false },
                    { model: Etapa4, as: 'alteracoeslesoespes', required: false },
                    { model: Etapa5, as: 'formato_unhas', required: false },
                    { model: Etapa6, as: 'alteracoeslesoes', required: false }
                ]
            });
        }
 
        console.log(JSON.stringify(usuarios, null, 2)); // Verifica no console se os dados estão vindo corretamente
 
        return res.render('pesquisa', { usuarios, mensagem: usuarios.length ? '' : 'Nenhum usuário encontrado.' });
 
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).send('Erro interno ao buscar usuário.');
    }
};
 
 
export const detalhesUsuario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
 
        const usuario = await Etapa1.findByPk(id);
 
        if (!usuario) {
            return res.status(404).send('Usuário não encontrado');
        }
 
        res.render('usuarioDetalhes', { usuario });
 
    } catch (error) {
        console.error('Erro ao buscar detalhes do usuário:', error);
        res.status(500).send('Erro interno');
    }
};