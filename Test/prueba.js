const assert = require("assert");

function convertirKilometrosAMetros(kilometros) {
    return kilometros * 1000;
}

function convertirKilogramosAGramos(kilogramos) {
    return kilogramos * 1000;
}

function convertirHorasAMinutos(horas) {
    return horas * 60;
}

function convertirCelsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function probarKilometrosAMetros(kilometros, esperado) {
    return convertirKilometrosAMetros(kilometros) === esperado;
}

function probarKilogramosAGramos(kilogramos, esperado) {
    return convertirKilogramosAGramos(kilogramos) === esperado;
}

function probarHorasAMinutos(horas, esperado) {
    return convertirHorasAMinutos(horas) === esperado;
}

function probarCelsiusAFahrenheit(celsius, esperado) {
    return convertirCelsiusAFahrenheit(celsius) === esperado;
}

function ejecutarPruebas() {
    assert.strictEqual(probarKilometrosAMetros(1, 1000), true);
    assert.strictEqual(probarKilometrosAMetros(1, 500), false);

    assert.strictEqual(probarKilogramosAGramos(3.5, 3500), true);
    assert.strictEqual(probarKilogramosAGramos(2, 20), false);

    assert.strictEqual(probarHorasAMinutos(2, 120), true);
    assert.strictEqual(probarHorasAMinutos(2, 60), false);

    assert.strictEqual(probarCelsiusAFahrenheit(100, 212), true);
    assert.strictEqual(probarCelsiusAFahrenheit(0, 0), false);

    console.log("1 kilometro son 1000 metros:", probarKilometrosAMetros(1, 1000));
    console.log("1 kilometro son 500 metros:", probarKilometrosAMetros(1, 500));
    console.log("3.5 kilogramos son 3500 gramos:", probarKilogramosAGramos(3.5, 3500));
    console.log("2 kilogramos son 20 gramos:", probarKilogramosAGramos(2, 20));
    console.log("2 horas son 120 minutos:", probarHorasAMinutos(2, 120));
    console.log("2 horas son 60 minutos:", probarHorasAMinutos(2, 60));
    console.log("100 celsius son 212 fahrenheit:", probarCelsiusAFahrenheit(100, 212));
    console.log("0 celsius son 0 fahrenheit:", probarCelsiusAFahrenheit(0, 0));

    console.log("Todas las pruebas pasaron correctamente.");
}

ejecutarPruebas();
