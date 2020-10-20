"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileLibrary = void 0;
var movil_1 = require("../repasoFundamentos2/movil");
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    Object.defineProperty(MobileLibrary.prototype, "gName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MobileLibrary.prototype, "gLocation", {
        get: function () {
            return this.location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MobileLibrary.prototype, "gMobiles", {
        get: function () {
            return this.mobiles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MobileLibrary.prototype, "gTotalPrice", {
        get: function () {
            return this.totalPrice;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * totalPriceCalculation
     */
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var auxPrecio = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            auxPrecio += this.mobiles[i].gPrice;
        }
        return auxPrecio;
    };
    /**
     * printLibrary
     */
    MobileLibrary.prototype.printLibrary = function () {
        var stringAux = "This is all my mobiles:\n";
        for (var i = 0; i < this.mobiles.length; i++) {
            stringAux = stringAux + "The characteristics of the mobile " + this.mobiles[i].gName + " are: \n" + "Name: " + this.mobiles[i].gName + "\n" +
                "Model: " + this.mobiles[i].gModel + "\n" + "Trademark: " + this.mobiles[i].gTrademark + "\n" + "SD Size: " + this.mobiles[i].gSdSize + "\n" +
                "Color: " + this.mobiles[i].gColor + "\n" + "Is 5g?: " + this.mobiles[i].gIs5G + "\n" + "Number of Cameras: " + this.mobiles[i].gCameraNumber + "\n\n";
        }
        stringAux += "Price overall: " + this.totalPriceCalculation();
        return stringAux;
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
var movil1 = new movil_1.Mobile("Nokia 3210", "63306", "Nokia", 8, "gris", false, 1, 350);
var movil2 = new movil_1.Mobile("iPhone3G", "A1241", "Apple", 8, "negro", false, 2, 199);
var movil3 = new movil_1.Mobile("Galaxy S10", "G9750", "Samsung", 128, "negro", false, 5, 599);
var arrayMoviles;
arrayMoviles = [movil1, movil2, movil3];
var m1 = new MobileLibrary("Juan Pablo", "Madrid", arrayMoviles);
//console.log(m1.totalPriceCalculation());
console.log(m1.printLibrary());
