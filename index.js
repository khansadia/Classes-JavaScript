import { Person } from "./Person.js";
import { Car } from "./Car.js"; // Must be same name as the class itself, named export.
import animalDog from "./Dog.js"; // Can be renamed because the file default exports the class.

const niklas = new Person("Niklas");
const toyota = new Car(niklas, "Toyota", "Camry");

toyota.startEngine();
toyota.displayOwner();
