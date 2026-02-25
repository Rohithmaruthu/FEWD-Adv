class student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    introduce() {
        console.log(`Hi I'm ${this.name} and I study ${this.course}`)
    }

    celebrateBirthday() {
        this.age++;
        console.log(`Happy Birthday to me! I'm now ${this.age} years old.`)
    }
}

let student1 = new student("Rohith", 18, "AI&DS");
let student2 = new student("Alex", 20, "ML");



student1.introduce();
student1.celebrateBirthday();
student2.introduce();