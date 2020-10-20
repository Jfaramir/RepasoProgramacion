export class Mobile {
    private name:string;
    private model:string;
    private trademark:string;
    private sdSize:number;
    private color:string;
    private is5G:boolean;
    private cameraNumber:number;
    private price:number
    constructor(name:string,model:string,trademark:string,sdSize:number,color:string,is5G:boolean,cameraNumber:number,price:number) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    
    public get gName() : string {
        return this.name;
    }
    
    public get gModel() : string {
        return this.model;
    }
    
    public get gTrademark() : string {
        return this.trademark;
    }
    
    public get gSdSize() : number {
        return this.sdSize;
    }
    
    public get gColor() : string {
        return this.color;
    }
    
    public get gIs5G() : boolean {
        return this.is5G
    }
    
    public get gCameraNumber() : number {
        return this.cameraNumber;
    }
    
    public get gPrice() : number {
        return this.price
    }
    
    public setName(newName : string) {
        this.name = newName;
    }
    
    public setModel(newModel : string) {
        this.model = newModel;
    }
    
    public setTrademark(newTrademark : string) {
        this.trademark = newTrademark;
    }
    
    public setSdSize(newSdSize : number) {
        this.sdSize = newSdSize;
    }
    
    public setColor(newColor : string) {
        this.color = newColor;
    }

    public setIs5G(newIs5G : boolean) {
        this.is5G = newIs5G;
    }

    public setCameraNumber(newCameraNumber : number) {
        this.cameraNumber = newCameraNumber;
    }
    
    public setPrize(newPrice : number) {
        this.price = newPrice;
    }

    public toString(arrayMoviles:Mobile[]):string {
        var infoMoviles:string;
        infoMoviles = "\n";
        for (let i = 0; i < arrayMoviles.length; i++) {
                infoMoviles = infoMoviles + "The characteristics of the mobile " + arrayMoviles[i].gName +" are: \n" + "Name: " + arrayMoviles[i].gName + "\n" + 
                    "Model: " + arrayMoviles[i].gModel + "\n" + "Trademark: " + arrayMoviles[i].gTrademark + "\n" + "SD Size: " + arrayMoviles[i].gSdSize + "\n" +
                    "Color: " + arrayMoviles[i].gColor + "\n" + "Is 5g?: " + arrayMoviles[i].gIs5G + "\n" + "Number of Cameras: " + arrayMoviles[i].gCameraNumber + "\n\n";
        }
        return infoMoviles;
    }

}

let movil1 = new Mobile("Nokia 3210","63306","Nokia",8,"gris",false,1,350);
let movil2 = new Mobile("iPhone3G","A1241","Apple",8,"negro",false,2,199);
let movil3 = new Mobile("Galaxy S10","G9750","Samsung",128,"negro",false,5,599);

//console.log(movil1);
//console.log(movil2);
//console.log(movil3);

//movil1.setIs5G(true);
//movil1.setCameraNumber(4);

var arrayMoviles:Mobile[];
arrayMoviles = [movil1,movil2,movil3];

//console.log(arrayMoviles);
//console.log(movil1.toString(arrayMoviles));
