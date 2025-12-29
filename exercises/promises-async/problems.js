/**
 * PROMISES & ASYNC/AWAIT EXERCISES
 * 
 * Complete the following functions. Use promises and async/await appropriately.
 */

/**
 * Exercise 1: Create a promise that resolves after a delay
 * 
 * @param {number} ms - Milliseconds to wait
 * @param {*} value - Value to resolve with
 * @returns {Promise} - Promise that resolves with value after ms milliseconds
 */
function delay(ms, value) {
  // TODO: Return a promise that resolves after ms with value
}

/**
 * Exercise 2: Chain promises to double a value after delay
 * 
 * @param {number} value - Initial value
 * @param {number} ms - Milliseconds to wait
 * @returns {Promise<number>} - Promise that resolves with doubled value after delay
 */
function doubleAfterDelay(value, ms) {
  // TODO: Use delay() to wait, then double the value
}

/**
 * Exercise 3: Handle promise rejection
 * 
 * @param {Promise} promise - A promise that might reject
 * @returns {Promise} - Promise that resolves with {success: true, data} or {success: false, error}
 */
function handlePromise(promise) {
  // TODO: Catch errors and return success/error object
}

/**
 * Exercise 4: Wait for multiple promises (Promise.all)
 * 
 * @param {Promise[]} promises - Array of promises
 * @returns {Promise<Array>} - Promise that resolves with array of all results
 */
function waitForAll(promises) {
  // TODO: Wait for all promises to resolve
}

/**
 * Exercise 5: Wait for first promise to resolve (Promise.race)
 * 
 * @param {Promise[]} promises - Array of promises
 * @returns {Promise} - Promise that resolves with first resolved value
 */
function waitForFirst(promises) {
  // TODO: Return first promise that resolves
}

/**
 * Exercise 6: Async function that fetches user data
 * 
 * Simulates fetching user data. Use async/await.
 * 
 * @param {number} userId - User ID
 * @returns {Promise<Object>} - Promise that resolves with {id: number, name: string, email: string}
 */
async function fetchUser(userId) {
  // TODO: Use delay() to simulate API call, then return user object
}

/**
 * Exercise 7: Async function that fetches user posts
 * 
 * @param {number} userId - User ID
 * @returns {Promise<Array>} - Promise that resolves with array of post objects
 */
async function fetchUserPosts(userId) {
  // TODO: Use delay() to simulate API call, return array of posts
}

/**
 * Exercise 8: Fetch user and their posts sequentially
 * 
 * @param {number} userId - User ID
 * @returns {Promise<Object>} - Promise that resolves with {user: Object, posts: Array}
 */
async function fetchUserWithPosts(userId) {
  // TODO: Fetch user first, then fetch posts using user.id
}

/**
 * Exercise 9: Fetch user and posts in parallel
 * 
 * @param {number} userId - User ID
 * @returns {Promise<Object>} - Promise that resolves with {user: Object, posts: Array}
 */
async function fetchUserWithPostsParallel(userId) {
  // TODO: Fetch user and posts at the same time
}

/**
 * Exercise 10: Retry a promise-returning function on failure
 * 
 * @param {Function} fn - Function that returns a promise
 * @param {number} maxRetries - Maximum number of retries
 * @returns {Promise} - Promise that resolves with result or rejects after max retries
 */
async function retry(fn, maxRetries = 3) {
  // TODO: Retry fn up to maxRetries times if it rejects
}

module.exports = {
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
};


