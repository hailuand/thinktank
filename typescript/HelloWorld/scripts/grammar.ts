/**
 * Created by andreashailu on 10/27/16.
 */

var x = 1;
var lastName: string = 'Papa';
var num1 = 100;
var num2: number = 200;

function addNumbers(n1: number, n2: number, n3: number) {
  var result = n1 + n2 + n3;
  var msg = 'Sum is ' + result;
  alert(msg);
}

addNumbers(num1, num2, 7);