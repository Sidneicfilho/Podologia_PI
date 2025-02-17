import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface Etapa3Instance extends Model {
    id_dadosclinicos: number;
    id_cliente: number;
    Osteoporose: 'Sim' | 'Não'; // Tipo literal para garantir valores corretos
    Quimioterapia_Radioterapia: 'Sim' | 'Não';
    Antecedente_Oncologico: 'Sim' | 'Não';
    Reumatismo: 'Sim' | 'Não';
    Marca_passo: 'Sim' | 'Não';
    Hipotensao: 'Sim' | 'Não';
    Injetavel: 'Sim' | 'Não';
    Renal: 'Sim' | 'Não';
    Hipotireoidismo: 'Sim' | 'Não';
    Cardiopatia: 'Sim' | 'Não';
    Hanseniase: 'Sim' | 'Não';
    Epilepsia: 'Sim' | 'Não';
    Hepatite: 'Sim' | 'Não';
    Hipertensao: 'Sim' | 'Não';
    Cirurgia_MMII: 'Sim' | 'Não';
    Alteracoes_Vasculares: 'Sim' | 'Não';
    Insulina: 'Sim' | 'Não';
    Dieta_Hidrica: 'Sim' | 'Não';
    Dieta_Alimentar: 'Sim' | 'Não';
    Via_Oral: 'Sim' | 'Não';
    Taxa_Glicemica: number; // Pode ser `number` ou `string` se for um valor decimal
}

export const Etapa3 = sequelize.define<Etapa3Instance>('Etapa3', {
    id_dadosclinicos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'cliente', // Nome da tabela referenciada
            key: 'id_cliente' // Nome da coluna referenciada
        }
    },
    Osteoporose: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Quimioterapia_Radioterapia: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Antecedente_Oncologico: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Reumatismo: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Marca_passo: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Hipotensao: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Injetavel: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Renal: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Hipotireoidismo: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Cardiopatia: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Hanseniase: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Epilepsia: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Hepatite: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Hipertensao: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Cirurgia_MMII: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Alteracoes_Vasculares: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Insulina: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Dieta_Hidrica: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Dieta_Alimentar: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Via_Oral: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    Taxa_Glicemica: {
        type: DataTypes.DECIMAL(5, 2), // Define como DECIMAL(5,2)
        allowNull: true
    }
}, {
    tableName: 'dadosclinicos', // Nome da tabela no banco de dados
    timestamps: false // Desabilita os campos `createdAt` e `updatedAt`
});