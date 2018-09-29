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


//OBJECTS

// var myCar = {
//     make: 'Ford',
//     model: 'Mustang',
//     year: 1955,
//     parts: {
//         engine: ["gm 123"],
//         body: ['body1']
//     },

//     sound: function() { alert('wrrr')}
// };
    

   // console.log(myCar.sound());

  /**FUNCTION */

  //task 2

//   function sum(num1, num2){
//       return num1 +num2;
//   }

//   console.log(sum(100,5));

//   // const sum = (num1, num2)=> num1+num2; funkcja strzałkowa

// var sum = 3;
// function foo(){
//   var sum =5; // local
// }
// foo();

// console.log(sum); //3

/****************** */

(function (a,b) {
    var sum = a*b;
    console.log(sum);
}
)(10,2)



