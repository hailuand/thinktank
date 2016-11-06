/**
 * Created by andreashailu on 11/5/16.
 */
var demo_02_03;
(function (demo_02_03) {
    // The below is implicit typing of the var person to a string. Even though
    // we implicitly type it here, the TS compiler will acknowledge person to be
    // a string from this point forward.
    // var person;
    // person = 'Andreas Hailu';
    var person = 'Andreas Hailu';
    console.log(person);
    // This shows a compile-time error, as person is a string.
    person = {
        name: 'Colleen',
        age: 25
    };
    console.log(person);
})(demo_02_03 || (demo_02_03 = {}));
//# sourceMappingURL=dynamic-types.js.map