/*var num = 1; //literal
var foo = 'foo';
var foo2 = String('foo2');
var num2 = Number(1); //dwie możliwości nadawania number, tutaj jest funkcja konstruktora
var b = "123";
//var num2 = Number(b); //ze stringa zrobi number, tz. konwersja typów

//console.log(num, num2);

//console.log(foo,foo2);
console.log(Number(b));*/

var num =1;
var stringNum = "2";
var stringNotNumber = 'hello';
console.log(num + Number(stringNotNumber)); // will return NaN


var constructorNum = Number(stringNum);
console.log(num + stringNum); //12
console.log(num + Number(stringNum)); //3
console.log(num + constructorNum);


var array1 = [];
var array2 = [];

console.log(array1+array2); //zwraca pusty string*/

//{}+[]; // 0
//+[] //0





