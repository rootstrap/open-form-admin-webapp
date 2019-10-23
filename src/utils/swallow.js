const swallow = (fail, fn) => (...args) => {
  try {
    return fn(...args);
  } catch (error) {
    return fail(error, ...args);
  }
};

export default swallow;
