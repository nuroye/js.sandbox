/*Make a Calculator! using prompt(), alert(), and variables, make a program that does the following:

1. Ask the user to enter an operator which includes any of the following - add, subtract, multiply and divide
2. Prompts the user for first number.
3. Stores that first number
4. Prompts the user for the second number.
5. Stores that number and responds with the operation the user selects at number 1. */


var firstNumber= Number(prompt("Enter First Number"));
var operator= prompt("Enter an operator");
var secondNumber= Number(prompt("Enter Second Number"));
var result=0;
if (operator=="+"){
  alert(result=(firstNumber + operator + secondNumber + "=" + (firstNumber+secondNumber))) ;
}
else if(operator=="-"){
    alert(result=(firstNumber + operator + secondNumber + "=" + (firstNumber-secondNumber))) ;
}
else if(operator=="x"){
    alert(result=(firstNumber + operator + secondNumber + "=" +(firstNumber*secondNumber))) ;
}
else if(operator=="/"){
    alert(result=(firstNumber + operator + secondNumber + "=" + (firstNumber/secondNumber))) ;
}
else{
    alert("Invalid, Please Enter the correct operator!!!")
}
