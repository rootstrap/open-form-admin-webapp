import merge from 'lodash/merge';

export default function entities(state = { formCategories: {}, forms: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }
  return state;
}
