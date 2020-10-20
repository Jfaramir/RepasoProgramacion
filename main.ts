import {Punto} from './punto';

var p1 = new Punto(3,3);
const puntoAux = new Punto(6,7);
const puntoAux2 = new Punto(6,5);
const puntoAux3 = new Punto(-6,-3);
const arrayPuntos:Punto[] = [puntoAux,puntoAux2,puntoAux3];


console.log(p1.toString());
console.log(p1.distanciaAlOrigen());
console.log(p1.calcularDistancia(puntoAux));
console.log(p1.calcularCuadrante());
console.log(p1.calcularMasCercano(arrayPuntos));

