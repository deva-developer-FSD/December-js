// copy by value -- copy by reference

var num1= 10;
var num2=num1;
num2=15;
console.log("num1", num1);
console.log("num2",num2);

// deep copy

const oldObject ={name: "deva"};
const newObject = Object.assign({},oldObject);
newObject.name= "dev";
newObject.name="aniruth";
console.log("old",oldObject);
console.log("new",newObject);



