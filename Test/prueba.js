const assert = require("assert");

function convertirKilometrosAMetros(kilometros) {
    return kilometros * 1000;
}

function ejecutarPruebas() {
    assert.strictEqual(convertirKilometrosAMetros(1), 1000);
    assert.strictEqual(convertirKilometrosAMetros(2.5), 2500);
    assert.strictEqual(convertirKilometrosAMetros(0), 0);

    console.log("Todas las pruebas pasaron correctamente.");
}

ejecutarPruebas();
