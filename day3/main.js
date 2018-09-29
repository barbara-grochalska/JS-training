// var numbers = [1,2,3,4,5];

// console.time('in loop');
// for (var i = 0; i < numbers.length; i++){
//     console.log(numbers[i])

// }

// console.timeEnd('in loop');

// console.time('before loop')
// var length = numbers.length
// for (var i = 0; i< length; i++){
//     console.log(numbers[i])

// }

// console.timeEnd ('before loop');

// var manyNumbers = [];

// for(let i=0; i<10; i++){
//     const myNumbers = (Math.floor(Math.random() * 1000)+1);
//     manyNumbers.push(myNumbers);
//         if (i>1){
//         break;
//    }
   
// }
// console.log(manyNumbers);



// console.log(manyNumbers);

// var i = 0;
// var a = 0;

// while(i < 10){
//     i++;
//     a += 2;
//     console.log(i);
// }


// const myArray=[1,2,5,6,8,9,2,7,5,9];
// var i=0;

// while(i<myArray.length){
//     console.log(myArray[i]);
//     i++;
// }




// let i = 0;
// while (i<5) {
//     i++;
//     if (i===3){
//         break;
//     }
//     console.log(i);

// }


///****array */

// z = [1,2,3];
// //1 2 3 
//  z = 0;

//  // push - d-daje na końcu
//  // pop - usuwa ostatnie

//  var a=[1,2,3];
// a.pop();

// console.log(a);

// var d = [1,2,3];
// d.unshift(4,5);
// var r =d.shift();

// console.log(d);
// console.log(r);

// var yourArray = [5,4,3,2,1];
// yourArray.push(6);
// yourArray.unshift(0);


// console.log(yourArray);

// yourArray.shift(0);
// yourArray.pop(6);

// console.log(yourArray);


// const a = [1,2,3];
// //const b = a;
// const b = a.slice(0, a.length -1);
// b.push(4);

// console.log(a,b)

//wyzej storzyl sie duplikat tablicy

const a = [1,2,3, ['a', 'b','c']];

const b = a.slice(0, a.length);


b[3].push('d');
console.log(a,b);

var zz = ['one', 'two', 'four', 'bryk', 'notgrr'];
// var slice = zz.slice(1,-1);


var one = [zz.pop()]; //usuwa z zz ostatni element , ale wby wyciagnac i nie naruszyc zz.slice(z.length - 1);
var two = [zz[1]];



const all = one.concat(two);


console.log(all);

/******************* */
var myArray= [];
var randomEven = 2 *(Math.floor(Math.random() * 11)+1);


function randomEven(){
    let n;

    while(!n || n%2 !== 0){
        n = Math.floor(Math.random() * 100)+6;
    }

    return n;
}
//console.log(randomEven());
const gr = [];
const length = randomEven();

for (let i =0; i<length; i++);
gr.push(Math.floor(Math.random()*100));

const x = gr.slice(length/2-2, -length/2+2);

console.log(gr,x);

var bla = [1,2,3,4,5,6,7,8,9,10];
//bla.indexOf(9);

console.log(bla.indexOf(9));
