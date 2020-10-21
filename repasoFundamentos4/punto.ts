export class Punto {
    private x:number;
    private y:number;
    constructor(x:number,y:number) {
        this.x = x;
        this.y = y;
    }
    
    public get gX() : number {
        return this.x;
    }
    
    public get gY() : number {
        return this.y;
    }
    
    public setX(newX : number) {
        this.x = newX;
    }
    
    public setY(newY : number) {
        this.y = newY;
    }
    
    /**
     * toString
     */
    public toString() {
        var stringAux:string= "(";
        stringAux += this.x + "," + this.y + ")"
        return stringAux;
    }

    /**
     * distanciaAlOrigen
     */
    public distanciaAlOrigen():number {
        return Math.sqrt(Math.abs((((this.x - 0) * (this.x - 0)) + ((this.y - 0) * (this.y - 0)))));
    }

    /**
     * calcularDistancia
     */
    public calcularDistancia(otroPunto:Punto):number {
        return Math.sqrt(Math.abs((((this.x - otroPunto.x) * (this.x - otroPunto.x)) + ((this.y - otroPunto.y) * (this.y - otroPunto.y)))));
    }

    /**
     * calcularCuadrante
     */
    public calcularCuadrante() {
        if (this.x == 0 && this.y == 0) {
            return 0;
        }else if (this.x > 0 && this.y > 0) {
            return 1;
        }else if (this.x < 0 && this.y > 0) {
            return 2;
        }else if (this.x < 0 && this.y < 0) {
            return 3;
        }else if (this.x > 0 && this.y < 0) {
            return 4;
        }
    }

    /**
     * calcularMasCercano
     */
    public calcularMasCercano(puntos:Punto[]) {
        var numeroAux:number = 0;
        var distanciaMenor:number = 0;
        var numeroPuntoMasCercano:number = 0;
        var firstTime:boolean = true;
        for (let i = 0; i < puntos.length; i++) {
            if (firstTime == true) {
                distanciaMenor = Math.sqrt(Math.abs((((this.x - puntos[i].x) * (this.x - puntos[i].x)) + ((this.y - puntos[i].y) * (this.y - puntos[i].y)))));
                firstTime = false;
            }
            numeroAux = Math.sqrt(Math.abs((((this.x - puntos[i].x) * (this.x - puntos[i].x)) + ((this.y - puntos[i].y) * (this.y - puntos[i].y)))));
            if (numeroAux <= distanciaMenor) {
                distanciaMenor = numeroAux;
                numeroPuntoMasCercano = i;
            }
        }

        var puntoAux = new Punto(0,0);
        puntoAux.x = puntos[numeroPuntoMasCercano].x;
        puntoAux.y = puntos[numeroPuntoMasCercano].y;
        return puntoAux;
    }

    
}