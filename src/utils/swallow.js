const swallow = (fail, fn) => async (...args) => {
  try {
    return await fn(...args);
  } catch (error) {
    return fail(error, ...args);
  }
};

export default swallow;
