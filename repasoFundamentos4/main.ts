import {Punto} from './punto';
import {Triangulo} from './triangulo';

var p1 = new Punto(3,3);
const puntoAux = new Punto(6,7);
const puntoAux2 = new Punto(6,5);
const puntoAux3 = new Punto(-6,-3);
const punto1 = new Punto(0,0);
const punto2 = new Punto(0,3);
const punto3 = new Punto(3,0);
const arrayPuntos:Punto[] = [puntoAux,puntoAux2,puntoAux3];
var t1 = new Triangulo(punto1,punto2,punto3);


//console.log(p1.toString());
//console.log(p1.distanciaAlOrigen());
//console.log(p1.calcularDistancia(puntoAux));
//console.log(p1.calcularCuadrante());
console.log(p1.calcularMasCercano(arrayPuntos));
//console.log(t1.calcularLongitudLados());



//tsc -t es5 script.ts