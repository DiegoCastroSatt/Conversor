const { unidades, categoriaDe } = require("./unidades");

function convertirTemperatura(valor, origen, destino) {
    if (origen === destino) return valor;

    if (origen === "celsius" && destino === "fahrenheit") return (valor * 9 / 5) + 32;
    if (origen === "fahrenheit" && destino === "celsius") return (valor - 32) * 5 / 9;

    if (origen === "celsius" && destino === "kelvin") return valor + 273.15;
    if (origen === "kelvin" && destino === "celsius") return valor - 273.15;

    if (origen === "fahrenheit" && destino === "kelvin") return (valor - 32) * 5 / 9 + 273.15;
    if (origen === "kelvin" && destino === "fahrenheit") return (valor - 273.15) * 9 / 5 + 32;
}

function convertirUnidad(valor, origen, destino) {
    valor = Number(valor);
    origen = origen.toLowerCase();
    destino = destino.toLowerCase();

    const categoria = categoriaDe(origen);

    if (Number.isNaN(valor)) throw new Error("Ingrese un numero valido.");
    if (!categoria || categoria !== categoriaDe(destino)) throw new Error("Conversion no disponible.");
    if (valor < 0 && categoria !== "temperatura") throw new Error("No se permiten valores negativos.");

    if (categoria === "temperatura") {
        return convertirTemperatura(valor, origen, destino);
    }

    return valor * unidades[categoria][origen] / unidades[categoria][destino];
}

module.exports = { convertirUnidad };
