module DynamicTypes {
  var person; // : string should be declared here
  person = 'Andreas';

  console.log(person);
  console.log(person.substring(1, 4)); // uh oh!

  person = {
    name: 'Drizzy Gillespie',
    age: 24
  };

  console.log(person);


}