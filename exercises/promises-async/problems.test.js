const {
  delay,
  doubleAfterDelay,
  handlePromise,
  waitForAll,
  waitForFirst,
  fetchUser,
  fetchUserPosts,
  fetchUserWithPosts,
  fetchUserWithPostsParallel,
  retry,
} = require('./problems');

describe('Promises & Async/Await Exercises', () => {
  jest.setTimeout(10000); // Increase timeout for async tests

  describe('delay', () => {
    test('should resolve after specified delay', async () => {
      const start = Date.now();
      await delay(100, 'test');
      const elapsed = Date.now() - start;
      expect(elapsed).toBeGreaterThanOrEqual(90);
      expect(elapsed).toBeLessThan(150);
    });

    test('should resolve with correct value', async () => {
      const result = await delay(10, 42);
      expect(result).toBe(42);
    });
  });

  describe('doubleAfterDelay', () => {
    test('should double value after delay', async () => {
      const result = await doubleAfterDelay(5, 10);
      expect(result).toBe(10);
    });

    test('should handle negative numbers', async () => {
      const result = await doubleAfterDelay(-3, 10);
      expect(result).toBe(-6);
    });
  });

  describe('handlePromise', () => {
    test('should handle successful promise', async () => {
      const result = await handlePromise(Promise.resolve('success'));
      expect(result).toEqual({ success: true, data: 'success' });
    });

    test('should handle rejected promise', async () => {
      const error = new Error('test error');
      const result = await handlePromise(Promise.reject(error));
      expect(result).toEqual({ success: false, error });
    });
  });

  describe('waitForAll', () => {
    test('should wait for all promises to resolve', async () => {
      const promises = [
        delay(10, 1),
        delay(20, 2),
        delay(30, 3),
      ];
      const results = await waitForAll(promises);
      expect(results).toEqual([1, 2, 3]);
    });

    test('should reject if any promise rejects', async () => {
      const promises = [
        delay(10, 1),
        Promise.reject(new Error('failed')),
        delay(20, 3),
      ];
      await expect(waitForAll(promises)).rejects.toThrow('failed');
    });
  });

  describe('waitForFirst', () => {
    test('should return first resolved promise', async () => {
      const promises = [
        delay(30, 'slow'),
        delay(10, 'fast'),
        delay(20, 'medium'),
      ];
      const result = await waitForFirst(promises);
      expect(result).toBe('fast');
    });

    test('should reject if first promise rejects', async () => {
      const promises = [
        Promise.reject(new Error('first')),
        delay(10, 'second'),
      ];
      await expect(waitForFirst(promises)).rejects.toThrow('first');
    });
  });

  describe('fetchUser', () => {
    test('should fetch user data', async () => {
      const user = await fetchUser(1);
      expect(user).toEqual({
        id: 1,
        name: expect.any(String),
        email: expect.any(String),
      });
    });

    test('should simulate delay', async () => {
      const start = Date.now();
      await fetchUser(1);
      const elapsed = Date.now() - start;
      expect(elapsed).toBeGreaterThanOrEqual(90);
    });
  });

  describe('fetchUserPosts', () => {
    test('should fetch user posts', async () => {
      const posts = await fetchUserPosts(1);
      expect(Array.isArray(posts)).toBe(true);
      expect(posts.length).toBeGreaterThan(0);
    });
  });

  describe('fetchUserWithPosts', () => {
    test('should fetch user then posts sequentially', async () => {
      const result = await fetchUserWithPosts(1);
      expect(result).toHaveProperty('user');
      expect(result).toHaveProperty('posts');
      expect(result.user).toHaveProperty('id');
      expect(Array.isArray(result.posts)).toBe(true);
    });

    test('should use user.id to fetch posts', async () => {
      const result = await fetchUserWithPosts(5);
      expect(result.user.id).toBe(5);
    });
  });

  describe('fetchUserWithPostsParallel', () => {
    test('should fetch user and posts in parallel', async () => {
      const start = Date.now();
      const result = await fetchUserWithPostsParallel(1);
      const elapsed = Date.now() - start;
      
      expect(result).toHaveProperty('user');
      expect(result).toHaveProperty('posts');
      // Should be faster than sequential (less than ~200ms if each takes ~100ms)
      expect(elapsed).toBeLessThan(250);
    });
  });

  describe('retry', () => {
    test('should succeed on first try', async () => {
      let attempts = 0;
      const fn = async () => {
        attempts++;
        return 'success';
      };
      const result = await retry(fn, 3);
      expect(result).toBe('success');
      expect(attempts).toBe(1);
    });

    test('should retry on failure', async () => {
      let attempts = 0;
      const fn = async () => {
        attempts++;
        if (attempts < 3) {
          throw new Error('failed');
        }
        return 'success';
      };
      const result = await retry(fn, 3);
      expect(result).toBe('success');
      expect(attempts).toBe(3);
    });

    test('should reject after max retries', async () => {
      const fn = async () => {
        throw new Error('always fails');
      };
      await expect(retry(fn, 2)).rejects.toThrow('always fails');
    });
  });
});

