let colors = [];

const setColors = (rootStyles, colors) =>{
    rootStyles.setProperty('--primary-color', colors[0]);
    rootStyles.setProperty('--acent-color', colors[1]);
    rootStyles.setProperty('--acent-color-dark', colors[2]);
    rootStyles.setProperty('--secondary-color', colors[3]);
}

export const principalSquema = ( rootStyles ) => {
    colors = [
        '#F5F6F3',
        '#827A86',
        '#7C7C7C',
        '#47454D'
    ];

    setColors( rootStyles, colors );
}

export const twoSquema = ( rootStyles ) => {
    colors = [
        '#1A1F28',
        '#E1EBD3',
        '#67ACCA',
        '#4B738B',
    ];
    setColors( rootStyles, colors );
}

export const threeSquema = ( rootStyles ) => {
    colors = [
        '#102126',
        '#206F72',
        '#FFF7C2',
        '#DD3625',
    ];

    setColors( rootStyles, colors );
}

export const fourSquema = ( rootStyles ) => {
    colors = [
        '#100E2E',
        '#990D0F',
        '#D9490F',
        '#FEAE0A',
    ];

    setColors( rootStyles, colors );
}

export const fiveSquema = ( rootStyles ) => {
    colors = [
        '#C7C7C0',
        '#F7F0E7',
        '#D65055',
        '#5E485F',
    ];

    setColors( rootStyles, colors );
}