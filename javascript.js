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



let result=divide(2.07,3)
if(result%1!=0)
    result =result.toFixed(3);
console.log(result);