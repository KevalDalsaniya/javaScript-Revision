//how to write in a variable
// var firstname="keval";
// var first_name="keval";
// var First_name="keval";
// var firstName="keval"; this is popular way to declare a variable
//variable type let const var
// var a="keval"; //var is a global scope var is a redeclare
// {
//     var a="krupal"
// }
// console.log(a);
// let a="keval"; //let is a  block scope let is nota redeclare
// {
//     let a="krupal";
// }
// console.log(a);
// let a="keval";
// a="jenish";
// console.log(a);
// {
//     a="krupal";
// }
// console.log(a);
// var a="keval";
// a="krupal";
// console.log(a);
// let b="keval";
//  b="jenish";
// console.log(b);
//const is final and block scope;
// const a=3.14;
// {
//     const a=3.44;
//     console.log(a);
// }
// console.log(a);
//javascript datatype in a 8
// boolean,string,number,undefine,array,object,null,bigint,symbol
// var a=3.43; //number;
// console.log(typeof a);
// var a="keval", b="3.23";
// console.log(typeof b);
// var a=true,b=false;
// console.log(typeof a +" "+typeof b)
// var a;
// console.log(typeof a); //undefine
// var b=null;
// console.log(typeof b);
// var a=[34,33,33,64,35];
// console.log(typeof a);
// var b={
//     name:"keval",
//     age:21
// };
// console.log(typeof b);
// var c=333444444455333;
// console.log(typeof c);
// var a=BigInt(424242354544565657557575656);
// console.log(typeof a);
//javascript operators
//airthmetic operators,assignment,logical,comparision,bitwise,ternery
//arithmetic
// var a=26;
// var b=5;
// var c=a%b;
// console.log(++c);
// var a=3;
// var b=a**3;
// console.log(b);
//assignment operator
// var a=30;
// a/=3;
// console.log(a);
// var a=2;
// a**=4;
//console.time(test);
// console.log(a);
//var a=[23,43,54];
// console.table(a);
//   console.info(a);
//   console.log(a);
//   console.warn(a);
//   console.error(a);
// console.timeend(test);
// console.log(time);
//   console.clear();
// million,billion,and k convert program
// var val=Number(prompt("enter any value"));
// fun(val);
// function fun(val){
//     if(val>=1 && val<=999999){
//        document.write(val/1000+"K");
//     }
//     else if(val>=1000000 && val<=9999999){
//         document.write(val/1000000+"M");
//     }
//     else{
//        document.write(val/1000000000+"B");
//     }

// }
//var a=[34,53,23,64,32,54];
//   var temp;
//   for(let i=0; i<a.length-1; i++){
//     for(let j=0; j<a.length; j++){
//         if(a[j]>a[j+1]){
//             temp=a[j];
//             a[j]=a[j+1];
//             a[j+1]=temp;
//         }
//     }
//   }
//   document.write(a);
//for(let i=1; i<=4; i++){
    //     for(let j=1; j<=i; j++){
    //         document.write("*");
    //     }
    //     document.write("<br>");
    //  }
//forloop using solve 
//       var b=[23,53,22,11,43,22,43,34,34,34,65,54,"keval","keval"];
//       var unique=[];
//       for(let i=0; i<b.length; i++){
          
//           if(!unique.includes(b[i])){
//             unique.push(b[i]);
//           }
//       }
//   console.log(unique);
//foreach loop using solve 
 //   var a=[12,2,22,22,"keval","keval","avi","avi"];
    //   var unique=[];
    //   a.forEach((val)=>{
    //        if(!unique.includes(val)){
    //         unique.push(val);
    //        }
    //   });
    //   console.log(unique);
//     var time=new Date();
   
