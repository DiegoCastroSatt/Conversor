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

    moneda: {
        usd: 1,
        aed: 3.6725,
        afn: 64.658121,
        all: 83.087151,
        amd: 367.803274,
        ang: 1.79,
        aoa: 924.069545,
        ars: 1474.7207,
        aud: 1.449499,
        awg: 1.79,
        azn: 1.700318,
        bam: 1.717253,
        bbd: 2,
        bdt: 122.983653,
        bgn: 1.717253,
        bhd: 0.376,
        bif: 2991.730585,
        bmd: 1,
        bnd: 1.29421,
        bob: 6.921903,
        brl: 5.176095,
        bsd: 1,
        btn: 94.437461,
        bwp: 14.015667,
        byn: 2.866799,
        bzd: 2,
        cad: 1.418719,
        cdf: 2282.869527,
        chf: 0.80949,
        clf: 0.023295,
        clp: 920.774578,
        cnh: 6.802218,
        cny: 6.81116,
        cop: 3427.310631,
        crc: 455.46489,
        cup: 24,
        cve: 96.814582,
        czk: 21.299524,
        djf: 177.721,
        dkk: 6.550858,
        dop: 58.756793,
        dzd: 133.467705,
        egp: 49.521365,
        ern: 15,
        etb: 159.434411,
        eur: 0.878019,
        fjd: 2.265621,
        fkp: 0.757419,
        fok: 6.550859,
        gbp: 0.757419,
        gel: 2.644871,
        ggp: 0.757419,
        ghs: 11.268377,
        gip: 0.757419,
        gmd: 74.237823,
        gnf: 8772.492507,
        gtq: 7.629972,
        gyd: 209.108298,
        hkd: 7.841728,
        hnl: 26.771325,
        hrk: 6.615422,
        htg: 130.493593,
        huf: 310.685941,
        idr: 17903.388374,
        ils: 2.997837,
        imp: 0.757419,
        inr: 94.437558,
        iqd: 1309.778946,
        irr: 1186320.913063,
        isk: 126.249862,
        jep: 0.757419,
        jmd: 157.355234,
        jod: 0.709,
        jpy: 161.708517,
        kes: 129.538834,
        kgs: 87.450556,
        khr: 4032.672261,
        kid: 1.449401,
        kmf: 431.956213,
        krw: 1536.480737,
        kwd: 0.309364,
        kyd: 0.833333,
        kzt: 485.872388,
        lak: 22026.201207,
        lbp: 89500,
        lkr: 336.700924,
        lrd: 182.131729,
        lsl: 16.462485,
        lyd: 6.417835,
        mad: 9.377448,
        mdl: 17.677622,
        mga: 4255.192131,
        mkd: 54.130077,
        mmk: 2098.30833,
        mnt: 3573.697556,
        mop: 8.07698,
        mru: 39.898689,
        mur: 47.990876,
        mvr: 15.451022,
        mwk: 1743.146919,
        mxn: 17.50642,
        myr: 4.088883,
        mzn: 63.54323,
        nad: 16.462485,
        ngn: 1373.525789,
        nio: 36.798304,
        nok: 9.922102,
        npr: 151.099937,
        nzd: 1.771789,
        omr: 0.384497,
        pab: 1,
        pen: 3.409544,
        pgk: 4.38495,
        php: 61.310909,
        pkr: 278.159099,
        pln: 3.761645,
        pyg: 6123.87503,
        qar: 3.64,
        ron: 4.59635,
        rsd: 103.004251,
        rub: 76.176556,
        rwf: 1469.394809,
        sar: 3.75,
        sbd: 7.984917,
        scr: 14.500782,
        sdg: 508.740776,
        sek: 9.724917,
        sgd: 1.294211,
        shp: 0.757419,
        sle: 24.724402,
        sll: 24724.402463,
        sos: 571.165927,
        srd: 37.625397,
        ssp: 4708.650315,
        stn: 21.511425,
        syp: 113.988935,
        szl: 16.462485,
        thb: 33.376649,
        tjs: 9.275842,
        tmt: 3.4999,
        tnd: 2.950338,
        top: 2.386264,
        try: 46.630405,
        ttd: 6.775679,
        tvd: 1.449401,
        twd: 31.865928,
        tzs: 2627.693236,
        uah: 44.918379,
        ugx: 3658.627363,
        uyu: 40.019652,
        uzs: 11987.939894,
        ves: 623.0223,
        vnd: 26235.555017,
        vuv: 120.131252,
        wst: 2.746581,
        xaf: 575.941617,
        xcd: 2.7,
        xcg: 1.79,
        xdr: 0.736359,
        xof: 575.941617,
        xpf: 104.775565,
        yer: 238.733178,
        zar: 16.462521,
        zmw: 18.060921,
        zwg: 26.8272,
        zwl: 26.8272
    }
};

const monedaInfo = {
    base: "USD",
    fuente: "https://www.exchangerate-api.com",
    actualizadoUtc: "Sun, 28 Jun 2026 00:02:31 +0000"
};

function categoriaDe(unidad) {
    return Object.keys(unidades).find(
        (categoria) => unidades[categoria][unidad] !== undefined
    );
}

if (typeof module !== "undefined") {
    module.exports = { unidades, categoriaDe, monedaInfo };
}
