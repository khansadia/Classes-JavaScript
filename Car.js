export class Car {
    constructor(owner, make, model) {
      this.owner = owner;
      this.make = make;
      this.model = model;
    }
  
    startEngine() {
      console.log(`Vroom, vroooooom! Engine started on the ${this.model}`);
    }
  
    displayOwner() {
      // I know here that the owner is of the class Person and therefor it has a name field variable.
      console.log(this.owner.name);
    }
  }