interface IPoint {
  getDist(): number;
}

module Shapes {
  // Class
  export class Point implements IPoint {
    // Constructor
    constructor(public x: number, public y: number) {}

    // Instance member
    getDist() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    // Static member
    static origin = new Point(0, 0);
  }
}

var p: IPoint = new Shapes.Point(3, 4);
var dist: number = p.getDist();