import { normalize, schema } from 'normalizr';
import api from 'api';

// TODO complete when we have pagination
const getNextPageUrl = () => {};

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = async (endpoint, schema, data) => {
  const response = await (!data ? api.get(endpoint) : api.post(endpoint, data));
  return {
    ...normalize(Object.values(response.data)[0], schema),
    nextPageUrl: getNextPageUrl(response)
  };
};

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where formsCategory and forms are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/paularmstrong/normalizr

const formCategorySchema = new schema.Entity('formCategories');
const formSchema = new schema.Entity('forms');
const sectionSchema = new schema.Entity('sections');

// Schemas for API responses.
export const Schemas = {
  FORM_CATEGORY_ARRAY: [formCategorySchema],
  FORM: formSchema,
  FORM_ARRAY: [formSchema],
  SECTION_ARRAY: [sectionSchema],
  SECTION: sectionSchema
};

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'Call API';

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;
  const { schema, types, data } = callAPI;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }
  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  const actionWith = data => {
    const finalAction = { ...action, ...data };
    delete finalAction[CALL_API];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType, refetch: callAPI.refetch }));

  return callApi(endpoint, schema, data).then(
    response =>
      next(
        actionWith({
          response,
          type: successType
        })
      ),
    error =>
      next(
        actionWith({
          type: failureType,
          error: error.message || 'Something bad happened'
        })
      )
  );
};
