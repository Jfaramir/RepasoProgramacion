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
        
        longitudAux1 = Math.sqrt(Math.abs((((this.punto1.gX - this.punto2.gX) * (this.punto1.gX - this.punto2.gX)) + ((this.punto1.gY - this.punto2.gY) * (this.punto1.gY - this.punto2.gY)))));
        longitudAux2 = Math.sqrt(Math.abs((((this.punto2.gX - this.punto3.gX) * (this.punto2.gX - this.punto3.gX)) + ((this.punto2.gY - this.punto3.gY) * (this.punto2.gY - this.punto3.gY)))));
        longitudAux3 = Math.sqrt(Math.abs((((this.punto3.gX - this.punto1.gX) * (this.punto3.gX - this.punto1.gX)) + ((this.punto3.gY - this.punto1.gY) * (this.punto3.gY - this.punto1.gY)))));
        arrayLados.push(longitudAux1,longitudAux2,longitudAux3);

        return arrayLados;
    }
}