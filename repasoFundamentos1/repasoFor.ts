export class repasoFor {
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

    

}

