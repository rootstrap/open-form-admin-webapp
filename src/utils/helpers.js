import queryString from 'query-string';

export const parseInputErrors = error => {
  if (!error) {
    return;
  }
  if (Array.isArray(error)) {
    return error[0];
  }
  return error;
};

export const applyQueryParams = (url, params = {}) => {
  if (!Object.keys(params).length) {
    return url;
  }
  const queryParams = queryString.stringify(params);
  return `${url}?${queryParams}`;
};
