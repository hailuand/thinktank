module Interfaces {

  interface ISquareFunction {
    (x: number): number;
  }

  var squareItBasic: ISquareFunction = (num) => num * num;
  // interface for the rectangle
  interface IRectangle {
    h: number;
    w?: number; // w is optional
  }
  var squareIt: (rect: IRectangle) => number;

  squareIt = function(rect) {
    if(!rect.w) {
      return rect.h * rect.h;
    }
    return rect.h * rect.w;
  };

  interface IPerson {
    name: string;
    age?: number;
    kids: number;
    calcPets: () => number;
    makeYounger: (years: number) => void;
    greet: (msg: string) => string;
  }

  var p: IPerson = {
    name: 'Andreas',
    age: 24,
    kids: 0,
    calcPets: function() {
      return this.kids * 2;
    },
    makeYounger: function (years: number) {
      this.age -= years;
    },
    greet: (msg: string) => 'What\'s gucci?, ' + msg + '?',
    favoriteMovie: 'Interstellar',
  };
  p.calcPets();
  p.makeYounger(15);
  console.log(p.age);

  var msg = p.greet('Dinkleberg');
}