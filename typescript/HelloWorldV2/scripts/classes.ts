module Classes {
  class Engine {
    constructor(public horsePower: number, public engineType: string) { } // variables implicitly defined!
  }

  class Car {
    private _engine: Engine;

    get engine(): Engine {
      return this._engine;
    }

    set engine(value: Engine) {
      if(!value) {
        throw 'Engine value must be defined!';
      }

      this._engine = value;
    }

    constructor(engine: Engine) {
      this._engine = engine;
    }

    public start() : void {
      alert('Car engine started: ' + this._engine.engineType);
    }
  }
}