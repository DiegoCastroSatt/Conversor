const unidades = {

    longitud: {
        milimetros: 0.001,
        centimetros: 0.01,
        decimetros: 0.1,
        metros: 1,
        kilometros: 1000,
        pulgadas: 0.0254,
        pies: 0.3048,
        yardas: 0.9144,
        millas: 1609.344,
        millas_nauticas: 1852
    },

    masa: {
        miligramos: 0.001,
        gramos: 1,
        kilogramos: 1000,
        toneladas: 1000000,
        onzas: 28.3495,
        libras: 453.592,
        stone: 6350.29
    },

    tiempo: {
        milisegundos: 0.001,
        segundos: 1,
        minutos: 60,
        horas: 3600,
        dias: 86400,
        semanas: 604800,
        meses: 2629800,
        años: 31557600
    },

    temperatura: {
        celsius: 1,
        fahrenheit: 1,
        kelvin: 1
    },

    area: {
        milimetros2: 0.000001,
        centimetros2: 0.0001,
        metros2: 1,
        kilometros2: 1000000,
        hectareas: 10000,
        acres: 4046.856
    },

    volumen: {
        mililitros: 0.001,
        litros: 1,
        metros3: 1000,
        centimetros3: 0.001,
        galones_us: 3.78541,
        galones_uk: 4.54609,
        pintas: 0.473176,
        onzas_fluido: 0.0295735
    },

    velocidad: {
        metros_segundo: 1,
        kilometros_hora: 0.277778,
        millas_hora: 0.44704,
        nudos: 0.514444
    },

    presion: {
        pascal: 1,
        kilopascal: 1000,
        bar: 100000,
        atmosfera: 101325,
        psi: 6894.76
    },

    energia: {
        joule: 1,
        kilojoule: 1000,
        caloria: 4.184,
        kilocaloria: 4184,
        watt_hora: 3600,
        kilowatt_hora: 3600000
    },

    potencia: {
        watt: 1,
        kilowatt: 1000,
        megawatt: 1000000,
        caballo_fuerza: 745.7
    },

    fuerza: {
        newton: 1,
        kilonewton: 1000,
        libra_fuerza: 4.44822
    },

    frecuencia: {
        hertz: 1,
        kilohertz: 1000,
        megahertz: 1000000,
        gigahertz: 1000000000
    },

    datos: {
        bit: 0.125,
        byte: 1,
        kilobyte: 1024,
        megabyte: 1048576,
        gigabyte: 1073741824,
        terabyte: 1099511627776,
        petabyte: 1125899906842624
    },

    corriente: {
        miliamperio: 0.001,
        amperio: 1
    },

    voltaje: {
        voltio: 1,
        kilovoltio: 1000
    },

    resistencia: {
        ohmio: 1,
        kiloohmio: 1000,
        megaohmio: 1000000
    },

    angulo: {
        grado: 1,
        radian: 57.2958,
        gradian: 0.9
    },

    consumo_combustible: {
        km_l: 1,
        litros_100km: 1,
        mpg_us: 1,
        mpg_uk: 1
    }
};

function categoriaDe(unidad) {
    return Object.keys(unidades).find(
        (categoria) => unidades[categoria][unidad] !== undefined
    );
}

module.exports = { unidades, categoriaDe };