import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface Etapa5Instance extends Model {
    id_formato_unhas: number;
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
}

export const Etapa5 = sequelize.define<Etapa5Instance>('Etapa5', {
    id_formato_unhas: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'clientes', // Nome correto da tabela no banco
            key: 'id_cliente'
        }
    },
    PD_halux: {
        type: DataTypes.ENUM('Normal', 'Involuído', 'Telha', 'Funil', 'Gancho', 'Torquês', 'Caracol', 'Cunha'),
        allowNull: true
    },
    PD_2: {
        type: DataTypes.ENUM('Normal', 'Involuído', 'Telha', 'Funil', 'Gancho', 'Torquês', 'Caracol', 'Cunha'),
        allowNull: true
    },
    PD_3: {
        type: DataTypes.ENUM('Normal', 'Involuído', 'Telha', 'Funil', 'Gancho', 'Torquês', 'Caracol', 'Cunha'),
        allowNull: true
    },
    PD_4: {
        type: DataTypes.ENUM('Normal', 'Involuído', 'Telha', 'Funil', 'Gancho', 'Torquês', 'Caracol', 'Cunha'),
        allowNull: true
    },
    PD_5: {
        type: DataTypes.ENUM('Normal', 'Involuído', 'Telha', 'Funil', 'Gancho', 'Torquês', 'Caracol', 'Cunha'),
        allowNull: true
    },
    PE_halux: {
        type: DataTypes.ENUM('Normal', 'Involuído', 'Telha', 'Funil', 'Gancho', 'Torquês', 'Caracol', 'Cunha'),
        allowNull: true
    },
    PE_2: {
        type: DataTypes.ENUM('Normal', 'Involuído', 'Telha', 'Funil', 'Gancho', 'Torquês', 'Caracol', 'Cunha'),
        allowNull: true
    },
    PE_3: {
        type: DataTypes.ENUM('Normal', 'Involuído', 'Telha', 'Funil', 'Gancho', 'Torquês', 'Caracol', 'Cunha'),
        allowNull: true
    },
    PE_4: {
        type: DataTypes.ENUM('Normal', 'Involuído', 'Telha', 'Funil', 'Gancho', 'Torquês', 'Caracol', 'Cunha'),
        allowNull: true
    },
    PE_5: {
        type: DataTypes.ENUM('Normal', 'Involuído', 'Telha', 'Funil', 'Gancho', 'Torquês', 'Caracol', 'Cunha'),
        allowNull: true
    },
    Onicoatrofia: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Onicocriptose: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Onicorrexe: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Granuloma: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Onicogrifose: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Onicolise: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Onicofose: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Psoriase_ungueal: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Onicomicose: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    outras_alteracoes: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'formato_unhas', // Nome correto da tabela no banco
    timestamps: false // Se quiser timestamps, mude para `true`
});
