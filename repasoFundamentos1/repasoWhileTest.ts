import { RepasoWhile } from "./repasoWhile";

var r1 = new RepasoWhile();
const arrayNumeros:number[] = [23,5,3,31,33,32,33];
const arrayString:string[] = ["Alberto","Calvo","Pedro","Jimenez"]


r1.imprimirImpar(23);
console.log(r1.hayPar(arrayNumeros));
console.log(r1.arrayRevertido(arrayString));