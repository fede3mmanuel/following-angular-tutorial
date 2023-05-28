
let mensaje = "Esto es un mensaje"

let mensaje2: string = "Este es otro mensaje"

let numero1: number = 10;
let verdadero: boolean = true;

let numero2: number = 11;

class Movil1 {
    private marca!: String;
    private puertas!: number;
    private ruedas!: number;

    constructor(marca: String, puertas: number, ruedas: number){
        this.marca = marca;
        this.puertas = puertas;
        this.ruedas = ruedas;
    }
    obtenerMarca(){
        return this.marca
    }

    obtenerPuertas(){
        return this.puertas
    }

    obtenerRuedas(){
        return this.ruedas
    }

    agregarMarca(marca: string){
        this.marca = marca
    }

    agregarPuertas(puertas:number){
        this.puertas = puertas
    }

    agregarRuedas(ruedas:number){
        this.ruedas =ruedas
    }

}

let movil1: Movil1 = new Movil1("ford", 4, 3);

// movil1.agregarMarca("nissan");
// movil1.agregarPuertas(4)
// movil1.agregarRuedas(4);

console.log(movil1.obtenerMarca());
console.log(movil1.obtenerPuertas());
console.log(movil1.obtenerRuedas());

class Camion extends Movil1{
    carga: Number;
    acoplado: boolean;

    constructor(marca: String, puertas: number, ruedas: number, carga: number, acoplado: boolean){
        super(marca, puertas, ruedas);
        this.carga = carga;
        this.acoplado = acoplado;
    }
}

let camion1: Camion = new Camion("volvo", 2, 10, 2, true);

console.log(camion1.obtenerMarca());
console.log(camion1.obtenerPuertas());
console.log(camion1.obtenerRuedas());
console.log(camion1.carga);
console.log(camion1.acoplado);
