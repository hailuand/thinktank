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
var demo_02_06;
(function (demo_02_06) {
    // Object
    var points1 = { x: 10, y: 20 };
    var x = points1.x;
    var points2;
    points2 = { x: 10, y: 20 };
    var points3 = { x: 1 };
    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function () {
            return this.h * this.w;
        }
    };
    // Type inference as calcArea should return a number, not a string.
    var apple = rectangle.calcArea();
    // Functions
    var squareIt1 = function (x) {
        return x * x;
    };
    var val1 = squareIt1(2);
    console.log('squareIt1 = ' + val1);
    val1 = squareIt1(8);
    console.log('squareIt1 = ' + val1);
    // Write functions that expect object of a certain signature
    var squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var sq1 = squareIt({ h: 10 }); // Returns 100
    var sq2 = squareIt({ h: 10, w: 40 }); // Returns 400
})(demo_02_06 || (demo_02_06 = {}));
//# sourceMappingURL=02-05-objects.js.map