//es5 style:

function foo(arg){
    return arg;
};

var bar =function(arg) {
    return arg;
}

console.log('Result foo:', foo("hello"));
console.log('Result bar:', bar("hello, bar"));


//es6

const foo2 = (arg) => arg;
const foo3 = (arg) => {
    return arg;
}


var foo = "bla"

function whatIsTheType(elem) {

    
    return 'zmiennq ' + elem + ' typem jest: ' + typeof elem;
    
} 

console.log(whatIsTheType("ddd"));
console.log(whatIsTheType(1));
console.log(whatIsTheType([]));
console.log(whatIsTheType(
    []
));
console.log(whatIsTheType(true));
console.log(whatIsTheType(foo));