"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movil_1 = require("./movil");
var movil1 = new movil_1.Mobile("Nokia 3210", "63306", "Nokia", 8, "gris", false, 1, 350);
var movil2 = new movil_1.Mobile("iPhone3G", "A1241", "Apple", 8, "negro", false, 2, 199);
var movil3 = new movil_1.Mobile("Galaxy S10", "G9750", "Samsung", 128, "negro", false, 5, 599);
var Moviles = /** @class */ (function () {
    function Moviles(moviles) {
        this.moviles = moviles;
    }
    /**
     * getAttributes
     */
    Moviles.prototype.getAttributes = function () {
        var movil = [];
        for (var i = 0; i < this.moviles.length; i++) {
            movil.push(this.moviles[i]);
        }
        return movil;
    };
    Moviles.prototype.toString = function () {
        var infoMoviles;
        infoMoviles = "\n";
        for (var i = 0; i < this.moviles.length; i++) {
            infoMoviles = infoMoviles + "The characteristics of the mobile " + this.moviles[i].gName + " are: \n" + "Name: " + this.moviles[i].gName + "\n" +
                "Model: " + this.moviles[i].gModel + "\n" + "Trademark: " + this.moviles[i].gTrademark + "\n" + "SD Size: " + this.moviles[i].gSdSize + "\n" +
                "Color: " + this.moviles[i].gColor + "\n" + "Is 5g?: " + this.moviles[i].gIs5G + "\n" + "Number of Cameras: " + this.moviles[i].gCameraNumber + "\n\n";
        }
        return infoMoviles;
    };
    return Moviles;
}());
console.log(movil1);
console.log(movil2);
console.log(movil3);
movil1.setIs5G(true);
movil1.setCameraNumber(4);
var arrayMoviles;
arrayMoviles = [movil1, movil2, movil3];
var m1 = new Moviles(arrayMoviles);
console.log(m1.getAttributes());
console.log(m1.toString());
