/**
 * Created by andreashailu on 11/11/16.
 */
var demo_02_05;
(function (demo_02_05) {
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    var x = doSomething(5);
    // primitives
    var age = 21;
    var score = 34.56;
    var rating = 99.99;
    var hasData = true;
    var isReady = true;
    var isBald = function () {
        return 'yes';
    };
    var hasHair = !!isBald();
    // string array
    function getArrayLength(x) {
        var len = [0].length;
        return len;
    }
    var names = ['John', 'Dan', 'Aaron', 'Fritz'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));
    // null
    var guitarSales = null;
    var animal = null;
    var orderDate = null;
    // undefined
    var quantity;
    var company = undefined;
})(demo_02_05 || (demo_02_05 = {}));
//# sourceMappingURL=Primitives.js.map