console.log('tutorial40');

//ARROW FUNCTIONS

// const harry = function harry() {
//     console.log('This is the best');
// }
// converting it to arrow function
// const harry = () => {
//     console.log('This is the best');
// }
// harry();
//Function returning something
// const greet = function() {
//     return 'Good Morning';
// }
//one liners donot require braces
//it will automatically return
//const greet = () => 'Good Morning';
//returns object
//const greet = () => ({ name: "Vedshruti" });
//const greet = (name) => "Good Morning " + name;
//Single parameters do not need parenthesis
// but you will have to put parenthesis if there are multiple parameters
//const greet = name => "Good Morning " + name;

const greet = (name, ending) => "Good Morning " + name + ending;
console.log(greet('Vedshruti', 'bye'));