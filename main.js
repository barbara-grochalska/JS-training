//const i let - stałe

//ES5 only;
var a = 'foo'; //nadpisanie mozliwe1

//ES6 only;
const BAR = "I'm bar"; //nadpisanie powinno byc niemożliwe

let baz = "boo"; //let moze byc nadpisany - nie mozna go zadeklarowac ponownie let baz="goo"; blokowy
baz = "booze";

console.log(baz);


