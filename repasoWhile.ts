export class repasoWhile {
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
            }
            contador++;
        }
        return impar;
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


}