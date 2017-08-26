module Primitive {
  // any
  var data: any;
  var info;
  var doSomething = function(arg) {
    return arg;
  };

  var x = doSomething(5);

  // primitives
  var age: number = 21;
  var score: number = 34.56;
  var rating = 99.99;

  var hasData: boolean = true;
  var isReady = true;
  var isBald = function()  {
    return 'yes';
  };

  var firstName: string = 'Andreas';
  var lastName = 'Hailu;'

  // String array
  function getArrayLength(x: string[]) {
    var len: number = x.length;
    return len;
  };

  var names: string[] = [ 'dude', 'where\'s', 'my', 'car' ];
  var firstPerson = names[0];
  console.log(getArrayLength(names));

  var quantity: number; // undefined
  var company = undefined;

}