// CODE here for your Lambda Classes

class Person {
  constructor(name, location, age, gender) {
      this.name = name;
      this.location = location;
      this.age = age;
      this.gender = gender;
  }
  speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}
class Instructor extends Person {
  constructor(name, location, age, gender, favLanguage, speciality, catchPhrase) {
      super(name, location, age, gender);
      this.speciality = speciality;
      this.favLanguage = favLanguage;
      this.catchPhrase = catchPhrase;
  }

  demo(subject) {
      return `Today we are learning about ${subject}`
  }

  grade(studentObj, subject) {
      return `${studentObj.name} receives a perfect score on ${subject}`
  }
}

class Student extends Person {
  constructor(name, location, age, gender, previousBackground, className, favSubjects, grade) {
      super(name, location, age, gender);
      this.previousBackground = previousBackground;
      this.className = className;
      this.favSubjects = favSubjects;
      this.grade = 100;
  }

  randomMethod() {
      let res = this.grade - Math.floor((Math.random() * Math.floor(Math.random() * 100)));
      return `${res}`;
  }

  graduateMethod(randomMethod) {
      let str = "";
      if (randomMethod >= 70) {
          str = "success, you will graduate";
      } else {
          str = "You have to try again";
      }
      return str;
  }

  listsSubjects(favSubjects) {
      for (let i = 0; i < favSubjects.length; i++) {
          console.log(favSubjects[i]);
      }
  }

  PRAssignments(subject) {
      return `${this.name} has submitted a PR for ${subject}`
  }

  sprintChallenge() {
      return `${this.name} has begun sprint challenge on ${this.subject}`
  }
}

class ProjectManager extends Instructor {
  constructor(name, age, location, gender, speciality, favLanguage, catchPhrase, gradeClassName, favInstructor) {
      super(name, age, location, gender, speciality, favLanguage, catchPhrase);
      this.gradeClassName = gradeClassName;
      this.favInstructor = favInstructor;

  }

  standUp(channel) {
      return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
  }

  debugsCode(stdObject, subject) {
      return `${stdObject.name} debugs ${this.name}'s code on ${subject}`

  }
}





const person = new Person("Carlos", "NewJersey", 989, "M")
console.log(person.speak());

const instructor = new Instructor("Patric", "South Carolina", 989, "M", "JavaScript", "Front-end", "Don't forget the homies");
console.log(instructor.speak());
console.log(instructor.demo("Math"));
console.log(instructor.grade(new Student("Charles", "NY", 100, "M", "JavaScript", "Front-end"), "Don't forget the homies"));

let favSbubjectArray = ["Music", "Recess", "Art", "Lunch", "AfterSchool"];
const student = new Student("Jasmine", "Kentucky", 989, "F", "JavaScript", "Back-end", favSbubjectArray);
student.listsSubjects(favSbubjectArray);
console.log(student.PRAssignments("AfterSchool"));
console.log(student.sprintChallenge());
console.log(student.speak());

let projectManager = new ProjectManager("Dr.Seuss", 200, "Venus", "M", "CSS",
    "There's a wocket in my pocket", "html language", "HMM!");
console.log(projectManager.demo("html language"));
console.log(projectManager.grade(new Student("Eagle", "tree", 600, "M", "python", "AfterSchool", favSbubjectArray), "AfterSchool"));
console.log(projectManager.standUp("webpt6"));
console.log(projectManager.debugsCode(new Student("Brian", "Rusia", 1200, "M", "python", "AfterSchool", favSbubjectArray), "AfterSchool"));

console.log("Stretched\n", "Stretches");

let std2 = new Student("Peper", "Tomatos", 300, "M", "Art", "Drawing Bunnies");
res = std2.randomMethod();
console.log("Your current automatic grade is " + res);
console.log(std2.graduateMethod(res));