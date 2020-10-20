"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Object.defineProperty(Mobile.prototype, "gName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mobile.prototype, "gModel", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mobile.prototype, "gTrademark", {
        get: function () {
            return this.trademark;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mobile.prototype, "gSdSize", {
        get: function () {
            return this.sdSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mobile.prototype, "gColor", {
        get: function () {
            return this.color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mobile.prototype, "gIs5G", {
        get: function () {
            return this.is5G;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mobile.prototype, "gCameraNumber", {
        get: function () {
            return this.cameraNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mobile.prototype, "gPrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    Mobile.prototype.setName = function (newName) {
        this.name = newName;
    };
    Mobile.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    Mobile.prototype.setTrademark = function (newTrademark) {
        this.trademark = newTrademark;
    };
    Mobile.prototype.setSdSize = function (newSdSize) {
        this.sdSize = newSdSize;
    };
    Mobile.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    Mobile.prototype.setIs5G = function (newIs5G) {
        this.is5G = newIs5G;
    };
    Mobile.prototype.setCameraNumber = function (newCameraNumber) {
        this.cameraNumber = newCameraNumber;
    };
    Mobile.prototype.setPrize = function (newPrice) {
        this.price = newPrice;
    };
    Mobile.prototype.toString = function (arrayMoviles) {
        var infoMoviles;
        infoMoviles = "\n";
        for (var i = 0; i < arrayMoviles.length; i++) {
            infoMoviles = infoMoviles + "The characteristics of the mobile " + arrayMoviles[i].gName + " are: \n" + "Name: " + arrayMoviles[i].gName + "\n" +
                "Model: " + arrayMoviles[i].gModel + "\n" + "Trademark: " + arrayMoviles[i].gTrademark + "\n" + "SD Size: " + arrayMoviles[i].gSdSize + "\n" +
                "Color: " + arrayMoviles[i].gColor + "\n" + "Is 5g?: " + arrayMoviles[i].gIs5G + "\n" + "Number of Cameras: " + arrayMoviles[i].gCameraNumber + "\n\n";
        }
        return infoMoviles;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
var movil1 = new Mobile("Nokia 3210", "63306", "Nokia", 8, "gris", false, 1, 350);
var movil2 = new Mobile("iPhone3G", "A1241", "Apple", 8, "negro", false, 2, 199);
var movil3 = new Mobile("Galaxy S10", "G9750", "Samsung", 128, "negro", false, 5, 599);
//console.log(movil1);
//console.log(movil2);
//console.log(movil3);
//movil1.setIs5G(true);
//movil1.setCameraNumber(4);
var arrayMoviles;
arrayMoviles = [movil1, movil2, movil3];
//console.log(arrayMoviles);
//console.log(movil1.toString(arrayMoviles));
