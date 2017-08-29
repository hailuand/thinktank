module Objects {
  var points1 = {
    x: 1,
    y: 1
  };

  var x = points1.x;
  var points2 = {};
  points2 = {
    x: 10, y: 20
  };

  var points3: Object = {
    x: 1
  };

  var rectangle = {
    h: 10,
    w: 20,
    calcArea: function () {
      return this.h * this.w;
    }
  };

  console.log(rectangle.calcArea());

  var squareIt = function(rect: { h: number, w?: number }) { // defining a faux interface for the object squareIt expects
    if(!rect.w) {
      return rect.h * rect.h;
    }
    else {
      return (rect.h * rect.w);
    }
  };
}