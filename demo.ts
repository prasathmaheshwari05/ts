console.log("hello all welcome to typescript");
//string datatype
let myname:string;
myname="prasath";
let lastname:string;
lastname="sundararajan";
console.log(`firstname:${myname} lastname:${lastname}`);


//number datatype

let n1:number=100,n2:number=200;
console.log(n1,n2);

//boolean datatype
 let cond1:boolean=true,cond2:boolean=false;
 console.log(cond1,cond2);

 //array
 let course:string[]=["html","css","js"];
 let course1:Array<string>=["html","css","js"];
 console.log(course);
 let pincode:number[]=[123423,536];
 let pincode1:Array<number>=[123423,536];
 console.log(pincode);
 //tuple:it allow us to store multiple type of data into array
 let product:[number,string,boolean]=[100,"mango",true];
 console.log(product);
 //enum:it create varaiable with constant values
 enum days{sun,mon,tue,wed,thur,fri,sat};
 let data1=days.sun;
 //7 union datatype: it allow us to store multiple values in single variable
 let  info:number|string|boolean=true;
 //8.any:when we donnot what type of data  is going  to store in varaiable in tha case we use it
 let mix:any="hello";