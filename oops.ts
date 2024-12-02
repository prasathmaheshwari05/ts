class person{
    //data member
    pid:number=101;
    pname:string="prasath";
    paddress:string="chennai";

    //memeber function
    persondetails(){
        console.log(`id:${this.pid} name:${this.pname} address:${this.paddress}`);
    }
}
//create object of class
let personObj =new person();
console.log(personObj.pname);
personObj.persondetails();