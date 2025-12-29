/**
 * GENERATOR FUNCTIONS & YIELD EXERCISES
 *
 * Complete the following generator functions. Use yield appropriately.
 */

/**
 * Exercise 1: Create a simple number generator
 *
 * Create a generator that yields numbers from 1 to n
 *
 * @param {number} n - Maximum number to generate
 * @yields {number} - Numbers from 1 to n
 */
function* numberGenerator(n) {
  // TODO: Yield numbers from 1 to n
}

/**
 * Exercise 2: Create a fibonacci generator
 *
 * Create a generator that yields fibonacci numbers indefinitely
 *
 * @yields {number} - Next fibonacci number
 */
function* fibonacciGenerator() {
  // TODO: Yield fibonacci sequence indefinitely
}

/**
 * Exercise 3: Create a range generator
 *
 * Create a generator that yields numbers from start to end (inclusive)
 *
 * @param {number} start - Starting number
 * @param {number} end - Ending number
 * @param {number} step - Step size (default 1)
 * @yields {number} - Numbers in the range
 */
function* rangeGenerator(start, end, step = 1) {
  // TODO: Yield numbers from start to end with step
}

/**
 * Exercise 4: Create a take generator
 *
 * Create a generator that takes first n values from another generator
 *
 * @param {Generator} generator - Source generator
 * @param {number} n - Number of values to take
 * @yields {*} - First n values from generator
 */
function* take(generator, n) {
  // TODO: Yield first n values from generator
}

/**
 * Exercise 5: Create a filter generator
 *
 * Create a generator that filters values from another generator using a predicate
 *
 * @param {Generator} generator - Source generator
 * @param {Function} predicate - Function that returns true/false
 * @yields {*} - Values that pass the predicate
 */
function* filter(generator, predicate) {
  // TODO: Yield values that pass predicate
}

/**
 * Exercise 6: Create a map generator
 *
 * Create a generator that maps values from another generator using a function
 *
 * @param {Generator} generator - Source generator
 * @param {Function} mapper - Function to transform values
 * @yields {*} - Transformed values
 */
function* map(generator, mapper) {
  // TODO: Yield mapped values
}

/**
 * Exercise 7: Create a repeat generator
 *
 * Create a generator that repeats a value n times
 *
 * @param {*} value - Value to repeat
 * @param {number} n - Number of times to repeat
 * @yields {*} - The value repeated n times
 */
function* repeat(value, n) {
  // TODO: Yield value n times
}

/**
 * Exercise 8: Create a cycle generator
 *
 * Create a generator that cycles through an array indefinitely
 *
 * @param {Array} array - Array to cycle through
 * @yields {*} - Values from array in cycle
 */
function* cycle(array) {
  // TODO: Yield values from array in infinite cycle
}

/**
 * Exercise 9: Create a zip generator
 *
 * Create a generator that zips two generators together
 *
 * @param {Generator} gen1 - First generator
 * @param {Generator} gen2 - Second generator
 * @yields {Array} - [value1, value2] pairs
 */
function* zip(gen1, gen2) {
  // TODO: Yield pairs from both generators
}

/**
 * Exercise 10: Create a flatten generator
 *
 * Create a generator that flattens nested generators (one level deep)
 *
 * @param {Generator} generator - Generator that yields generators
 * @yields {*} - Values from nested generators
 */
function* flatten(generator) {
  // TODO: Flatten nested generators
}

module.exports = {
  numberGenerator,
  fibonacciGenerator,
  rangeGenerator,
  take,
  filter,
  map,
  repeat,
  cycle,
  zip,
  flatten,
};
