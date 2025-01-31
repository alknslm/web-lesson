//! INHERITANCE (KALITIM-MİRAS)

class Person{
    firstName = "Enes";

    write(){
        console.log(this.firstName);
    }
}

class Student extends Person{
    surName = "Alkan";

    write(){
        console.log(`İsim : ${this.firstName} Soyisim : ${this.surName}`);
        super.write();
    }
}

const student = new Student();
student.write();