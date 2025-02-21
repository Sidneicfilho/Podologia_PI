import { Etapa1 } from '../models/Etapa1';
import { Etapa2 } from '../models/etapa2';
import { Etapa3 } from '../models/etapa3';
import { Etapa4 } from '../models/etapa4';
import { Etapa5 } from '../models/etapa5';
import { Etapa6 } from '../models/etapa6';
 
Etapa1.hasOne(Etapa2, { foreignKey: 'id_cliente', as: 'dados_gerais' });
Etapa1.hasOne(Etapa3, { foreignKey: 'id_cliente', as: 'dadosclinicos' });
Etapa1.hasOne(Etapa4, { foreignKey: 'id_cliente', as: 'alteracoeslesoespes' });
Etapa1.hasOne(Etapa5, { foreignKey: 'id_cliente', as: 'formato_unhas' });
Etapa1.hasOne(Etapa6, { foreignKey: 'id_cliente', as: 'alteracoeslesoes' });
 
Etapa2.belongsTo(Etapa1, { foreignKey: 'id_cliente', as: 'cliente' });
Etapa3.belongsTo(Etapa1, { foreignKey: 'id_cliente', as: 'cliente' });
Etapa4.belongsTo(Etapa1, { foreignKey: 'id_cliente', as: 'cliente' });
Etapa5.belongsTo(Etapa1, { foreignKey: 'id_cliente', as: 'cliente' });
Etapa6.belongsTo(Etapa1, { foreignKey: 'id_cliente', as: 'cliente' });