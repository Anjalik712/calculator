function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b==0){
        alert("Cannot divide by zero!");
        return "OOPS";
    }
    else{
        return a/b;
    }
}

function operate(op1,op2,operator){
    switch(operator){
        case '+':
            result=add(op1,op2);
            break;
        case '-':
            result=subtract(op1,op2);
            break;
        case '*':
            result=multiply(op1,op2)
            break;
        case '/':
            result=divide(op1,op2);
            break;         
    }
    if(result%1!=0)
        result =result.toFixed(3);
    return result;
}

let op1;
let operator;
let op2;
