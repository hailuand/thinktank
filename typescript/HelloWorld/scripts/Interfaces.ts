/**
 * Created by andreashailu on 12/27/16.
 */

module Interfaces {

  interface ISquareFn {
    (x: number): number
  }

  var squareItBasic: ISquareFn = (num: number) => num*num;

  interface IRectangle {
    h: number,
    w?: number
  }

  // Fn declaration
  var squareIt: (rect: IRectangle) => number;
  // var squareIt: (rect: { h: number; w?: number }) => number;

  var rectA = { h: 7 };
  var rectB = { h: 7, w: 12 };
  // Function definition
  squareIt = function(rect: IRectangle) {
    if(rect.w === undefined) {
      return rect.h * rect.h;
    }
    return rect.w * rect.h;
  };

  interface IPerson {
    name: string,
    age?: number,
    kids: number,
    calcPets: () => number,
    makeYounger: (yearsYounger: number) => void;
    greet: (msg: string) => string;
  }

  var p: IPerson = {
    name: 'Andreas',
    kids: 0,
    calcPets: function() {
      return this.kids * 2;
    },
    makeYounger: function(years: number) {
      return this.age -= years;
    },
    greet: function(msg: string) {
      return 'Hello, ' + msg + '!';
    }
  };

  console.log(p.calcPets());
  p.makeYounger(10);
  console.log(p.greet('Andreas'));

}