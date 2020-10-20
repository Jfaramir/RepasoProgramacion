"use strict";
exports.__esModule = true;
exports.repasoIf = void 0;
var repasoIf = /** @class */ (function () {
    function repasoIf() {
    }
    /**
      * signoZodiaco
      */
    repasoIf.prototype.signoZodiaco = function (fechaNacimiento) {
        if ((fechaNacimiento.getMonth() + 1 == 12 && fechaNacimiento.getDate() >= 22) || (fechaNacimiento.getMonth() + 1 == 1 && fechaNacimiento.getDate() <= 20)) {
            return "Capricornio";
        }
        else if ((fechaNacimiento.getMonth() + 1 == 1 && fechaNacimiento.getDate() >= 21) || (fechaNacimiento.getMonth() + 1 == 2 && fechaNacimiento.getDate() <= 19)) {
            return "Acuario";
        }
        else if ((fechaNacimiento.getMonth() + 1 == 2 && fechaNacimiento.getDate() >= 20) || (fechaNacimiento.getMonth() + 1 == 3 && fechaNacimiento.getDate() <= 20)) {
            return "Piscis";
        }
        else if ((fechaNacimiento.getMonth() + 1 == 3 && fechaNacimiento.getDate() >= 21) || (fechaNacimiento.getMonth() + 1 == 4 && fechaNacimiento.getDate() <= 20)) {
            return "Aries";
        }
        else if ((fechaNacimiento.getMonth() + 1 == 4 && fechaNacimiento.getDate() >= 21) || (fechaNacimiento.getMonth() + 1 == 5 && fechaNacimiento.getDate() <= 21)) {
            return "Tauro";
        }
        else if ((fechaNacimiento.getMonth() + 1 == 5 && fechaNacimiento.getDate() >= 22) || (fechaNacimiento.getMonth() + 1 == 6 && fechaNacimiento.getDate() <= 21)) {
            return "Geminis";
        }
        else if ((fechaNacimiento.getMonth() + 1 == 6 && fechaNacimiento.getDate() >= 21) || (fechaNacimiento.getMonth() + 1 == 7 && fechaNacimiento.getDate() <= 23)) {
            return "Cancer";
        }
        else if ((fechaNacimiento.getMonth() + 1 == 7 && fechaNacimiento.getDate() >= 24) || (fechaNacimiento.getMonth() + 1 == 8 && fechaNacimiento.getDate() <= 23)) {
            return "Leo";
        }
        else if ((fechaNacimiento.getMonth() + 1 == 8 && fechaNacimiento.getDate() >= 24) || (fechaNacimiento.getMonth() + 1 == 9 && fechaNacimiento.getDate() <= 23)) {
            return "Virgo";
        }
        else if ((fechaNacimiento.getMonth() + 1 == 9 && fechaNacimiento.getDate() >= 24) || (fechaNacimiento.getMonth() + 1 == 10 && fechaNacimiento.getDate() <= 23)) {
            return "Libra";
        }
        else if ((fechaNacimiento.getMonth() + 1 == 10 && fechaNacimiento.getDate() >= 24) || (fechaNacimiento.getMonth() + 1 == 11 && fechaNacimiento.getDate() <= 22)) {
            return "Escorpio";
        }
        else if ((fechaNacimiento.getMonth() + 1 == 11 && fechaNacimiento.getDate() >= 23) || (fechaNacimiento.getMonth() + 1 == 12 && fechaNacimiento.getDate() <= 21)) {
            return "Sagitario";
        }
    };
    /**
     * continente
     */
    repasoIf.prototype.continente = function (pais) {
        if (pais == "España" || pais == "Portugal" || pais == "Francia" || pais == "Alemania" || pais == "Grecia") {
            return "Europa";
        }
        else if (pais == "China" || pais == "India" || pais == "Japon" || pais == "Tailandia" || pais == "Vietnam") {
            return "Asia";
        }
        else if (pais == "Marruecos" || pais == "Senegal" || pais == "Egipto" || pais == "Zambia" || pais == "Argelia") {
            return "Africa";
        }
        else if (pais == "Estados unidos" || pais == "Panama" || pais == "Ecuador" || pais == "Mexico" || pais == "Peru") {
            return "America";
        }
        else if (pais == "Australia" || pais == "Palaos" || pais == "Nauru" || pais == "Tonga" || pais == "Fiyi") {
            return "Oceania";
        }
    };
    /**
     * parImpar
     */
    repasoIf.prototype.parImpar = function (numero) {
        if (numero % 2 == 0) {
            return "El número es par";
        }
        else {
            return "El número es impar";
        }
    };
    return repasoIf;
}());
exports.repasoIf = repasoIf;
