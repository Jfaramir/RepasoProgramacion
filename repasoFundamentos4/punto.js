"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Punto.prototype, "gX", {
        get: function () {
            return this.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Punto.prototype, "gY", {
        get: function () {
            return this.y;
        },
        enumerable: false,
        configurable: true
    });
    Punto.prototype.setX = function (newX) {
        this.x = newX;
    };
    Punto.prototype.setY = function (newY) {
        this.y = newY;
    };
    /**
     * toString
     */
    Punto.prototype.toString = function () {
        var stringAux = "(";
        stringAux += this.x + "," + this.y + ")";
        return stringAux;
    };
    /**
     * distanciaAlOrigen
     */
    Punto.prototype.distanciaAlOrigen = function () {
        return Math.sqrt(Math.abs((((this.x - 0) * (this.x - 0)) + ((this.y - 0) * (this.y - 0)))));
    };
    /**
     * calcularDistancia
     */
    Punto.prototype.calcularDistancia = function (otroPunto) {
        return Math.sqrt(Math.abs((((this.x - otroPunto.x) * (this.x - otroPunto.x)) + ((this.y - otroPunto.y) * (this.y - otroPunto.y)))));
    };
    /**
     * calcularCuadrante
     */
    Punto.prototype.calcularCuadrante = function () {
        if (this.x == 0 && this.y == 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else if (this.x > 0 && this.y < 0) {
            return 4;
        }
    };
    /**
     * calcularMasCercano
     */
    Punto.prototype.calcularMasCercano = function (puntos) {
        var numeroAux = 0;
        var distanciaMenor = 0;
        var numeroPuntoMasCercano = 0;
        var firstTime = true;
        for (var i = 0; i < puntos.length; i++) {
            if (firstTime == true) {
                distanciaMenor = Math.sqrt(Math.abs((((this.x - puntos[i].x) * (this.x - puntos[i].x)) + ((this.y - puntos[i].y) * (this.y - puntos[i].y)))));
                firstTime = false;
            }
            numeroAux = Math.sqrt(Math.abs((((this.x - puntos[i].x) * (this.x - puntos[i].x)) + ((this.y - puntos[i].y) * (this.y - puntos[i].y)))));
            if (numeroAux <= distanciaMenor) {
                distanciaMenor = numeroAux;
                numeroPuntoMasCercano = i;
            }
        }
        var stringAux = "(";
        stringAux += puntos[numeroPuntoMasCercano].x + "," + puntos[numeroPuntoMasCercano].y + ")";
        return stringAux;
    };
    return Punto;
}());
exports.Punto = Punto;
