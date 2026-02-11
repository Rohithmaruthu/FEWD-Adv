class student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    introduce() {
        console.log(`Hi I'm ${this.name} and I study ${this.course}`)
    }
}

let student1 = new student("Rohith", 18, "AI&DS");

student1.introduce();