const {
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
} = require('./problems');

describe('Array Methods Exercises', () => {
  describe('doubleNumbers', () => {
    test('should double all numbers in the array', () => {
      expect(doubleNumbers([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
    });

    test('should handle empty array', () => {
      expect(doubleNumbers([])).toEqual([]);
    });

    test('should handle negative numbers', () => {
      expect(doubleNumbers([-1, -2, 3])).toEqual([-2, -4, 6]);
    });
  });

  describe('filterOddNumbers', () => {
    test('should filter out even numbers', () => {
      expect(filterOddNumbers([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
    });

    test('should handle empty array', () => {
      expect(filterOddNumbers([])).toEqual([]);
    });

    test('should return empty array if all numbers are even', () => {
      expect(filterOddNumbers([2, 4, 6, 8])).toEqual([]);
    });
  });

  describe('sumNumbers', () => {
    test('should calculate sum of all numbers', () => {
      expect(sumNumbers([1, 2, 3, 4, 5])).toBe(15);
    });

    test('should return 0 for empty array', () => {
      expect(sumNumbers([])).toBe(0);
    });

    test('should handle negative numbers', () => {
      expect(sumNumbers([-5, 10, -3])).toBe(2);
    });
  });

  describe('getAdultNames', () => {
    test('should return names of people older than 18', () => {
      const people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 17 },
        { name: 'Charlie', age: 30 },
        { name: 'Diana', age: 18 },
      ];
      expect(getAdultNames(people)).toEqual(['Alice', 'Charlie']);
    });

    test('should return empty array if no adults', () => {
      const people = [
        { name: 'Alice', age: 17 },
        { name: 'Bob', age: 16 },
      ];
      expect(getAdultNames(people)).toEqual([]);
    });
  });

  describe('allPositive', () => {
    test('should return true if all numbers are positive', () => {
      expect(allPositive([1, 2, 3, 4])).toBe(true);
    });

    test('should return false if any number is negative', () => {
      expect(allPositive([1, -2, 3])).toBe(false);
    });

    test('should return false if any number is zero', () => {
      expect(allPositive([1, 0, 3])).toBe(false);
    });

    test('should return true for empty array', () => {
      expect(allPositive([])).toBe(true);
    });
  });

  describe('findPersonOver30', () => {
    test('should find first person over 30', () => {
      const people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 },
        { name: 'Charlie', age: 40 },
      ];
      expect(findPersonOver30(people)).toEqual({ name: 'Bob', age: 35 });
    });

    test('should return null if no person over 30', () => {
      const people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 20 },
      ];
      expect(findPersonOver30(people)).toBeNull();
    });
  });

  describe('wordsToObjects', () => {
    test('should transform words to objects', () => {
      expect(wordsToObjects(['hello', 'world', 'test'])).toEqual([
        { word: 'hello', length: 5 },
        { word: 'world', length: 5 },
        { word: 'test', length: 4 },
      ]);
    });

    test('should handle empty array', () => {
      expect(wordsToObjects([])).toEqual([]);
    });
  });

  describe('averageAge', () => {
    test('should calculate average age', () => {
      const people = [
        { name: 'Alice', age: 20 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 40 },
      ];
      expect(averageAge(people)).toBe(30);
    });

    test('should round to 2 decimal places', () => {
      const people = [
        { name: 'Alice', age: 20 },
        { name: 'Bob', age: 30 },
      ];
      expect(averageAge(people)).toBe(25);
    });
  });

  describe('groupByAgeRange', () => {
    test('should group people by age range', () => {
      const people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 },
        { name: 'Charlie', age: 55 },
        { name: 'Diana', age: 20 },
      ];
      const result = groupByAgeRange(people);
      expect(result.young).toHaveLength(2);
      expect(result.middle).toHaveLength(1);
      expect(result.old).toHaveLength(1);
      expect(result.young.map(p => p.name)).toContain('Alice');
      expect(result.young.map(p => p.name)).toContain('Diana');
    });

    test('should handle empty arrays in groups', () => {
      const people = [
        { name: 'Alice', age: 25 },
      ];
      const result = groupByAgeRange(people);
      expect(result.young).toHaveLength(1);
      expect(result.middle).toHaveLength(0);
      expect(result.old).toHaveLength(0);
    });
  });

  describe('flattenArrays', () => {
    test('should flatten nested arrays', () => {
      expect(flattenArrays([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle empty arrays', () => {
      expect(flattenArrays([[], [1, 2], []])).toEqual([1, 2]);
    });

    test('should handle single level arrays', () => {
      expect(flattenArrays([[1], [2], [3]])).toEqual([1, 2, 3]);
    });
  });
});

