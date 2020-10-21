"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepasoWhile = void 0;
var RepasoWhile = /** @class */ (function () {
    function RepasoWhile() {
    }
    /**
     * imprimirImpar
     */
    RepasoWhile.prototype.imprimirImpar = function (numero) {
        var contador;
        var impar;
        contador = 1;
        impar = [];
        while (contador <= numero) {
            if (contador % 2 != 0) {
                impar.push(contador);
                console.log(contador);
            }
            contador++;
        }
    };
    /**
     * hayPar
     */
    RepasoWhile.prototype.hayPar = function (arrayNumeros) {
        var contador = 0;
        while (contador != arrayNumeros.length) {
            if (arrayNumeros[contador] % 2 == 0) {
                return "Hay par";
            }
            contador++;
        }
    };
    /**
     * arrayRevertido
     */
    RepasoWhile.prototype.arrayRevertido = function (array) {
        var reversion;
        var arrayLength = array.length - 1;
        reversion = [];
        while (arrayLength >= 0) {
            reversion.push(array[arrayLength]);
            arrayLength--;
        }
        return reversion;
    };
    return RepasoWhile;
}());
exports.RepasoWhile = RepasoWhile;
