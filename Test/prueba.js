function convertirKilometrosAMetros(kilometros) {
    return kilometros * 1000;
}

function convertirKilogramosAGramos(kilogramos) {
    return kilogramos * 1000;
}

function convertirHorasAMinutos(horas) {
    return horas * 60;
}

function convertirSegundosAMinutos(segundos) {
    return segundos / 60;
}

function convertirMinutosASegundos(minutos) {
    return minutos * 60;
}

function convertirHorasASegundos(horas) {
    return horas * 3600;
}

function mostrarPrueba(descripcion, resultado, esperado) {
    console.log(`${descripcion}:`, resultado === esperado);
}

function ejecutarPruebas() {
    mostrarPrueba("1 kilometro son 1000 metros", convertirKilometrosAMetros(1), 1000);
    mostrarPrueba("1 kilometro son 500 metros", convertirKilometrosAMetros(1), 500);

    mostrarPrueba("3 kilogramos son 3000 gramos", convertirKilogramosAGramos(3), 3000);
    mostrarPrueba("3 kilogramos son 30 gramos", convertirKilogramosAGramos(3), 30);

    mostrarPrueba("2 horas son 120 minutos", convertirHorasAMinutos(2), 120);
    mostrarPrueba("2 horas son 60 minutos", convertirHorasAMinutos(2), 60);

    mostrarPrueba("360 segundos son 6 minutos", convertirSegundosAMinutos(360), 6);
    mostrarPrueba("360 segundos son 60 minutos", convertirSegundosAMinutos(360), 60);

    mostrarPrueba("5 minutos son 300 segundos", convertirMinutosASegundos(5), 300);
    mostrarPrueba("5 minutos son 30 segundos", convertirMinutosASegundos(5), 30);

    mostrarPrueba("2 horas son 7200 segundos", convertirHorasASegundos(2), 7200);
    mostrarPrueba("2 horas son 3600 segundos", convertirHorasASegundos(2), 3600);
}

ejecutarPruebas();
