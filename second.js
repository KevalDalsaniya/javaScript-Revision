// var a=[343,54,54,33,54,54];
// var b=a.includes(54);
// console.log(b);
// var a=[23,22,43,2];
// var b=Array.isArray(a);
// console.log(b);
// var a=[...Array(4)];
// console.log(a);
// var a=[33,53,22,54,22,2];
// delete a[2];
// console.log(a);
// var a=[23,1,5,6,66,99,9,23];
// var b=a.sort(fun);
// function fun(a,b){
//     return a-b;
// };
// console.log(b);
// var a=[23,22,44,22,43];
// var b=a.join("");
// console.log(typeof b);
// console.log(b);
// var a=[23,22,"keval","jenish",12,54];
// var b=a.splice(2,2);
// console.log(b);
// var a=[23,42,4,54,33,24,11,3,33,23,4,23];
// var b=a.lastIndexOf(4);
// console.log(b);
// var a=[22,43,2,3,4,1,22,45,33,54,12];
// var b=a.filter((val)=>{
//     return val>18;
// });
// function fun(num){
//     return num>18;
// }
// console.log(b);
// var a=[1,2,3,4,5,6,7,8,9,10];
// var b=a.map((val)=>{
//     return val*18
// });
// console.log(b);
// var a=[1,2,3,4,5,6,7,8,9,10];
// var b=a.forEach((val)=>{
//     console.log(val);
// })
// console.log(b);
// var a=[{n:"keval",age:13,num:2333},{n:"keval",age:13,num:2333},{n:"keval",age:13,num:2333}];
// a.forEach((val)=>{
//     console.log(val);
// })
// var a=[23,43,42,43,24];
// var b=a.toString();
// console.log(typeof b);
// console.log(b);
// var a=[23,32,54,4];
// var b=a.valueOf();
// console.log(b);
// var a=["keval",34,22,53,24];
// a.fill("jay swaminarayan");
// console.log(a);
 var a=[[1,3,32,23],[22,43,22,11],[33,43]];
// a[1].splice(1,2,"keval","Krupal");
// console.log(a);
//a.splice(0,0,["avi","jenish","mayur"]);
// a[1].pop();
// console.log(a);
// var a=[[1,3,32,23],[22,43,22,11],[33,43]];
// for(let i=0; i<a.length; i++){
//     for(let j=0; j<a[i].length; j++){
//         document.write(a[i][j]+" ");
//     }
//     document.write("<br>");
// }
 
// a.forEach((arr)=>{
//     arr.forEach((val)=>{
//       document.write(val+" ");
//     })
//     document.write("<br>");
// })
// var a=[[1,3,32,23],[22,43,22,11],[33,43]];
//   for(let i of a){
//     for(let data of i){
//         document.write(data+" ");
//     }
//     document.write("<br>");
//   }
// var a=[[],[],[],[]];
// for(let i=0; i<a.length; i++){
//   for(let j=0; j<3; j++){
//       a[i][j]=prompt(`enter any number row is ${i}`);
//   }
// }
// for(let i of a){
//   for(let data of i){
//       document.write(data+" ");
//   }
//   document.write("<br>");
// }
// var a={
//     fname:"keval",
//     lname:"Dalsaniya",
//     age:21,
//     village:"mandavdhar",
//     favnum:[5,33,54,1,54],
//     favmuvi:{
//         first:["a","b","c"],
//         second:["e","f","g"]
//     },
//     fullname:function(){
//          return `${this.fname} ${this.lname}`;
//     }
//  };
//  console.log(a.fullname());
// var a={
//     fname:"keval",
//     lname:"Dalsaniya",
//     age:21,
//     village:"mandavdhar",
//     favnum:[5,33,54,1,54],
//     favmuvi:{
//         first:["a","b","c"],
//         second:["e","f","g"]
//     },
//     fullname:function(){
//          return `${this.fname} ${this.lname}`;
//     }
//  };
//  console.log(a.fullname());
// var a=new Object();
//  a.fname="keval";
//  a.lname="Dalsaniya"
//  a.age=21;
//  a.favnum=[2,4,66,75,12];
//  a.living={village:"mandavdhar",taluka:"gadhada",favmuvi:["a","b","c"]};
//  a.fullname=function(){
//     return `${this.fname} ${this.lname}`;
//  }
//  console.log(a.fullname());
// var a=new Object({name:"keval",age:21,fname:"Dalsaniya",fullname:function(){
//     return "jay swaminarayan"
//  }});
//  //console.log(a['age']);
//  console.log(a["fullname"]());
// var a=[{name:"keval",lname:"Dalsaniya",age:21},
//         {name:"jenish",lname:"bhuva",age:21},
//         {name:"avi",lname:"Savaliya",age:19}];
//     for(let i=0; i<a.length; i++){
//        document.write(a[i].name+"  "+a[i].lname +"<br>");
//     }
// const a={name:"keval",lname:"Dalsaniya"};
//  //a={name:"krupal",lname:"Dalsaniya",age:21};
//  a.name="krupal";
//  a.age=21;
//  a.lname="dalsaniya"
//  console.log(a);
 //for in loop in object print
 
 //   for(let key in a){
 //        document.write(a[key]+"<br>");
 //   }
