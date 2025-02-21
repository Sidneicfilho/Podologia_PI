import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface Etapa3Instance extends Model {
    id_dadosclinicos: number;
    id_cliente: number;
    Osteoporose: boolean;// Tipo literal para garantir valores corretos
    Quimioterapia_Radioterapia: boolean;
    Antecedente_Oncologico: boolean;
    Reumatismo: boolean;
    Marca_passo: boolean;
    Hipotensao: boolean;
    Renal: boolean;
    Hipotireoidismo: boolean;
    Cardiopatia: boolean;
    Hanseniase: boolean;
    Epilepsia: boolean;
    Hepatite: boolean;
    Hipertensao: boolean;
    Cirurgia_MMII: boolean;
    Alteracoes_Vasculares: boolean;
    Insulina: 'Sim' | 'Não';
    Dieta_Hidrica: 'Sim' | 'Não';
    Dieta_Alimentar: 'Sim' | 'Não';
    Tipo_Insulina: 'Via Oral' | 'Injetável'
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
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Quimioterapia_Radioterapia: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Antecedente_Oncologico: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Reumatismo: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Marca_passo: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Hipotensao: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Renal: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Hipotireoidismo: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Cardiopatia: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Hanseniase: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Epilepsia: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Hepatite: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Hipertensao: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Cirurgia_MMII: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Alteracoes_Vasculares: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Insulina:{
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
    Tipo_Insulina: {
        type: DataTypes.ENUM('Via Oral', 'Injetável'),
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