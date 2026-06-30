function formatearNumero(numero) {
    return new Intl.NumberFormat("es-CL", {
        maximumFractionDigits: 6
    }).format(numero);
}

function mostrarResultado(mensaje) {
    document.getElementById("resultado").innerText = mensaje;
}

function convertir() {
    const valor = document.getElementById("valor").value;
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;

    try {
        const resultado = convertirUnidad(valor, origen, destino);
        const valorFormateado = formatearNumero(Number(valor));
        const resultadoFormateado = formatearNumero(resultado);

        mostrarResultado(
            `${valorFormateado} ${origen.toUpperCase()} = ${resultadoFormateado} ${destino.toUpperCase()}`
        );
    } catch (error) {
        mostrarResultado(error.message);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const origen = document.getElementById("origen");
    const destino = document.getElementById("destino");
    const fuenteMonedas = document.getElementById("fuente-monedas");

    destino.innerHTML = origen.innerHTML;

    origen.value = "usd";
    destino.value = "clp";

    if (typeof monedaInfo !== "undefined") {
        fuenteMonedas.innerText = `Tasas respecto al dolar actualizadas: ${monedaInfo.actualizadoUtc}`;
    }
});
