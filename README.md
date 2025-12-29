# JavaScript Fundamentals Exercises

A collection of JavaScript exercises covering fundamental concepts with Jest tests.

## Topics Covered

1. **Array Methods** - Practice with map, filter, reduce, forEach, find, some, every, etc.
2. **Promises & Async/Await** - Working with promises, async functions, and error handling
3. **Classes & This Keyword** - Object-oriented programming, class syntax, and `this` binding
4. **Generator Functions & Yield** - Creating and using generator functions

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run all tests:
```bash
npm test
```

3. Run tests in watch mode:
```bash
npm run test:watch
```

## Structure

Each topic has its own directory under `exercises/`:
- `exercises/array-methods/` - Array method exercises
- `exercises/promises-async/` - Promise and async/await exercises
- `exercises/classes-this/` - Class and `this` keyword exercises
- `exercises/generators/` - Generator function exercises

Each directory contains:
- `problems.js` - Functions to implement (with TODO comments)
- `problems.test.js` - Jest tests for the problems

## How to Practice

1. Open `problems.js` for a topic
2. Implement the functions marked with `// TODO:`
3. Run the tests to verify your implementation:
   ```bash
   npm test exercises/array-methods/problems.test.js
   ```
4. Repeat until all tests pass!

## Running Specific Tests

Run tests for a specific topic:
```bash
npm test exercises/array-methods
npm test exercises/promises-async
npm test exercises/classes-this
npm test exercises/generators
```

