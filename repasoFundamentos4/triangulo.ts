import {Punto} from './punto';

export class Triangulo {
    private punto1:Punto;
    private punto2:Punto;
    private punto3:Punto;
    constructor(punto1:Punto,punto2:Punto,punto3:Punto) {
        this.punto1 = punto1;
        this.punto2 = punto2;
        this.punto3 = punto3;
    }
    
/*     public get gPunto1() : Punto {
        return this.punto1;
    }

    public get gPunto2() : Punto {
        return this.punto2;
    }
    
    public get gPunto3() : Punto {
        return this.punto3;
    }
    
    public setPunto1(newPunto : Punto) {
        this.punto1 = newPunto;
    }

    public setPunto2(newPunto : Punto) {
        this.punto2 = newPunto;
    }
    
    public setPunto3(newPunto : Punto) {
        this.punto3 = newPunto;
    } */

    /**
     * calcularLongitudLados
     */
    public calcularLongitudLados():number[] {
        var longitudAux1:number = 0;
        var longitudAux2:number = 0;
        var longitudAux3:number = 0;
        var arrayLados:number[] = [];
        
        longitudAux1 = this.punto1.calcularDistancia(this.punto2);
        longitudAux2 = this.punto2.calcularDistancia(this.punto3);
        longitudAux3 = this.punto3.calcularDistancia(this.punto1);
        arrayLados.push(longitudAux1,longitudAux2,longitudAux3);

        return arrayLados;
    }
}