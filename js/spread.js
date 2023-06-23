const headLine = document.getElementById('root');
headLine.innerHTML = `<h1><u>Spread Operator</u></h1>`

//normal
var num = [1, 2, 3, 4, 5, 6];
//var newNum =[num[0], num[1], num[2], num[3], 5, 6, 7];

//spread operator
//var newNum = [...num, 5, 6, 7];
//console.log(newNum);

//array mutate
var new_array = num;
console.log(new_array);

//array immutate
var a = [...num,  11, 12, 14, 15];
console.log(a);