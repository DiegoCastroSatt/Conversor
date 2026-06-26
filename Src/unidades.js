const unidades = {
    longitud: {
        milimetros: 0.001,
        centimetros: 0.01,
        metros: 1,
        kilometros: 1000,
        pulgadas: 0.0254,
        pies: 0.3048,
        yardas: 0.9144,
        millas: 1609.34
    },

    masa: {
        miligramos: 0.001,
        gramos: 1,
        kilogramos: 1000,
        toneladas: 1000000,
        onzas: 28.3495,
        libras: 453.592
    },

    temperatura: {
        celsius: 1,
        fahrenheit: 1,
        kelvin: 1
    }
};

function categoriaDe(unidad) {
    return Object.keys(unidades).find((cat) => unidades[cat][unidad] !== undefined);
}

module.exports = { unidades, categoriaDe };