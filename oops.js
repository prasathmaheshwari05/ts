var person = /** @class */ (function () {
    function person() {
        //data member
        this.pid = 101;
        this.pname = "prasath";
        this.paddress = "chennai";
    }
    //memeber function
    person.prototype.persondetails = function () {
        console.log("id:".concat(this.pid, " name:").concat(this.pname, " address:").concat(this.paddress));
    };
    return person;
}());
//create object of class
var personObj = new person();
console.log(personObj.pname);
personObj.persondetails();
