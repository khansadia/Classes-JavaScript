# Classes-JavaScript# JavaScript Classes

<details>
<summary>Table of content</summary>

- [What is a class](#what-is-a-class)

  - [Create a class](#create-a-class)
  - [Constructor](#constructor)
  - [Field Variables](#field-variables)
  - [Methods](#methods)
  - [Create an instance of a class](#create-an-instance-of-a-class)

  </details>

## What is a class

**Definition:**

A class is a blueprint for creating objects with shared characteristics and behaviors. It serves as a template that defines the structure and functionality of objects that will be instantiated from it.

**Purpose:**

Classes enable a more organized and modular approach to programming by encapsulating data _(properties)_ and behaviors _(methods)_ related to a specific entity.

### Create a class

Creating a class is very simple in JavaScript. We use keyword: `class`, name and codeblock.

```js
class Animal {
  // properties and method go inside the code block.
}
```

The naming convention for classes is something that is called `PascalCase`. It means that you start with a captial letter and every consecutive word also starts with a captial letter.

Other naming conventions are as follows:

- `PascalCase`: Used for classes and components (React, Vue)..
- `camelCase`: Used for variables, functions among others...
- `kebab-case`: Used for css classes..
- `snake_case`: Sometimes used for data base columns...

### Constructor

**Definition:**

The constructor is a special method within a class that is automatically called when an instance of a class is created. It initializes the object's properties.

**Purpose:**

The constructor ensures that object instances are properly set up with initial values when they are created.

We create a constructor with the `constructor` key word. It takes arguments that are used to initialize the object's properties.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

### Field variables _(properties, data members, instance variables)_

**Definition:**

Field variables are the data members of a class. They represent the chracteristics of the objects that are created from the class

**Purpose:**
Field variables store the information about the state of the object.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Inside the constructor the field variables are created.
}
```

In other languages, take Java for example, it might look something liks this:

```java
public Class Person {
  // Field variables in Java
  String name:
  int age:

  //constructor
  public Person(String name, int age){
    this.name = name;
    this.age = age;
  }
}
```

As we can see here, we don't have any type definitions in JavaScript and that can be a good thing but also a very bad thing, but it is what it is. TypeScript can solve this issue in the future. But overall the syntax is similar and the functionality is the same.

### Methods

**Definition:**

Methods are functions defined within a class. They represent behaviors or actions that objects created from the class can perform.

**Purpose:**

Methods ecapsulate functionality related to the class and can manipulate the object's state _(field variabels)_.

```js
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} says Woof!`);
  }
}
```

### Create an instance of a class

**Definition:**

Creating an instance of a class means making an object using the class as template. This involves calling the class constructor with the `new` keyword.

**Purpose:**

Instance represent specific objects with unique data, allowing you to work with multiple entities based on the same class.

```js
class Fruit {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

const apple = new Fruit("Apple", "Red");
const greenApple = new Fruit("Apple", "Green");

console.log(apple.name); // Apple
console.log(greenApple.color); // Green
```

### Using classes in the code

Using classes in code is very simple, it looks the same as the example above. But it's good practise to keep classes in their own files, just to make you code more modular.

```js
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    console.log(`Vroom, vroooooom! Engine started on the ${this.model}`);
  }
}

const toyota = new Car("Toyota", "Camry");
const audi = new Car("Audi", "A5");

toyota.startEngine();
audi.startEngine();
```

When seperating your code in different js-filesm remember to also add the in script tags inside you body-tag, and make sure them are added in the correct order that they will be used in. If some file needs code from another file, that file must be added before the other file.

## Using modules on JS files

The above way is an easy way the include multiple js files inside your HTML document but it will quickly become messy of you have a lot of different js files. The solve this we can convert our js files into modules. It's very easy to do, just one line of code really.

```html
<!-- This is a normal script tag as we are used to -->
<script src="index.js"></script>
```

To turn it into a module it looks like this:

```html
<script src="index.js" type="module"></script>
```

By using script tags like this we can handle the addition of more js files inside the js files themself with `import` and `export`!

Usually, at the top of your files, you have a set of import statements that import code from external _or internal_ sources.

```js
import someData from "someSource";

// Rest of the code in the file.
```

But before we can import something, something needs to be exported as well. It's a zero-sum-game.

```js
// Export classes
export class car {
  // class code
}

// Export functions
export function doSomething() {
  // function code
}

// Export variables
export const someVariable = "someValue";
```