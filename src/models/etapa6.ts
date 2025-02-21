import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';
 
export interface Etapa6Instance extends Model {
    id_alteracoeslesoes: number;
    id_cliente: number;
    bromidrose: boolean;
    hidrose: boolean;
    desidrose: boolean;
    isquemia: boolean;
    mal_perfurante: boolean;
    edema: boolean;
    tinea: boolean;
    psoriase: boolean;
    tungiase: boolean;
    verruga_plantar: boolean;
    calo_dorsal: boolean;
    querotose: boolean;
    calo_plantar: boolean;
    hiperqueratose: boolean;
    calo_interdigital: boolean;
    perfusao_PD: 'Normal' | 'Pálido' | 'Cianótico';
    perfusao_PE: 'Normal' | 'Pálido' | 'Cianótico';
    teve_erisipela: 'Sim' | 'Não';
    outras_alteracoes: string;
    comentarios: string;
    data_registro: Date;
}
 
export const Etapa6 = sequelize.define<Etapa6Instance>('Etapa6', {
    id_alteracoeslesoes: {
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
    bromidrose: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    hidrose: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    desidrose: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    isquemia: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    mal_perfurante: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    edema: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    tinea: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    psoriase: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    tungiase: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    fissuras: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    
    verruga_plantar: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    calo_dorsal: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    querotose: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    calo_plantar: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    hiperqueratose: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    calo_interdigital: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    perfusao_PD: {
        type: DataTypes.ENUM('Normal', 'Pálido', 'Cianótico'),
        allowNull: true,
    },
    perfusao_PE: {
        type: DataTypes.ENUM('Normal', 'Pálido', 'Cianótico'),
        allowNull: true,
    },
    teve_erisipela: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    outras_alteracoes: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    comentarios: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    data_registro: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW  // Definido para gravar a data atual automaticamente
    }
}, {
    tableName: 'alteracoeslesoes',
    timestamps: false
});
 
 