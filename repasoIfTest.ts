import { repasoIf } from "./repasoIf";



var r1 = new repasoIf();
const fecha = new Date("2018/01/30");

console.log(r1.signoZodiaco(fecha));
console.log(r1.continente("España"));
console.log(r1.parImpar(23));