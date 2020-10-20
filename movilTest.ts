import { Mobile } from "./movil";

let movil1 = new Mobile("Nokia 3210","63306","Nokia",8,"gris",false,1,350);
let movil2 = new Mobile("iPhone3G","A1241","Apple",8,"negro",false,2,199);
let movil3 = new Mobile("Galaxy S10","G9750","Samsung",128,"negro",false,5,599);

class Moviles {
    private moviles:Mobile[];
    constructor(moviles:Mobile[]) {
        this.moviles = moviles;
    }

    /**
     * getAttributes
     */
    public getAttributes() {
        var movil = [];
        for (let i = 0; i < this.moviles.length; i++) {
            movil.push(this.moviles[i]);
        }

        return movil;
    }
}

console.log(movil1);
console.log(movil2);
console.log(movil3);

movil1.setIs5G(true);
movil1.setCameraNumber(4);

var arrayMoviles:Mobile[];
arrayMoviles = [movil1,movil2,movil3];
var m1 = new Moviles(arrayMoviles);

console.log(m1.getAttributes());

// aaaaaaaaaaaa