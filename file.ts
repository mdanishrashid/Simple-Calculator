#! /usr/bin/env node

import inquirer from "inquirer";

//Simple Calculator by Danish Rashid
//Asking Questions from Users through Inquirer


let answers = await inquirer.prompt([
    {message:"Enter First Number",type:"number",name:"firstNumber"},
    {message:"Enter Second Number",type:"number",name:"secondNumber"},
    {
        message: "Select Opertor to perform Operations",
        type:"list",
        name:"opertor",
        choices: [ "Addition","Subtraction","Multiplication","Division"],

    }
])
//Conditional statement If-else

if(answers.opertor === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.opertor === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.opertor === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.opertor === "Division" ){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("Invalid Input")
}
    
