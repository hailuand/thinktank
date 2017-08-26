var x = 1;

var y;

var firstName = 'andreas';

var lastName: string = 'hailu';

var num1 = 100;
var num2: number = 200;

function addNum(n1, n2, n3) {
  var result = n1 + n2 + n3;
  var msg = 'Sum is = ' + result;
  alert(msg);
}

addNum(num1, num2, lastName);

function addNum2 (n1: number, n2: number, n3: number): void {
  var result = n1 + n2 + n3;
  var msg = 'Sum is = ' + result;
  alert(msg);
}

addNum2(num1, num2, 10);