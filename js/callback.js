const headLine = document.getElementById('root');
headLine.innerHTML = `<h1><u>Callback</u></h1>`;

//sync
function show (res){
    console.log(res);
}

function addition (a, b, callback){
    let sum = a + b;
    if(callback) callback(sum);
    return sum;
}

addition(5, 12, show);

//async

console.log('One');
setTimeout(function () {
    console.log('Two');
}, 2000);
console.log('Three');