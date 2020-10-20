import { Mobile } from "../repasoFundamentos2/movil";


export class MobileLibrary {
    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;
    constructor(name:string,location:string,mobiles:Mobile[]) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
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
        return this.totalPrice;
    }

    /**
     * totalPriceCalculation
     */
    private totalPriceCalculation() {
        var auxPrecio:number = 0;
        for (let i = 0; i < this.mobiles.length; i++) {
            auxPrecio += this.mobiles[i].gPrice;
        }
        return auxPrecio;
    }

    /**
     * printLibrary
     */
    public printLibrary() {
        var stringAux:string = "This is all my mobiles:\n";
        for (let i = 0; i < this.mobiles.length; i++) {
                stringAux = stringAux + "The characteristics of the mobile " + this.mobiles[i].gName +" are: \n" + "Name: " + this.mobiles[i].gName + "\n" + 
                    "Model: " + this.mobiles[i].gModel + "\n" + "Trademark: " + this.mobiles[i].gTrademark + "\n" + "SD Size: " + this.mobiles[i].gSdSize + "\n" +
                    "Color: " + this.mobiles[i].gColor + "\n" + "Is 5g?: " + this.mobiles[i].gIs5G + "\n" + "Number of Cameras: " + this.mobiles[i].gCameraNumber + "\n\n";
        }
        stringAux += "Price overall: " + this.totalPriceCalculation();

        return stringAux;
    }
    
}

let movil1 = new Mobile("Nokia 3210","63306","Nokia",8,"gris",false,1,350);
let movil2 = new Mobile("iPhone3G","A1241","Apple",8,"negro",false,2,199);
let movil3 = new Mobile("Galaxy S10","G9750","Samsung",128,"negro",false,5,599);

var arrayMoviles:Mobile[];
arrayMoviles = [movil1,movil2,movil3];

var m1 = new MobileLibrary("Juan Pablo","Madrid",arrayMoviles);

//console.log(m1.totalPriceCalculation());
console.log(m1.printLibrary());