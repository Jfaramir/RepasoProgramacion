export class RepasoWhile {
    constructor() {
        
    }

    /**
     * imprimirImpar
     */
    public imprimirImpar(numero:number) {
        var contador:number;
        var impar:number[];
        contador = 1;
        impar = [];

        while (contador <= numero) {		  
            if (contador%2 != 0) {
                impar.push(contador);
                console.log(contador);
            }
            contador++;
        }
    }

    /**
     * hayPar
     */
    public hayPar(arrayNumeros:number[]) {
        var contador:number = 0;
        
        while (contador != arrayNumeros.length) {
            if (arrayNumeros[contador]%2 == 0) {
                return "Hay par"
            }
            contador++;
        }
    }

    /**
     * arrayRevertido
     */
    public arrayRevertido(array:string[]) {
        var reversion:string[];
        var arrayLength:number = array.length - 1;
        reversion = [];

        while (arrayLength >= 0) {
          reversion.push(array[arrayLength]);
          arrayLength--;
        }
        return reversion;
    }

}