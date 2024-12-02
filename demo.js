console.log("hello all welcome to typescript");
//string datatype
var myname;
myname = "prasath";
var lastname;
lastname = "sundararajan";
console.log("firstname:".concat(myname, " lastname:").concat(lastname));
//number datatype
var n1 = 100, n2 = 200;
console.log(n1, n2);
//boolean datatype
var cond1 = true, cond2 = false;
console.log(cond1, cond2);
//array
var course = ["html", "css", "js"];
var course1 = ["html", "css", "js"];
console.log(course);
var pincode = [123423, 536];
var pincode1 = [123423, 536];
console.log(pincode);
//tuple:it allow us to store multiple type of data into array
var product = [100, "mango", true];
console.log(product);
//enum:it create varaiable with constant values
var days;
(function (days) {
    days[days["sun"] = 0] = "sun";
    days[days["mon"] = 1] = "mon";
    days[days["tue"] = 2] = "tue";
    days[days["wed"] = 3] = "wed";
    days[days["thur"] = 4] = "thur";
    days[days["fri"] = 5] = "fri";
    days[days["sat"] = 6] = "sat";
})(days || (days = {}));
;
var data1 = days.sun;
//7 union datatype: it allow us to store multiple values in single variable
var info = true;
//8.any:when we donnot what type of data  is going  to store in varaiable in tha case we use it
var mix = "hello";
