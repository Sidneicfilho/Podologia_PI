import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';  // Rotas da aplicação

dotenv.config();

const app = express();

// Configuração do express-session
app.use(
    session({
        secret: 'sua_chave_secreta', // Chave secreta para assinar a sessão
        resave: false,               // Evita regravar a sessão se nada mudar
        saveUninitialized: true,     // Salva sessões não inicializadas
        cookie: { secure: false },   // Defina como true se estiver usando HTTPS
    })
);

// Configuração do motor de templates Mustache
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

// Configuração de arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Habilitar o middleware para processar POST (via body)
app.use(express.urlencoded({ extended: true }));

// Usar as rotas definidas
app.use(mainRoutes);

// Configuração para lidar com rotas não encontradas (404)
app.use((req, res) => {
    res.status(404).send("Página não encontrada");
});

// Iniciar o servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

declare module 'express-session' {
    interface SessionData {
        id_cliente?: number;
        formData?: {
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
        };
        formData2?: Record<string, any>;
        formData3?: Record<string, any>;
        formData4?: Record<string, any>;
        formData5?: Record<string, any>;
        formData6?: Record<string, any>;
    }
}
