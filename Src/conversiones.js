const { unidades, categoriaDe } = require("./unidades");

function convertirTemperatura(valor, origen, destino) {
    if (origen === destino) return valor;

    if (origen === "celsius" && destino === "fahrenheit") return (valor * 9 / 5) + 32;
    if (origen === "fahrenheit" && destino === "celsius") return (valor - 32) * 5 / 9;

    if (origen === "celsius" && destino === "kelvin") return valor + 273.15;
    if (origen === "kelvin" && destino === "celsius") return valor - 273.15;

    if (origen === "fahrenheit" && destino === "kelvin") {
        return (valor - 32) * 5 / 9 + 273.15;
    }

    if (origen === "kelvin" && destino === "fahrenheit") {
        return (valor - 273.15) * 9 / 5 + 32;
    }

    throw new Error("Conversion de temperatura no disponible.");
}

function convertirConsumo(valor, origen, destino) {
    if (origen === destino) return valor;

    let kmPorLitro;

    if (origen === "km_l") kmPorLitro = valor;
    else if (origen === "litros_100km") kmPorLitro = 100 / valor;
    else if (origen === "mpg_us") kmPorLitro = valor * 0.425144;
    else if (origen === "mpg_uk") kmPorLitro = valor * 0.354006;
    else throw new Error("Unidad de consumo no disponible.");

    if (destino === "km_l") return kmPorLitro;
    if (destino === "litros_100km") return 100 / kmPorLitro;
    if (destino === "mpg_us") return kmPorLitro / 0.425144;
    if (destino === "mpg_uk") return kmPorLitro / 0.354006;

    throw new Error("Conversion de consumo no disponible.");
}

function convertirUnidad(valor, origen, destino) {
    valor = Number(valor);
    origen = origen.toLowerCase();
    destino = destino.toLowerCase();

    const categoria = categoriaDe(origen);

    if (Number.isNaN(valor)) {
        throw new Error("Ingrese un numero valido.");
    }

    if (!categoria || categoria !== categoriaDe(destino)) {
        throw new Error("Conversion no disponible.");
    }

    if (valor < 0 && categoria !== "temperatura") {
        throw new Error("No se permiten valores negativos.");
    }

    if (categoria === "temperatura") {
        return convertirTemperatura(valor, origen, destino);
    }

    if (categoria === "consumo_combustible") {
        if (valor === 0) {
            throw new Error("El valor no puede ser cero en consumo de combustible.");
        }

        return convertirConsumo(valor, origen, destino);
    }

    return valor * unidades[categoria][origen] / unidades[categoria][destino];
}

module.exports = { convertirUnidad };