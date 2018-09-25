// 
// b={foo:true};
// c={foo:true};
// console.log(1==="1");
// console.log([]==1);
// console.log([]==="1");
// console.log(7=="1");
// console.log(56===56);
// console.log(0==0);
// console.log("pppp"=="pppp");
// console.log({foo:true}=={foo:true});
// console.log("6>7"==="6>7");
// console.log("9>8"==="8>7");

// //stringuje / konwertuje obiekty

// console.log("two stringfied object", JSON.stringify(b)==JSON.stringify(c));


// var boo = 0;
// var coo = boo || "hi"; // hello
// // da hello bo 0 jest falsy  ajak jest falsy do sprawdza dalej .
// //gdyby było 1 to się tu zatrzyma



// var gru = 1
// var zmu = gru || "hi"//1 //jak wyzej pierwsza jest truthy

// var tmu= 0
// var lo = false
// var kadima = tmu || lo || "jo" //jo

// var foz = false
// var boz = !foz || 0 || 42; //true , bo !foz = true i tu przestaje 

// var h = (true && false) || 42 //42 , bo juz w nawiasach pojawia sie false

//**************************************************************** */

// const truthy = true;
// const a =1;

// if(truthy) 
//     console.log('it works');

// if(true||false) {
//     const a = 2;
//     console.log('its up', a);
// }

// if(true) console.log(1);
// if(false) console.log("false");
// if(true) console.log(2);

//nawiasy mozna pominac, ale dla czystosci kodu nie lepiej by robic tego

var lol = 1;

// if(lol===1){
//     console.log("it's number 1");
// } else if(lol==="1"){
//     console.log('it is "1"');
// } else {
//     console.log('?');
// }

// switch(lol) {
//     case 1:
//         console.log("It's number 1");
//     break;
//     case "1":
//         console.log("It's number '1'");
//     break;
//     default:
//         console.log('?');
// }



// const foo = true;

// const baz = foo && false ? true : false;
// const bar = baz ? true : false;

// const boo =  bar ? 1:0 ? "a": "b";


// console.log(boo);


/************ */

//Pętle

/***************/

var numbers = [1,2,3,4,5];

// for (var i = 0; i <4 ; i++);

// console.log(numbers[i]);

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
};













