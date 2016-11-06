/**
 * Created by andreashailu on 11/5/16.
 */

module demo_02_03 {
  // The below is implicit typing of the var person to a string. Even though
  // we implicitly type it here, the TS compiler will acknowledge person to be
  // a string from this point forward.
  // var person;
  // person = 'Andreas Hailu';
  var person: string = 'Andreas Hailu';
  console.log(person);

  // This shows a compile-time error, as person is a string.
  person = {
    name: 'Colleen',
    age: 25
  };

  console.log(person);
}