export class RepasoFor {
    constructor() {
        
    }

    /**
     * colorEnArcoiris
     */
    public colorEnArcoiris(arrayColores:string[]) {
        var arrayAux:string[];
        arrayAux = [];

        for (let i = 0; i < arrayColores.length; i++) {
            if (arrayColores[i] == "violeta" || arrayColores[i] == "azul" || arrayColores[i] == "cian" || arrayColores[i] == "verde" || arrayColores[i] == "amarillo" ||
                arrayColores[i] == "naranja" || arrayColores[i] == "rojo") {
                arrayAux.push(arrayColores[i] + " está");
            }else{
                arrayAux.push(arrayColores[i] + " no está");
            }
        }
        return arrayAux;
    }

    /**
     * contarCaracteres
     */
    public contarCaracteres(arrayPalabras:string[]) {
        var contadorCaracteres:number = 0;

        for (let i = 0; i < arrayPalabras.length; i++) {
            contadorCaracteres += arrayPalabras[i].length;
        }

        return contadorCaracteres;
    }

    /**
     * todosTienenM
     */
    public todosTienenM(array:string[]) {
        var contador:number = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].charAt(0) == "M") {
                contador++
            }
        }

        if (contador == array.length) {
            return true;
        }
        
        return false;
    }

}

