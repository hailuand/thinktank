/**
 * Created by andreashailu on 11/5/16.
 */
/// <reference path ="typings/knockout.d.ts" />
var demo_02_04;
(function (demo_02_04) {
    var name = ko.observable('John Papa');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };
    var value = guy.fullName();
    console.log(value);
})(demo_02_04 || (demo_02_04 = {}));
//# sourceMappingURL=ambient-declarations.js.map