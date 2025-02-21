import { Model, DataTypes, TinyIntegerDataType } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface Etapa4Instance extends Model {
    id_alteracoeslesoespes: number;
    id_cliente: number;
    Tipo_Pisada: 'Cavo' | 'Chato' | 'Normal';
    Flexivel_D: boolean;
    Flexivel_E: boolean;
    Rigido_D: boolean;
    Rigido_E: boolean;
    Espalmado_D: boolean;
    Espalmado_E: boolean;
    Martelo_D: boolean;
    Martelo_E: boolean;
    Queda_Metatarso_D: boolean;
    Queda_Metatarso_E: boolean;
    Tipo_Marcha: 'Normal' | 'Pato' | 'Arrastada';
    Joelho: 'Normal' | 'Valgo' | 'Varo';
    Articulacao: 'Retrope' | 'Choto';
    Sensibilidade_Dor: 'Diminuída' | 'Normal' | 'Aumentada';
    Marcha_Descricao: string;
}

export const Etapa4 = sequelize.define<Etapa4Instance>('Etapa4', {
    id_alteracoeslesoespes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'cliente',
            key: 'id_cliente'
        }
    },
    Tipo_Pisada: {
        type: DataTypes.ENUM('Cavo', 'Chato', 'Normal'),
        allowNull: true
    },
    Flexivel_D: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Flexivel_E: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Rigido_D: {
        type: DataTypes.BOOLEAN,
        allowNull:  true
    },
    Rigido_E: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Espalmado_D: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Espalmado_E: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Martelo_D: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Martelo_E: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Queda_Metatarso_D: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Queda_Metatarso_E: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Tipo_Marcha: {
        type: DataTypes.ENUM('Normal', 'Pato', 'Arrastada'),
        allowNull: true
    },
    Marcha_Descricao:{
        type: DataTypes.STRING,
        allowNull: true
    },
    Joelho: {
        type: DataTypes.ENUM('Normal', 'Valgo', 'Varo'),
        allowNull: true
    },
    Articulacao: {
        type: DataTypes.ENUM('Retrope', 'Choto'),
        allowNull: true
    },
    Sensibilidade_Dor: {
        type: DataTypes.ENUM('Diminuída', 'Normal', 'Aumentada'),
        allowNull: true
    }
}, {
    tableName: 'alteracoeslesoespes',
    timestamps: false
});
