import { RepasoIf } from "./repasoIf";
import { RepasoFor } from "./repasoFor";

var rI = new RepasoIf();
var rF = new RepasoFor();

class Punto10 {
    constructor() {
        
    }

    /**
     * sumaParOImpar
     */
    public sumaParOImpar(arrayPalabras:string[]) {
        return rI.parImpar(rF.contarCaracteres(arrayPalabras));
    }
}

var p10 = new Punto10();
const arrayPalabras1:string[] = ["Casa","Coche","Ciudad","Cesta"];
const arrayPalabras2:string[] = ["Barco","Baca","Bicicleta","Balon","Bisisesto","Brasil"];
const arrayPalabras3:string[] = ["Venezuela","Veneno","Voltaje"];

console.log(p10.sumaParOImpar(arrayPalabras1));
console.log(p10.sumaParOImpar(arrayPalabras2));
console.log(p10.sumaParOImpar(arrayPalabras3));