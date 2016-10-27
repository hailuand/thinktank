/**
 * Created by andreashailu on 10/26/16.
 */

class Car {
  engine: string;

  constructor(engine: string) {
    this.engine = engine;
  }

  start() {
    alert('Engine started: ' + this.engine);
  }

  stop() {
    alert('Engine stopped: ' + this.engine);
  }
}

window.onload = function() {
  var car = new Car('v8');
  car.start();
  car.stop();

};