//  for(let key in a){
//      document.write(key+":"+a[key]+"<br>");
//  }
// var a={
//     address:[22,43,]
//  };
//  for(let key in a){
//     document.write(key+":"+a[key]+"<br>");
//  }
// var a=[{name:"keval",lname:"Dalsaniya",age:21},
//         {name:"jenish",lname:"bhuva",age:21},
//          {name:"avi",lname:"Savaliya",age:19}];
// a.forEach((val)=>{
//     for(let key in val){
//         document.write(key +":"+ val[key]+" ");
//     }
//     document.write("<br>")
// })
// var a=[{name:"keval",lname:"Dalsaniya",age:21},
// {name:"jenish",lname:"bhuva",age:21},
//  {name:"avi",lname:"Savaliya",age:19}];
// var b= a.map((val)=>{
// return `${val.name} ${val.lname}`; 
// });
// document.write(b);
//java script string methods 
//var a="Java is most popular programming language in the world";
//console.log(a.length);
//var b=a.toUpperCase();
//var b=a.toLowerCase();
//var b=a.includes("Java");
// var b=a.startsWith("is");
//console.log(a.endsWith("w"));
// search metods in return in index
// var a="javascript is a great language in is the is worlds";
// var b=a.search("is");
// console.log(b);
// var a="javascript is a great language in is the is worlds";
// var b=a.match(/is/);
// console.log(b);
//var a="javascript is a great language in is the is worlds";
// var b=a.match(/is/g);
// console.log(b);
//var b=a.indexOf("is",13);
// var c=a.search("is");
//var d=a.indexOf("is",20);
//var b=a.lastIndexOf("is",20)
//console.log(b);
//console.log(c);
// console.log(d);
// console.log(b);
// var a="javascript is best programming is is is language";
// var b=a.replace(/is/g,"are");
// console.log(b);
// var a="   fdklfjd  ljdlkfjd  jfdfj  ";
// var b=a.trim();
// console.log(b);
// var name="           keval dalsaniya  Dineshbhai   ";
//  var b=name.trim();
//  alert(b);
//specific value return in index
// var a="javascript is best programming languege";
// console.log(a.charAt(11));
// var a="keval";
// var b="Dalsaniya";
// var c=a.concat(" "+b,"dineshbhai");
// console.log(c);
// var a="keval Dalsaniya dineshbhai is  is is";
// var b=a.replace(/ /g,"");
// console.log(b);
// var a="Dalsaniya Keval dineshbhai";
//  var b=a.split(" ");
//  b.push("mandavdhar");
//  b.shift();
//  console.log(b[0]);
//split using string is arry convert
// var a="Dalsaniya Keval dineshbhai";
//  var b=a.split(" ");
//  console.log();
// var a="jay swaminarayan";
// var b=a.repeat(4);
// console.log(b);
// var a="kevaldalsaniya";
// var b=a.slice(-3);
// console.log(b);
// var a="kevaldalsaniya";
// var b=a.substr(2,6);
// console.log(b);
// var a="kevaldalsaniya";
// var b=a.slice(2,5);
// var c=a.substring(2,5);
// console.log(c);
// console.log(b);
// var a=[23,43,43,334,2];
// var b=a.toString();
// console.log(typeof b);
// console.log(b);
// var a="keval Dalsaniya";
// console.log(a.valueOf());
//var a="keval"
//var b=a.charCodeAt(2);
// var c=String.fromCharCode(89);
// console.log(c);
//var a="javascript is a best programing is  is language";
// var b=a.search("k");
// console.log(b);
// var b=a.match(/is/g);
// console.log(b);
//var a="kevaldalsaniya";
// substring and slice will be same 
// var b=a.substring(2,4); 
// var c=a.slice(2,4);
// var d=a.substr(2,4);
// console.log(c);
// console.log(d);
// console.log(b);
// var a=Number("34");
// var b=Number("25");
// console.log(a+b);
// var a=Number(false);
// console.log(a);
//var a="10 keval 10";
// var a="10.33";
// var b=parseInt(a);
// console.log(b);
// var a=parseFloat("10.25");
// console.log(a);
// var a=isFinite(Infinity);
// console.log(a);
// var a=50.50-0.50;
// var b=Number.isInteger(a);
// console.log(b);
// var a=34.33545;
// var b=a.toFixed(2);
// console.log(b);
// var a=345.3643;
// var b=a.toPrecision(4);
// console.log(b);
//var a=Math.ceil(34.25);
//var a=Math.floor(34.45);
//var a=Math.round(34.48);
// var a=Math.trunc(-34.70);
// console.log(a);
// var a=Math.min(34,23,43,200);
// console.log(a);
//var a=Math.cbrt(27);
// var a=Math.pow(3,4);
// console.log(a);
// var a=Math.PI;
// console.log(a);
// var a=Math.floor(Math.random()*10)+1;
// console.log(a);
// var a=Math.abs();
// console.log(a);
//var date=new Date();
 //document.write(date.toDateString());
// document.write(date.toLocaleDateString());
 //document.write(date.toLocaleString());
 //document.write(date.toLocaleTimeString());
 //date.setFullYear(2045);
 //document.write(date.toLocaleString());
 //document.write(date.getMilliseconds());