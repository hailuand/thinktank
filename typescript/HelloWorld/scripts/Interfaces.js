/**
 * Created by andreashailu on 12/27/16.
 */
var Interfaces;
(function (Interfaces) {
    var squareItBasic = function (num) { return num * num; };
    // Fn declaration
    var squareIt;
    // var squareIt: (rect: { h: number; w?: number }) => number;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    // Function definition
    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.w * rect.h;
    };
    var p = {
        name: 'Andreas',
        kids: 0,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years) {
            return this.age -= years;
        },
        greet: function (msg) {
            return 'Hello, ' + msg + '!';
        }
    };
    console.log(p.calcPets());
    p.makeYounger(10);
    console.log(p.greet('Andreas'));
})(Interfaces || (Interfaces = {}));
//# sourceMappingURL=Interfaces.js.map