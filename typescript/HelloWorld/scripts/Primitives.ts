/**
 * Created by andreashailu on 11/11/16.
 */

module demo_02_05 {
  var data: any;
  var info;
  var doSomething = function(arg) {
    return arg;
  };

  var x: any = doSomething(5);

  // primitives
  var age: number = 21;
  var score: number = 34.56;
  var rating = 99.99;

  var hasData: boolean = true;
  var isReady = true;
  var isBald = function() {
    return 'yes';
  };
  var hasHair: boolean = !!isBald();

  // string array
  function getArrayLength(x: string[]) {
    var len: number = [0].length;
    return len;
  }

  var names: string[] = ['John', 'Dan', 'Aaron', 'Fritz'];
  var firstPerson = names[0];
  console.log(getArrayLength(names));

  // null
  var guitarSales: any = null;
  var animal = null;
  var orderDate: Date = null;

  // undefined
  var quantity: number;
  var company = undefined;
}