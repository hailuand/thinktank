/**
 * Created by andreashailu on 12/28/16.
 */

class Engine {
  constructor(public horsePower: number, public engineType: string) {}
}

class Car {
  constructor(private _engine: Engine) {}

  getEngine(): Engine {
    return this._engine;
  }

  setEngine(value: Engine) {
    if(!value) {
      throw 'Engine is undefined!';
    }
    this._engine = value;
  }

  start(): void {
    alert('Car engine started! ' + this._engine.engineType);
  }
}

window.onload = function() {
  var engine: Engine = new Engine(10, 'V8');
  var car: Car = new Car(engine);
  alert(car.getEngine().engineType);
  car.start();
};