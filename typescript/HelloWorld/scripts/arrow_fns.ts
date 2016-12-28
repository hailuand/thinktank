/**
 * Created by andreashailu on 11/19/16.
 */

// Arrow operator is like a lambda in other languages

var greetMe: (msg: string) => void; // Returns nothing

module arrow_fns {
  var squareItSimple = function(h: number, w: number) {
    return h * w;
  };

  var squareItSimplest = (h: number, w: number) => h * w;

  var helloWorld: (name?: string) => void;

  helloWorld();
  helloWorld('Andreas');
  // Fn squareIt takes in an object with an option number attr w and returns a #
  var squareIt: (rect: { h: number; w?: number }) => number;

  var rectA = { h: 7 };
  var rectB = { h: 7, w: 12 };

  squareIt = function(rect) {
    if(rect.w === undefined) {
      return rect.h * rect.h;
    }
    return rect.w * rect.h;
  }
}