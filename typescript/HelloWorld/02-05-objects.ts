/**
 * Created by andreashailu on 11/19/16.
 *
 * Object types:
 * Examples: Functions, class, module, interface, and literal types
 * May contain:
 *  - Properties
 *    - public or private
 *    - required or optional
 *  - Call signatures
 *  - Construct sigantures
 *  - Index signatures
 */

module demo_02_06 {
  // Object
  var points1 = { x: 10, y: 20 };
  var x = points1.x;

  var points2: {};
  points2 = { x:10, y: 20 };

  var points3: Object = { x: 1 };
  var rectangle = {
    h: 10,
    w: 20,
    calcArea: function() {
      return this.h * this.w;
    }
  };
  // Type inference as calcArea should return a number, not a string.
  var apple = rectangle.calcArea();
  // Functions
  var squareIt1 = function(x: number) {
    return x * x;
  };

  var val1 = squareIt1(2);
  console.log('squareIt1 = ' + val1);
  val1 = squareIt1(8);
  console.log('squareIt1 = ' + val1);
  // Write functions that expect object of a certain signature
  var squareIt = function(
    rect: { h: number; w?: number; }) {
    if (rect.w === undefined) {
      return rect.h * rect.h;
    }
    return rect.h * rect.w;
  };

  var sq1: number = squareIt({h: 10}); // Returns 100
  var sq2: number = squareIt({h: 10, w: 40}); // Returns 400
}

