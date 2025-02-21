import { Router } from 'express';
import * as usuarioController from '../controllers/usuarioController';
import * as pesquisarUsuarioController from '../controllers/pesquisarUsuarioController';
import { sequelize } from '../instances/mysql';
import '../models/associacao';// Importe o arquivo de associações

// Sincronize os modelos com o banco de dados
sequelize.sync().then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
});

// Sincronize os modelos com o banco de dados

const router = Router();

// Rotas das etapas
router.get('/etapa1', usuarioController.etapa1);
router.post('/etapa1', usuarioController.etapa1Post);

router.get('/etapa2', usuarioController.etapa2);
router.post('/etapa2', usuarioController.etapa2Post);

router.get('/etapa3', usuarioController.etapa3);
router.post('/etapa3', usuarioController.etapa3Post);

router.get('/etapa4', usuarioController.etapa4);
router.post('/etapa4', usuarioController.etapa4Post);

router.get('/etapa5', usuarioController.etapa5);
router.post('/etapa5', usuarioController.etapa5Post);

router.get('/etapa6', usuarioController.etapa6);
router.post('/etapa6', usuarioController.etapa6Post);

router.get('/resumo', usuarioController.resumo);

// Rota para submissão final
router.post('/submit', usuarioController.submit);

// Rota de pesquisa
router.get('/pesquisa', pesquisarUsuarioController.pesquisarUsuario);
// Rota para a tela inicial
router.get("/", usuarioController.telaInicial);
 
router.get("/cadastro", usuarioController.iniciarCadastro);
// Rota para iniciar a pesquisa
router.get("/pesquisa", usuarioController.iniciarPesquisa);
 

export default router;
