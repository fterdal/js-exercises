const {
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
} = require('./problems');

describe('Classes & This Keyword Exercises', () => {
  describe('Person', () => {
    xtest('should create a person with name and age', () => {
      const person = new Person('Alice', 25);
      expect(person.getName()).toBe('Alice');
      expect(person.getAge()).toBe(25);
    });

    xtest('should introduce correctly', () => {
      const person = new Person('Bob', 30);
      expect(person.introduce()).toBe("Hi, I'm Bob and I'm 30 years old");
    });
  });

  describe('Counter', () => {
    xtest('should initialize with 0', () => {
      const counter = new Counter();
      expect(counter.getValue()).toBe(0);
    });

    xtest('should initialize with custom value', () => {
      const counter = new Counter(5);
      expect(counter.getValue()).toBe(5);
    });

    xtest('should increment', () => {
      const counter = new Counter();
      counter.increment();
      expect(counter.getValue()).toBe(1);
    });

    xtest('should decrement', () => {
      const counter = new Counter(5);
      counter.decrement();
      expect(counter.getValue()).toBe(4);
    });

    xtest('should reset to initial value', () => {
      const counter = new Counter(10);
      counter.increment();
      counter.increment();
      counter.reset();
      expect(counter.getValue()).toBe(10);
    });
  });

  describe('Calculator', () => {
    xtest('should support method chaining', () => {
      const calc = new Calculator(10);
      const result = calc.add(5).subtract(3).multiply(2).getValue();
      expect(result).toBe(24);
    });

    xtest('should perform calculations correctly', () => {
      const calc = new Calculator();
      calc.add(10).multiply(2).divide(4);
      expect(calc.getValue()).toBe(5);
    });
  });

  describe('BankAccount', () => {
    xtest('should create account with initial balance', () => {
      const account = new BankAccount('123', 100);
      expect(account.getBalance()).toBe(100);
      expect(account.getAccountNumber()).toBe('123');
    });

    xtest('should deposit money', () => {
      const account = new BankAccount('123', 100);
      account.deposit(50);
      expect(account.getBalance()).toBe(150);
    });

    xtest('should withdraw money', () => {
      const account = new BankAccount('123', 100);
      account.withdraw(30);
      expect(account.getBalance()).toBe(70);
    });

    xtest('should not allow negative balance', () => {
      const account = new BankAccount('123', 100);
      account.withdraw(150);
      expect(account.getBalance()).toBe(100);
    });
  });

  describe('bindMethod', () => {
    xtest('should bind method to preserve this', () => {
      const obj = {
        name: 'Test',
        getName() {
          return this.name;
        },
      };
      const boundGetName = bindMethod(obj, 'getName');
      const extracted = boundGetName;
      expect(extracted()).toBe('Test');
    });
  });

  describe('Timer', () => {
    jest.useFakeTimers();

    xtest('should call callback after delay', () => {
      const callback = jest.fn();
      const timer = new Timer(callback, 1000);
      timer.start();
      expect(callback).not.toHaveBeenCalled();
      jest.advanceTimersByTime(1000);
      expect(callback).toHaveBeenCalledTimes(1);
    });

    xtest('should cancel timer when stopped', () => {
      const callback = jest.fn();
      const timer = new Timer(callback, 1000);
      timer.start();
      timer.stop();
      jest.advanceTimersByTime(1000);
      expect(callback).not.toHaveBeenCalled();
    });

    afterEach(() => {
      jest.clearAllTimers();
    });
  });

  describe('Student', () => {
    xtest('should extend Person', () => {
      const student = new Student('Alice', 20, 'S123');
      expect(student).toBeInstanceOf(Person);
      expect(student.getName()).toBe('Alice');
      expect(student.getAge()).toBe(20);
    });

    xtest('should have student ID', () => {
      const student = new Student('Bob', 22, 'S456');
      expect(student.getStudentId()).toBe('S456');
    });

    xtest('should override introduce method', () => {
      const student = new Student('Charlie', 21, 'S789');
      expect(student.introduce()).toBe("Hi, I'm Charlie, I'm 21 years old, and my student ID is S789");
    });
  });

  describe('Rectangle', () => {
    xtest('should calculate area', () => {
      const rect = new Rectangle(5, 10);
      expect(rect.getArea()).toBe(50);
    });

    xtest('should calculate perimeter', () => {
      const rect = new Rectangle(5, 10);
      expect(rect.getPerimeter()).toBe(30);
    });

    xtest('should have static createSquare method', () => {
      const square = Rectangle.createSquare(5);
      expect(square).toBeInstanceOf(Rectangle);
      expect(square.getArea()).toBe(25);
      expect(square.getPerimeter()).toBe(20);
    });
  });

  describe('DelayedLogger', () => {
    jest.useFakeTimers();

    xtest('should log value after delay', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      const logger = new DelayedLogger('test value');
      logger.logAfterDelay();
      jest.advanceTimersByTime(100);
      expect(consoleSpy).toHaveBeenCalledWith('test value');
      consoleSpy.mockRestore();
    });

    afterEach(() => {
      jest.clearAllTimers();
    });
  });

  describe('ShoppingCart', () => {
    xtest('should add items', () => {
      const cart = new ShoppingCart();
      cart.addItem('apple', 1.5);
      cart.addItem('banana', 0.5);
      expect(cart.getItemCount()).toBe(2);
    });

    xtest('should calculate total', () => {
      const cart = new ShoppingCart();
      cart.addItem('apple', 1.5);
      cart.addItem('banana', 0.5);
      cart.addItem('orange', 2.0);
      expect(cart.getTotal()).toBe(4.0);
    });

    xtest('should remove items', () => {
      const cart = new ShoppingCart();
      cart.addItem('apple', 1.5);
      cart.addItem('banana', 0.5);
      cart.removeItem('apple');
      expect(cart.getItemCount()).toBe(1);
      expect(cart.getTotal()).toBe(0.5);
    });

    xtest('should clear all items', () => {
      const cart = new ShoppingCart();
      cart.addItem('apple', 1.5);
      cart.addItem('banana', 0.5);
      cart.clear();
      expect(cart.getItemCount()).toBe(0);
      expect(cart.getTotal()).toBe(0);
    });
  });
});


