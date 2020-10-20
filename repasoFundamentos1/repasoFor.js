"use strict";
exports.__esModule = true;
exports.repasoFor = void 0;
var repasoFor = /** @class */ (function () {
    function repasoFor() {
    }
    /**
     * colorEnArcoiris
     */
    repasoFor.prototype.colorEnArcoiris = function (arrayColores) {
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
    repasoFor.prototype.contarCaracteres = function (arrayPalabras) {
        var contadorCaracteres = 0;
        for (var i = 0; i < arrayPalabras.length; i++) {
            contadorCaracteres += arrayPalabras[i].length;
        }
        return contadorCaracteres;
    };
    return repasoFor;
}());
exports.repasoFor = repasoFor;
