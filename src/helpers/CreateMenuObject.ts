type MenuOptions = '' | 'etapa1' | 'etapa2' | 'etapa3' | 'etapa4' | 'etapa5' | 'etapa6' | 'etapa7';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        etapa1: false,
        etapa2: false,
        etapa3: false,
        etapa4: false,
        etapa5: false,
        etapa6: false,
        etapa7: false
    };

    if (activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
};
