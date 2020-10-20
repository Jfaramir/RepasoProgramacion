import { Mobile } from "../repasoFundamentos2/movil";
import { MobileLibrary } from "./libreriaMoviles";


let movil1 = new Mobile("Nokia 3210","63306","Nokia",8,"gris",false,1,350);
let movil2 = new Mobile("iPhone3G","A1241","Apple",8,"negro",false,2,199);
let movil3 = new Mobile("Galaxy S10","G9750","Samsung",128,"negro",false,5,599);
let movil4 = new Mobile("Huawei","P9808","Huawei",128,"rojo",true,4,600);

var arrayMoviles:Mobile[];
arrayMoviles = [movil1,movil2,movil3,movil4];

var m1 = new MobileLibrary("Juan Pablo","Madrid",arrayMoviles);

console.log(m1.gLocation);
console.log(m1.gName);
console.log(m1.gTotalPrice);
console.log(m1.gMobiles);
//console.log(m1.gtotalPriceCalculation());
console.log(m1.printLibrary());