import { RepasoIf } from "./repasoIf";



var r1 = new RepasoIf();
const fecha = new Date("2018/01/30");

console.log(r1.signoZodiaco(fecha));
console.log(r1.continente("España"));
console.log(r1.parImpar(23));