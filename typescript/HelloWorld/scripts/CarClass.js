/**
 * Created by andreashailu on 12/28/16.
 */
var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Car = (function () {
    function Car(_engine) {
        this._engine = _engine;
    }
    Car.prototype.getEngine = function () {
        return this._engine;
    };
    Car.prototype.setEngine = function (value) {
        if (!value) {
            throw 'Engine is undefined!';
        }
        this._engine = value;
    };
    Car.prototype.start = function () {
        alert('Car engine started! ' + this._engine.engineType);
    };
    return Car;
}());
window.onload = function () {
    var engine = new Engine(10, 'V8');
    var car = new Car(engine);
    alert(car.getEngine().engineType);
    car.start();
};
//# sourceMappingURL=CarClass.js.map