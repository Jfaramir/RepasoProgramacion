"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepasoFor = void 0;
var RepasoFor = /** @class */ (function () {
    function RepasoFor() {
    }
    /**
     * colorEnArcoiris
     */
    RepasoFor.prototype.colorEnArcoiris = function (arrayColores) {
        var arrayAux;
        arrayAux = [];
        for (var i = 0; i < arrayColores.length; i++) {
            if (arrayColores[i] == "violeta" || arrayColores[i] == "azul" || arrayColores[i] == "cian" || arrayColores[i] == "verde" || arrayColores[i] == "amarillo" ||
                arrayColores[i] == "naranja" || arrayColores[i] == "rojo") {
                arrayAux.push(arrayColores[i] + " está");
            }
            else {
                arrayAux.push(arrayColores[i] + " no está");
            }
        }
        return arrayAux;
    };
    /**
     * contarCaracteres
     */
    RepasoFor.prototype.contarCaracteres = function (arrayPalabras) {
        var contadorCaracteres = 0;
        for (var i = 0; i < arrayPalabras.length; i++) {
            contadorCaracteres += arrayPalabras[i].length;
        }
        return contadorCaracteres;
    };
    /**
     * todosTienenM
     */
    RepasoFor.prototype.todosTienenM = function (array) {
        var contador = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i].charAt(0) == "M") {
                contador++;
            }
        }
        if (contador == array.length) {
            return true;
        }
        return false;
    };
    return RepasoFor;
}());
exports.RepasoFor = RepasoFor;
