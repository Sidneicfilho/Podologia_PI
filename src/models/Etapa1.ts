import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface Etapa1Instance extends Model {
    id_cliente: number;
    nome: string;
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    tel_res: string;
    telefone: string;
    tel_emergencia: string;
    contato: string;
    data_nascimento: Date;
    profissao: string;
    email: string;
    sexo: "Masculino" | "Feminino" | "Outro";
}

export const Etapa1 = sequelize.define<Etapa1Instance>('Etapa1', {
    id_cliente: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
    endereco: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: true
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: true,
        
    },
    tel_res: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tel_emergencia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contato: {
        type: DataTypes.STRING,
        allowNull: true
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    profissao: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isEmail: true
        }
    },
    sexo: {
        type: DataTypes.ENUM('Masculino', 'Feminino', 'Outro'),
        allowNull: true
    }
}, {
    tableName: 'cliente',
    timestamps: false
});
