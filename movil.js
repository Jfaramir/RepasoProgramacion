"use strict";
exports.__esModule = true;
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
    Mobile.prototype.setIs5G = function (newIs5G) {
        this.is5G = newIs5G;
    };
    Mobile.prototype.setCameraNumber = function (newCameraNumber) {
        this.cameraNumber = newCameraNumber;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
