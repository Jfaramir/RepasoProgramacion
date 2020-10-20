import { Mobile } from "./repasoFundamentos2/movil";


export class MobileLibrary {
    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;
    constructor(name:string,location:string,mobiles:Mobile[]) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
    }

    
    public get gName() : string {
        return this.name;
    }
    
    public get gLocation() : string {
        return this.location;
    }
    
    public get gMobiles() : Mobile[] {
        return this.mobiles;
    }
    
    public get gTotalPrice() : number {
        return this.totalPriceCalculation();
    }

    /**
     * totalPriceCalculation
     */
    public totalPriceCalculation() {
        var auxPrecio:number = 0;
        for (let i = 0; i < this.mobiles.length; i++) {
            auxPrecio += this.mobiles[i].gPrice;
        }
        return auxPrecio;
    }
    
}

let movil1 = new Mobile("Nokia 3210","63306","Nokia",8,"gris",false,1,350);
let movil2 = new Mobile("iPhone3G","A1241","Apple",8,"negro",false,2,199);
let movil3 = new Mobile("Galaxy S10","G9750","Samsung",128,"negro",false,5,599);

var arrayMoviles:Mobile[];
arrayMoviles = [movil1,movil2,movil3];

var m1 = new MobileLibrary("Juan Pablo","Madrid",arrayMoviles);

//console.log(m1.totalPriceCalculation());