//     // year: 2021, month: 12, date: 22, hour: 11, minute: 07, second: 03, ms: 123
//     var data={
//        year:time.getFullYear(),
//        month:time.getMonth(),
//        date:time.getDate(),
//        hour:time.getHours(),
//        minute:time.getMinutes(),
//        second:time.getSeconds(),
//        ms:time.getMilliseconds()
//  }
//     console.log(data);
//    for(var key in data){
//       document.write(key+" : "+data[key]+"<br>");
//    }
// javascript Airthmetic operator
// var age=14;

// age>18?console.log("this is true"):console.log("this is false");
//console.log(b);
// var a=34;
// var b=a>35?"34":"56";
// console.log(b);
// var a=23;
// var b="23";
// console.log(a!==b);
//console.log(null==undefined) // this is true
//console.log(null===undefined); // this is false
var a=23;
// var b=437;
// var c=54;
// if(a>b && a>c){
//     console.log("a is big");
// }
// else if(b>a && b>c){
//        console.log("b is big");
// }
// else{
//     console.log("c is big");
// }
// var a=34;
// var b="34";
// if(a===b){
//     console.log("same value and data type");

// }
// else{
//     console.log("not a same value and data type");
// }
// logical operator and or not
// var age=20;
// if (age>18)
// {
//     console.log("you are eligeble");
// }
// else{
//     console.log("you are not a eligeble");
// }
// var age = Number(prompt("enter your age"));
    //     var valid;
    //     switch (true) {
    //         case (age < 20):case (age > 20 && age < 50):
    //             valid = "you are younge and fit";
    //             break;
    //         case (age > 20 && age < 50):
    //             valid = "you are working person ";
    //             break;
    //         case (age > 50 && age < 100):
    //             valid = "you are old person";
    //             break;
    //         default:
    //             valid = "not a valid data";

    //     };
    //   document.write(valid);
    // var age=24;
        // if(age>18){
        //     alert("you are eligebel");
        // }
        // else{
        //     alert("you are not a eleigebel");
        // }
        // var a=confirm("you are so happy in this website");
        // if(a){
        //     document.write("thank you your support ");
        // }
        // else{
        //     document.write("sorry you are not intersting our website");
        // }
        // var a=Number(prompt("enter value a"));
        // var b=Number(prompt("entert value b"));
        // document.write(typeof a);
        // var c=a+b;
        // document.write("sum is a "+c);
// bitwise operator
// and &,or |,not ~,xor ^,<< left shift,>> right shift >>
// var a=12;
// var b=14;
// console.log(~(a|b));
// var a=23;
// var b=43;
// console.log(a^b);
// var a=22;
// console.log(a>>2);
// javascript function
// var num=Number(prompt("enter any num"));
//        document.write(typeof num);
//        let i=1; 
//        document.write("<ul>");
//        while(i<=10){
//             document.write("<li>"+num+"X"+i+"="+num*i+"</li>");
//             i++;
//        }
//        document.write("</ul>");
// var a="jay swaminarayan";
// console.log(a);   //node "d:\JAVASCRIPT REVISION\FIRST.js"
// for(i=1; i<=100; i++){
//     if(i%2==0){
//         document.write("odd:"+i+"<br>");
//     }
//     else{
//         document.write("even:"+i+"<br>");
//     }
// }
// 12345678910
// 11 12 13 14 15 16 17 18 19 20
//91 92 93 94 95 96 07 98 99 100
// for(let i=1; i<=100;  i=i+10){
//     for(let j=i; j<i+10; j++){
//         document.write(j+" ");
//     }
//     document.write("<br>");
//   }
// var a=[...Array(5)];
// console.log(a);
// for(let i=5; i>=1; i--){
//     for(let j=i; j>=1; j--){
//          document.write(j);
//     }
//     document.write("<br>");
//  }
 //array in javascript
    //  var a=[10,20,30,2,343,43];
    // for(let i=0; i<a.length; i++){
    //     document.write(a[i]+"<br>");
    // }
    // var a=new Array(4);
    // for(let i=0; i<a.length; i++){
    //      a[i]=prompt("enter any value");
    // };
    // for(let i=0; i<a.length; i++){
    //     document.write(a[i]+"<br>");
    // }
    // var a=[34,2,54,14,64];
    //   var sum=0;
    //   for(let i=0; i<a.length; i++){
    //     sum+=a[i];
    //   }
    //   document.write(sum);
    // var a=new Array(34,43,42,53,53);
