/// var numberSquare=square(4)
// console.log(numberSquare)
// console.log("hello JS")
// var n=2;
// function square(num){
//     return num*num;
// }

// console.log(5>>1);
// console.log("xxxxxxxx")
// var x = 1; // first goes to memory part, this takes place in the last as third o/p
// a();  // goes to memory part, next call stack looks if the function a() is defined and if it is it prints out 10 as first o/p
// b(); // goes to memory part, next call stack looks for if the function b() is defined and if it is it prints out 100 as second o/p

// console.log(x); //goes to memory part, this takes place in the last as third o/p

// function a(){ // goes to memory part
//     var x =10;
//     console.log(x);
// }

// function b(){ // goes to memory part
//     var x = 100;
//     console.log(x);
// }

// var obj = { Name: "Vivek", Age: 20 };
// console.log(obj);
// console.log(obj.Name);
// console.log(typeof obj);

// console.log(Object.keys(obj));

// let name1 = "Vivek";
// console.log(name1.length);
// let name2 = "Sankhla";
// console.log(name1 + " " + name2)

// let foo = new String("Eat sleep repeat");
// console.log(typeof (foo))
// console.log(foo)

// console.log(foo.indexOf("sleep"))
// console.log(foo.slice(2, 5))
// console.log(foo.slice(10))
// let str1 = "      Greetings!"
// console.log(str1.trim())
// console.log(str1.trim().toLowerCase())
// console.log(str1.trim().toUpperCase())
// console.log(foo.charAt(2))
// console.log(foo.charCodeAt(0)) // ASCII value at the specified positon, here E - 69

// let numArray = '1,2,3,4';
// numArray = numArray.split(",");
// console.log(numArray);

// let c = "100"
// let d = "20"
// console.log(c + d) //prints 10020

// let arr = [1, 2, 3, 4]
// arr.push(5,6)
// console.log(arr)
// arr.pop()
// console.log(arr)
// console.log(arr.length)
// console.log(arr.length - 1)
// console.log("****LOOP*****")
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let d = new Date()
// console.log(d)
// console.log(d.getFullYear())
// console.log(d.getMonth())
// console.log(d.getDay())
// console.log(d.getTime())
// console.log(d.getSeconds())
// console.log(d.getHours())

// function timer(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function (){
//             console.log(i);
//         }, i*1000);
//     }
// }
// timer();

// class Car{
//     constructor(name,year){
//     this.name="Maruti";
//     this.year="2017";
// }
// }
// let car1= new Car();
// console.log(car1);

//Destructuring
// var[a,,b]=[1,2,3] //compares corresponding values, then prints
// console.log(a)
// console.log(b)

// //concatenation
// arr1= [1,2,3,4,5];
// arr2 = ['a','b','c'];
// console.log(arr1.concat(arr2))

// hello = () => {return "hello"}
// console.log(hello)

// function errorHandling(flag){           // Error Handling
//     try{
//         if(flag&&isNaN(400)){
//             throw{message:"Invalid Statement",code:1101};
//         }else{
//             console.log("no error occured!");
//         }

//     }catch(err){
//         console.log(typeof err);
//         console.log(err.message);
//         console.log(err.code);
//     }
//     finally{
//         console.log("Clear memory");
//     }
// }

// errorHandling(true);

// function showPopUp(){   //Event handler
//     alert("Welcome to the website!!");
// }

// function changeBackground(){
//     document.getElementById("para").innerHTML=c
// }

//Function Hoisting o/p-ass
// funcHoist();

// function funcHoist() {
//     console.log('ass');
// }

// *******************************FUNCTION WITHIN A FUNCTION***********************
// var name = "global";

// function outer() {                                          // next execute outer() since top of call stack after inner() gets popped out
//     var name = "outer";

//     function inner() {
//         var name = "inner";
//         console.log(name);                                   // first execute inner since top of call stack

