//this classın kendisini
//super classın bir üst classı
// her class kendini object ile extend eder

class Person{

    // firstName = "Selim";

    // write(){
    //     console.log(this.firstName);
    // }

    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo(){
        console.log(this.firstName,this.lastName,this.salary);
    }
}

class Student extends Person{

    // write(){
    //     super.write();// bir üst sınıfa erişmel için kullanılır
    // }

    constructor(firstName, lastName, salary){
        super(firstName, lastName, salary);
    }

    write(){
        super.writeInfo();
    }
}

class Engineer extends Person{

    constructor(firstName, lastName, salary){
        super(firstName, lastName, salary);
    }

    write(){
        super.writeInfo();
    }
}
const student1 = new Student("Ali","YILMAZ",124122);
student1.write();

const engineer1 = new Engineer("Selim", "ALKAN", 41245);
engineer1.write();