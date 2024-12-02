class person{
    //data member
    pid:number=101;
    pname:string="prasath";
    paddress:string="chennai";
    constructor(id:number,name:string,addr:string){

        this.pid=id;
        this.pname=name;
        this.paddress=addr;
        

    }

    //memeber function
    persondetails(){
        console.log(`id:${this.pid} name:${this.pname} address:${this.paddress}`);
    }
}
//create object of class
let personObj =new person(102,"madhav","chennai");
console.log(personObj.pname);
personObj.persondetails();