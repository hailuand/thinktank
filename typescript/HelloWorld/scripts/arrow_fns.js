/**
 * Created by andreashailu on 11/19/16.
 */
// Arrow operator is like a lambda in other languages
var greetMe; // Returns nothing
var arrow_fns;
(function (arrow_fns) {
    var squareItSimple = function (h, w) {
        return h * w;
    };
    var squareItSimplest = function (h, w) { return h * w; };
    var helloWorld;
    helloWorld();
    helloWorld('Andreas');
    // Fn squareIt takes in an object with an option number attr w and returns a #
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.w * rect.h;
    };
})(arrow_fns || (arrow_fns = {}));
//# sourceMappingURL=arrow_fns.js.map