/**
 * CLASSES & THIS KEYWORD EXERCISES
 * 
 * Complete the following classes and functions. Pay attention to how `this` works.
 */

/**
 * Exercise 1: Create a Person class
 * 
 * Create a class with:
 * - constructor(name, age)
 * - getName() method that returns the name
 * - getAge() method that returns the age
 * - introduce() method that returns "Hi, I'm {name} and I'm {age} years old"
 */
class Person {
  // TODO: Implement Person class
}

/**
 * Exercise 2: Create a Counter class
 * 
 * Create a class with:
 * - constructor(initialValue = 0)
 * - increment() method that increases value by 1
 * - decrement() method that decreases value by 1
 * - getValue() method that returns current value
 * - reset() method that resets value to initialValue
 */
class Counter {
  // TODO: Implement Counter class
}

/**
 * Exercise 3: Create a Calculator class
 * 
 * Create a class with:
 * - constructor(initialValue = 0)
 * - add(value) method
 * - subtract(value) method
 * - multiply(value) method
 * - divide(value) method
 * - getValue() method
 * - All methods should support method chaining (return this)
 */
class Calculator {
  // TODO: Implement Calculator class with method chaining
}

/**
 * Exercise 4: Create a BankAccount class
 * 
 * Create a class with:
 * - constructor(accountNumber, initialBalance = 0)
 * - deposit(amount) method
 * - withdraw(amount) method (should not allow negative balance)
 * - getBalance() method
 * - getAccountNumber() method
 */
class BankAccount {
  // TODO: Implement BankAccount class
}

/**
 * Exercise 5: Fix the this binding issue
 * 
 * The function below loses its `this` context when passed as a callback.
 * Return a bound version that preserves `this`.
 * 
 * @param {Object} obj - Object with a method
 * @param {string} methodName - Name of the method to bind
 * @returns {Function} - Bound function
 */
function bindMethod(obj, methodName) {
  // TODO: Return a bound version of obj[methodName]
}

/**
 * Exercise 6: Create a Timer class
 * 
 * Create a class with:
 * - constructor(callback, delay)
 * - start() method that calls callback after delay
 * - stop() method that cancels the timer
 * - Use setTimeout and clearTimeout
 */
class Timer {
  // TODO: Implement Timer class
}

/**
 * Exercise 7: Create a Student class that extends Person
 * 
 * Create a class that extends Person with:
 * - constructor(name, age, studentId)
 * - getStudentId() method
 * - introduce() method that overrides parent and returns "Hi, I'm {name}, I'm {age} years old, and my student ID is {studentId}"
 */
class Student extends Person {
  // TODO: Implement Student class extending Person
}

/**
 * Exercise 8: Create a Rectangle class
 * 
 * Create a class with:
 * - constructor(width, height)
 * - getArea() method
 * - getPerimeter() method
 * - static method createSquare(side) that returns a new Rectangle with equal width and height
 */
class Rectangle {
  // TODO: Implement Rectangle class with static method
}

/**
 * Exercise 9: Fix arrow function this issue
 * 
 * The class below has a method that uses setTimeout. The callback loses `this`.
 * Fix it to properly access this.value.
 */
class DelayedLogger {
  constructor(value) {
    this.value = value;
  }

  logAfterDelay() {
    setTimeout(function() {
      // TODO: Fix this to log this.value correctly
      console.log(this.value);
    }, 100);
  }
}

/**
 * Exercise 10: Create a ShoppingCart class
 * 
 * Create a class with:
 * - constructor()
 * - addItem(item, price) method
 * - removeItem(item) method
 * - getTotal() method that returns sum of all item prices
 * - getItemCount() method that returns number of items
 * - clear() method that removes all items
 */
class ShoppingCart {
  // TODO: Implement ShoppingCart class
}

module.exports = {
  Person,
  Counter,
  Calculator,
  BankAccount,
  bindMethod,
  Timer,
  Student,
  Rectangle,
  DelayedLogger,
  ShoppingCart,
};

