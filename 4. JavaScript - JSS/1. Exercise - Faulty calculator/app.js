let faultyCalculator = function(a, b, operation) {
    let x = Math.random() 
    if(x<0.1){
        if(operation == '+'){
            return a-b;
        }
        else if(operation == '*'){
            return a+b;
        }
        else if(operation == '-'){
            return a/b;
        }
        else{
            return a**b;
        }
    }
    else{
        if(operation == '+'){
            return a+b;
        }
        else if(operation == '*'){
            return a*b;
        }
        else if(operation == '-'){
            return a-b;
        }
        else{
            return a/b;
        }
    }
}

var a = prompt("Please enter first number");
var b = prompt("Please enter second number");
var operation = prompt("Please enter the operation");
var result = faultyCalculator(a,b,operation);
console.log(result);

