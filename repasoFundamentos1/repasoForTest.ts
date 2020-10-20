import { repasoFor } from "./repasoFor";



var r1 = new repasoFor();
const arrayColores:string[] = ["rojo","azul","morado","amarillo"];
const arrayPalabras1:string[] = ["coche","camion","moto","caballo"];
const arrayPalabras2:string[] = ["el","nombre","del","viento"];

console.log(r1.colorEnArcoiris(arrayColores));
console.log(r1.contarCaracteres(arrayPalabras1));
console.log(r1.contarCaracteres(arrayPalabras2));