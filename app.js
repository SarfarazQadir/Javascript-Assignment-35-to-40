//  1

// function name() {
//     var a = new Date();
//     return console.log(a);   
// }
// name();

//console.log("new");


//  2

// function name() {
//  var name1 =  prompt("Your First Name");    
//  var name2 =  prompt("Your First Name");
//   document.write("Your full name is "+name1 + name2)
// }
// name()

//3

// function name() {
//  var name1 =  +prompt("Your First Number 1");    
//  var name2 =  +prompt("Your First Number 2");
//   document.write("Added "+name1 + name2)
// }
// name()

//4

// var num1 = +prompt("Enter Num 1")
// var opr = prompt("Enter Operator")
// var num2 = +prompt("Enter Num 2")
// var result;

// function name() {
//   if(opr == "+"){
//     result =  num1 + num2
//    }else if(opr == "-"){
//       result = num1 - num2
//    }else if(opr == "*"){
//       result = num1 * num2
//    }else if(opr == "/"){
//       result = num1 / num2
//    }
// return console.log(result);

// }
// name();


//5

// function square(params) {
//    params = params * params
//    console.log(params);
// }
// square(5)

//6

// var n;

// function factorial(params) {
//    for (let i = 1; i < params; i++) {
//       n = params * i
//    }
//    console.log(n);

// }

// factorial(5);

//7  

var ta = +prompt("Write a table number you want to print");
var length = +prompt("Write table length");
var n;
function table() {
  for (let i = 1; i <= length; i++) {
    n = `${ta} X ${i} = ${ta * i}`;
    console.log(n);
  }
}

table();