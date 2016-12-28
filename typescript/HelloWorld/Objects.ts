/**
 * Created by andreashailu on 11/11/16.
 */

module demo_02_06 {
  // Object
  var points1 = {x: 10, y: 20 };
  var x = points1.x;

  var points2 : {};
  points2 = {x: 10, y: 20};

  var points3: Object = { x: 1 };

  var rectangle= {
    h: 10,
    w: 20,
    calcArea: function() {
      return this.h * this.w;
    }
  };

  var squareIt1 = function(x: number) {
    return x * x;
  };

  var val1 = squareIt1(2);
  console.log('squareIt1 = ' + val1);
  val1 = squareIt1(8);
  console.log('squareIt1 = ' + val1);

  var squareIt = function(
    rect: { h: number; w?: number; }) {
    // '?' means w is optional
    if(rect.w === undefined) {
      return rect.h * rect.h;
    }
  };

  var sq1 = squareIt({ h: 10 });
  var sq2 = squareIt({ h: 10, w: 40 })

}