//     }
//     inner();
//     console.log(name);
// }
// outer();                          // sees outer(), will go to outer() and push it in the call stack, and there sees call to inner(), so push inner()
//                                   // and now inner() top of call stack.
// console.log(name);                // execute this last as global context is the last one remaining after innner() outer()
//final o/p- inner outer global
//CALL STACK OF ABOVE
/*  |INNER(), ref to   |
    | self& here global|
    |for this is the   |
    |inner() func      |
    |                  |
    |                  |
    |------------------|
    |     OUTER() ref  |
    |  to selfvar and  |
    |   global as well |
    |------------------|
    | GLOBAL CONTEXT   |
    |__________________|


*/
// ********************************************

// Function Expression

// var funcExp = function add(a, b) {
//     // Named Function, though the name of function add() cannot be accessed outside it
//     return a + b;
// };
// console.log(funcExp(4, 8));

// var funcExp2 = function (a, b) {
//     // Anonymous function, no name
//     return a * b;
// };
// console.log(funcExp2(4, 8));

// //Arrays

// var arr = [1, 2, 3, 4, 5];
// var arr2 = new Array(5); // this specifies size of arr2 array is 5.
// var arr3 = new Array(10, 20); // This specifies the values of arr3 array as opposed to prev one where only 1 value in Array() specifies size of array.
// console.log(typeof arr); // This returns typeof as Object as all derived data types in JS are considered Objects.
// console.log(Array.isArray); //isArray() det if an object is an Array. o/p-true

// var arr4 = ["apple", 10, "mango", 20]; //Arrays in JS are heterogeneous i.e. they can have values of different data types in them.
// console.log(arr4);

// console.log(arr.splice(0,2)); //adds/removes items to/from an array. o/p-[3,4,5]

// function print(element) {
//     console.log(element);
// }
// arr.forEach(print); //Iterate over arrays using forEach() by passing a function



// ************************************OBJECTS*******************************************
// var obj = {
//     name: "Vivek",
//     age: 20,
//     rollNo: 175,
//     "2":"two"
// };
// var obj2 = new Object();
// // console.log(obj.name);
// obj.marks=90; 
// console.log(obj["name"]);
// console.log(obj);
// // console.log(delete obj.marks); //delete object prop
// console.log(obj);

//-----------------------------------------------------------------------
// function errorHandling(flag){                                         
//     try{
//         let a = 10;
//         if(flag && isNaN("sdfkhb")){
//             throw {message:"Invalid statement", code: 1001};
//         }else{
//             console.log("No error");
//         }
//     }catch(err){
//         console.log(typeof err);
//         console.log(err.message);
//         console.log(err.code);
//     }finally{
//         console.log("Clear memory");
//     }
// }
//---------------------------------------------------------------------------



// for (var prop in obj){              //Itertaing over obects using for... in
//     console.log(prop,":", obj[prop]);
// }

// var keys = Object.keys(obj);   // using keys() function to iterate over objects
// var keys1 = Object.getOwnPropertyNames(obj);   


// var obj3 = {                //NESTED OBJECTS
//     "Name": "Somebody",
//     "Age": 60,
//     Address: {
//         city: "lol island",
//         street: "sesame street",
//         pincode: "42069"

//     }
// };
// console.log(obj3);

arr4 = [10, 20, 30, 40]

// console.log(arr4)
// console.log(typeof (arr4)) // Arrays in JS are considered as objects
// console.log(arr4.length)
//O/P 

// arr4[6] = "Bob"

// console.log(arr4)
// console.log(arr4.length) //indexes 4&5 are marked as empty and the length returned is 7  O/P-->> (7) [10, 20, 30, 40, empty × 2, "Bob"]

// for (var i in arr4) { //ITERATING over arrays using 'for in' 

//     console.log(i)
// }

// ------------------------------------

function hello() {
    console.log("Hello World!")
}

setTimeout(hello, 5000) //executes the code/function once after the timeout.
setInterval(hello, 1000) //executes the code/function repeatedly, with the length of the timeout between each repeat.