//     //   document.write(a);
//     var a=[["keval",21,"Dalsaniya"],
//     ["bhuva",21,"jenish"],
//     ["keyur",21,"bhungani"]]
// for(let i=0; i<a.length; i++){
// for(let j=0; j<a[i].length; j++){
//    document.write(a[i][j]+" ");
// }
// document.write("<br>");
// }
// var a=[[23,43,54],
//              [22,3,43],
//              [1,22,64]];
//       var b=[[23,43,54],
//              [22,3,43],
//              [1,22,64]];
//      var sum=[[],[],[]]
//     for(let i=0; i<a.length; i++){
//         for(let j=0; j<a[i].length; j++){
//             sum[i][j]=a[i][j]+b[i][j];
//         }
//     }
//     console.log(sum);
// var a=[23,53,51,64];
// delete a[2];
// console.log(a);
// console.log(a[2]);
// const a=[24,342,543];
// a[3]="kevaldalsaniya"
// console.log(a);
// var ab=[105,23,43,28,9,93,28,8,45];
// ab.sort(compare);
// function compare(a,b){
//      // <0 a come first
//      //0 nothing will be changed
//      // >0 b come first
//      return a-b;
// }
// console.log(ab);
//var a=["keval","jenish",24,22,3,4,22,54];
//   var b=a.reverse();
//  console.log(b);
/// a.push("krupal");
// console.log(a);
// a.pop();
//console.log(a);
/// a.unshift("avi");
//console.log(a);
// a.shift();
// console.log(a);
// var a=["keval","dineshbhai"];
//     var b=["Dalsaniya"];
//     var d=[34,22,53,2]
//     var c=d.concat(d,a,b);
//     console.log(c);
// var a=["keval",23,"Dalsaniya","Dineshbhai"];
// var b=a.join("+");

// console.log(typeof b);
// var a=[23,2,45,3,34];
// //              not include
// var b=a.slice(2,3);
// console.log(b);

// var a=["keval",24,22,53,42];
// var b=a.slice(-4,-1);
// console.log(b);
// var a=[23,22,43,52];
// a.splice(2,1,"keval","krupal");
// console.log(a);
// var a=[23,43,"keval","krupal",43,54];
   
// var b=a.splice(2,3);
// console.log(b);
// output is "keval" "krupal" 43
// var a=24;
// var b=[23,43,54,24];
// if(Array.isArray(a)){
//   console.log("true");
// }
// else{
//   console.log("false");
// }
// var a=[23,43,53,63];
// var b="keval";
// console.log(Array.isArray(b));
// var a=["keval",2,43,41,"krupal","jenish",63,43];
//     //             element index
//     var b=a.indexOf(43,3);
//     console.log(b);
// var a=[2,3,53,55,32,"keval","krupal",244,54,653,35,"keval"];
// var b=a.lastIndexOf("keval",-2);
// console.log(b);
// var a=[23,42,43,54,6,"w"];
//    console.log(a.includes(34));
// var age=[21,32,42,1,35,53];
//       var b=age.every((val)=> val>=18 );
//       console.log(b);
//var age=[23,54,64,24];
//var b=age.every(val=>val>=18);console.log(b);
// var a=[23,42,43,12,108,2,64,24,200];
//     var b=a.find((val)=>{
//         return val>=100;
//     });
//     console.log(b);
// var age=[24,2,3,54,200,100,"keval",32,52,false];
// var b=age.findIndex((val)=>{return (typeof val)=="string"});
// console.log(b);
// var age=[24,2,3,54,200,100,"keval",32,52,false];
// var b=age.find((val)=>{return (typeof val)=="string"});
// console.log(b);