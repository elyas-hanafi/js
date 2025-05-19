/**
 * 1. Memoization
 *    Wraps a pure function fn so that repeated calls with the same args return cached results.
 */
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Example:
// const fib = memoize(n => n < 2 ? n : fib(n - 1) + fib(n - 2));

/**
 * 2. Throttle
 *    Ensures fn is called at most once every `limit` milliseconds.
 *    Useful for rate‑limiting scroll or resize handlers.
 */
function throttle(fn, limit) {
  let lastCall = 0;
  let timer = null;
  return function (...args) {
    const now = Date.now();
    const remaining = limit - (now - lastCall);

    clearTimeout(timer);
    if (remaining <= 0) {
      lastCall = now;
      fn.apply(this, args);
    } else {
      timer = setTimeout(() => {
        lastCall = Date.now();
        fn.apply(this, args);
      }, remaining);
    }
  };
}

// Example:
// window.addEventListener('resize', throttle(onResize, 200));

/**
 * 3. Debounce
 *    Delays calling fn until `wait` ms have passed since the last invocation.
 *    Great for autocomplete/search‑as‑you‑type.
 */
function debounce(fn, wait) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Example:
// inputEl.addEventListener('input', debounce(onInput, 300));

/**
 * 4. Curry
 *    Converts a function of N arguments into N chained unary functions.
 */
function curry(fn, arity = fn.length) {
  return function curried(...args) {
    if (args.length >= arity) {
      return fn.apply(this, args);
    }
    return (...more) => curried.apply(this, args.concat(more));
  };
}

// Example:
// const add3 = (a, b, c) => a + b + c;
// const curriedAdd3 = curry(add3);
// curriedAdd3(1)(2)(3); // 6

/**
 * 5. Once
 *    Ensures fn is only ever invoked one time — subsequent calls return the first result.
 */
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

// Example:
// const init = once(() => { console.log('Initialized'); return true; });
// init(); // logs “Initialized”
// init(); // no‑op, returns the same true
