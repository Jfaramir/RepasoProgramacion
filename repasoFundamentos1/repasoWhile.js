"use strict";
exports.__esModule = true;
exports.repasoWhile = void 0;
var repasoWhile = /** @class */ (function () {
    function repasoWhile() {
    }
    /**
     * imprimirImpar
     */
    repasoWhile.prototype.imprimirImpar = function (numero) {
        var contador;
        var impar;
        contador = 1;
        impar = [];
        while (contador <= numero) {
            if (contador % 2 != 0) {
                impar.push(contador);
            }
            contador++;
        }
        return impar;
    };
    /**
     * hayPar
     */
    repasoWhile.prototype.hayPar = function (arrayNumeros) {
        var contador = 0;
        while (contador != arrayNumeros.length) {
            if (arrayNumeros[contador] % 2 == 0) {
                return "Hay par";
            }
            console.log(arrayNumeros[contador]);
            contador++;
        }
    };
    return repasoWhile;
}());
exports.repasoWhile = repasoWhile;
