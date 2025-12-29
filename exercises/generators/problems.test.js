const {
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
} = require('./problems');

describe('Generator Functions & Yield Exercises', () => {
  describe('numberGenerator', () => {
    test('should generate numbers from 1 to n', () => {
      const gen = numberGenerator(5);
      expect([...gen]).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle n=1', () => {
      const gen = numberGenerator(1);
      expect([...gen]).toEqual([1]);
    });

    test('should handle n=0', () => {
      const gen = numberGenerator(0);
      expect([...gen]).toEqual([]);
    });
  });

  describe('fibonacciGenerator', () => {
    test('should generate fibonacci sequence', () => {
      const gen = fibonacciGenerator();
      const first10 = Array.from({ length: 10 }, () => gen.next().value);
      expect(first10).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    test('should generate indefinitely', () => {
      const gen = fibonacciGenerator();
      const first20 = Array.from({ length: 20 }, () => gen.next().value);
      expect(first20.length).toBe(20);
      expect(first20[19]).toBeGreaterThan(1000);
    });
  });

  describe('rangeGenerator', () => {
    test('should generate range with default step', () => {
      const gen = rangeGenerator(1, 5);
      expect([...gen]).toEqual([1, 2, 3, 4, 5]);
    });

    test('should generate range with custom step', () => {
      const gen = rangeGenerator(0, 10, 2);
      expect([...gen]).toEqual([0, 2, 4, 6, 8, 10]);
    });

    test('should handle negative step', () => {
      const gen = rangeGenerator(5, 1, -1);
      expect([...gen]).toEqual([5, 4, 3, 2, 1]);
    });

    test('should handle single value', () => {
      const gen = rangeGenerator(5, 5);
      expect([...gen]).toEqual([5]);
    });
  });

  describe('take', () => {
    test('should take first n values', () => {
      const source = numberGenerator(10);
      const gen = take(source, 5);
      expect([...gen]).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle n larger than generator', () => {
      const source = numberGenerator(3);
      const gen = take(source, 10);
      expect([...gen]).toEqual([1, 2, 3]);
    });

    test('should handle n=0', () => {
      const source = numberGenerator(5);
      const gen = take(source, 0);
      expect([...gen]).toEqual([]);
    });
  });

  describe('filter', () => {
    test('should filter even numbers', () => {
      const source = numberGenerator(10);
      const gen = filter(source, n => n % 2 === 0);
      expect([...gen]).toEqual([2, 4, 6, 8, 10]);
    });

    test('should filter with custom predicate', () => {
      const source = numberGenerator(10);
      const gen = filter(source, n => n > 5);
      expect([...gen]).toEqual([6, 7, 8, 9, 10]);
    });
  });

  describe('map', () => {
    test('should map values', () => {
      const source = numberGenerator(5);
      const gen = map(source, n => n * 2);
      expect([...gen]).toEqual([2, 4, 6, 8, 10]);
    });

    test('should map to strings', () => {
      const source = numberGenerator(3);
      const gen = map(source, n => `num${n}`);
      expect([...gen]).toEqual(['num1', 'num2', 'num3']);
    });
  });

  describe('repeat', () => {
    test('should repeat value n times', () => {
      const gen = repeat('hello', 3);
      expect([...gen]).toEqual(['hello', 'hello', 'hello']);
    });

    test('should handle n=0', () => {
      const gen = repeat('test', 0);
      expect([...gen]).toEqual([]);
    });

    test('should handle n=1', () => {
      const gen = repeat(42, 1);
      expect([...gen]).toEqual([42]);
    });
  });

  describe('cycle', () => {
    test('should cycle through array', () => {
      const gen = cycle([1, 2, 3]);
      const first10 = Array.from({ length: 10 }, () => gen.next().value);
      expect(first10).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3, 1]);
    });

    test('should handle single element', () => {
      const gen = cycle(['a']);
      const first5 = Array.from({ length: 5 }, () => gen.next().value);
      expect(first5).toEqual(['a', 'a', 'a', 'a', 'a']);
    });

    test('should cycle indefinitely', () => {
      const gen = cycle([1, 2]);
      const first100 = Array.from({ length: 100 }, () => gen.next().value);
      expect(first100.length).toBe(100);
      expect(first100[0]).toBe(1);
      expect(first100[99]).toBe(2);
    });
  });

  describe('zip', () => {
    test('should zip two generators', () => {
      const gen1 = numberGenerator(3);
      const gen2 = rangeGenerator(10, 12);
      const gen = zip(gen1, gen2);
      expect([...gen]).toEqual([[1, 10], [2, 11], [3, 12]]);
    });

    test('should stop when first generator ends', () => {
      const gen1 = numberGenerator(2);
      const gen2 = numberGenerator(10);
      const gen = zip(gen1, gen2);
      expect([...gen]).toEqual([[1, 1], [2, 2]]);
    });

    test('should stop when second generator ends', () => {
      const gen1 = numberGenerator(10);
      const gen2 = numberGenerator(2);
      const gen = zip(gen1, gen2);
      expect([...gen]).toEqual([[1, 1], [2, 2]]);
    });
  });

  describe('flatten', () => {
    test('should flatten nested generators', () => {
      function* gen1() { yield 1; yield 2; }
      function* gen2() { yield 3; yield 4; }
      function* gen3() { yield 5; }
      function* source() {
        yield gen1();
        yield gen2();
        yield gen3();
      }
      const gen = flatten(source());
      expect([...gen]).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle empty generators', () => {
      function* empty() {}
      function* gen1() { yield 1; yield 2; }
      function* source() {
        yield empty();
        yield gen1();
      }
      const gen = flatten(source());
      expect([...gen]).toEqual([1, 2]);
    });
  });
});

