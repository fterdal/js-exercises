/**
 * ARRAY METHODS EXERCISES
 * 
 * Complete the following functions. Each function should use array methods
 * (map, filter, reduce, forEach, find, some, every, etc.) to solve the problem.
 */

/**
 * Exercise 1: Double all numbers in an array
 * 
 * @param {number[]} numbers - Array of numbers
 * @returns {number[]} - Array with each number doubled
 */
function doubleNumbers(numbers) {
  // TODO: Implement using map
}

/**
 * Exercise 2: Filter out all even numbers
 * 
 * @param {number[]} numbers - Array of numbers
 * @returns {number[]} - Array containing only odd numbers
 */
function filterOddNumbers(numbers) {
  // TODO: Implement using filter
}

/**
 * Exercise 3: Calculate the sum of all numbers
 * 
 * @param {number[]} numbers - Array of numbers
 * @returns {number} - Sum of all numbers
 */
function sumNumbers(numbers) {
  // TODO: Implement using reduce
}

/**
 * Exercise 4: Get all names of people older than 18
 * 
 * @param {Object[]} people - Array of person objects with {name: string, age: number}
 * @returns {string[]} - Array of names of people older than 18
 */
function getAdultNames(people) {
  // TODO: Implement using filter and map
}

/**
 * Exercise 5: Check if all numbers are positive
 * 
 * @param {number[]} numbers - Array of numbers
 * @returns {boolean} - True if all numbers are positive, false otherwise
 */
function allPositive(numbers) {
  // TODO: Implement using every
}

/**
 * Exercise 6: Find the first person with age greater than 30
 * 
 * @param {Object[]} people - Array of person objects with {name: string, age: number}
 * @returns {Object|null} - First person with age > 30, or null if none found
 */
function findPersonOver30(people) {
  // TODO: Implement using find
}

/**
 * Exercise 7: Transform array of strings to array of objects
 * 
 * @param {string[]} words - Array of words
 * @returns {Object[]} - Array of objects with {word: string, length: number}
 */
function wordsToObjects(words) {
  // TODO: Implement using map
}

/**
 * Exercise 8: Calculate average age
 * 
 * @param {Object[]} people - Array of person objects with {name: string, age: number}
 * @returns {number} - Average age (rounded to 2 decimal places)
 */
function averageAge(people) {
  // TODO: Implement using reduce
}

/**
 * Exercise 9: Group people by age range
 * 
 * @param {Object[]} people - Array of person objects with {name: string, age: number}
 * @returns {Object} - Object with keys 'young' (age < 30), 'middle' (30-50), 'old' (age > 50)
 */
function groupByAgeRange(people) {
  // TODO: Implement using reduce
}

/**
 * Exercise 10: Flatten nested arrays
 * 
 * @param {Array[]} arrays - Array of arrays
 * @returns {Array} - Single flattened array
 */
function flattenArrays(arrays) {
  // TODO: Implement using reduce and concat (or flatMap)
}

module.exports = {
  doubleNumbers,
  filterOddNumbers,
  sumNumbers,
  getAdultNames,
  allPositive,
  findPersonOver30,
  wordsToObjects,
  averageAge,
  groupByAgeRange,
  flattenArrays,
};

