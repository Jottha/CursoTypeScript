function soma(a, b, c){
    return a + b + c;
}

var numeros = [1,6,8];
//Spread Operator ...
console.log(soma(...numeros));


var array1 = [4, 5, 6];

var array2 = [1, 2, 3, ...array1];

console.log(array2);