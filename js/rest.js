const headLine = document.getElementById('root');
headLine.innerHTML = `<h1><u>Rest Operator</u></h1>`

function numbers (a, b){
    console.log(a * b);
}
numbers(10, 20)

function myFunc(){
    console.log(arguments); // arguments work as an object
}
myFunc(4, 5, 6, 7, 8, 9, 10);

function myNewFunc(x, y, z, ...params){ // params or argument must be the last form of parameters
    console.log(x, y, z);
    console.log(params);
}

myNewFunc(12, 13, 14, 15, 16, 17, 18, 19, 20, "javascript");
