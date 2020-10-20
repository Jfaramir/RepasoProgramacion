"use strict";
exports.__esModule = true;
var repasoIf_1 = require("./repasoIf");
var repasoFor_1 = require("./repasoFor");
var rI = new repasoIf_1.repasoIf();
var rF = new repasoFor_1.repasoFor();
var Punto10 = /** @class */ (function () {
    function Punto10() {
    }
    /**
     * sumaParOImpar
     */
    Punto10.prototype.sumaParOImpar = function (arrayPalabras) {
        return rI.parImpar(rF.contarCaracteres(arrayPalabras));
    };
    return Punto10;
}());
var p10 = new Punto10();
var arrayPalabras1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var arrayPalabras2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisisesto", "Brasil"];
var arrayPalabras3 = ["Venezuela", "Veneno", "Voltaje"];
console.log(p10.sumaParOImpar(arrayPalabras1));
console.log(p10.sumaParOImpar(arrayPalabras2));
console.log(p10.sumaParOImpar(arrayPalabras3));
