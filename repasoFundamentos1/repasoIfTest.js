"use strict";
exports.__esModule = true;
var repasoIf_1 = require("./repasoIf");
var r1 = new repasoIf_1.repasoIf();
var fecha = new Date("2018/01/30");
var arrayReversible = ["super", "heroe", "destrozo"];
console.log(r1.signoZodiaco(fecha));
console.log(r1.continente("España"));
console.log(r1.parImpar(23));
