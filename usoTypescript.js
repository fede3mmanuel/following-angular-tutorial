var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mensaje = "Esto es un mensaje";
var mensaje2 = "Este es otro mensaje";
var numero1 = 10;
var verdadero = true;
var numero2 = 11;
var Movil1 = /** @class */ (function () {
    function Movil1(marca, puertas, ruedas) {
        this.marca = marca;
        this.puertas = puertas;
        this.ruedas = ruedas;
    }
    Movil1.prototype.obtenerMarca = function () {
        return this.marca;
    };
    Movil1.prototype.obtenerPuertas = function () {
        return this.puertas;
    };
    Movil1.prototype.obtenerRuedas = function () {
        return this.ruedas;
    };
    Movil1.prototype.agregarMarca = function (marca) {
        this.marca = marca;
    };
    Movil1.prototype.agregarPuertas = function (puertas) {
        this.puertas = puertas;
    };
    Movil1.prototype.agregarRuedas = function (ruedas) {
        this.ruedas = ruedas;
    };
    return Movil1;
}());
var movil1 = new Movil1("ford", 4, 3);
// movil1.agregarMarca("nissan");
// movil1.agregarPuertas(4)
// movil1.agregarRuedas(4);
console.log(movil1.obtenerMarca());
console.log(movil1.obtenerPuertas());
console.log(movil1.obtenerRuedas());
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, puertas, ruedas, carga, acoplado) {
        var _this = _super.call(this, marca, puertas, ruedas) || this;
        _this.carga = carga;
        _this.acoplado = acoplado;
        return _this;
    }
    return Camion;
}(Movil1));
var camion1 = new Camion("volvo", 2, 10, 2, true);
console.log(camion1.obtenerMarca());
console.log(camion1.obtenerPuertas());
console.log(camion1.obtenerRuedas());
console.log(camion1.carga);
console.log(camion1.acoplado);
