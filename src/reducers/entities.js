import produce from 'immer';
import merge from 'lodash/merge';

const entities = produce(
  (draft, action) => {
    if (action.response && action.response.entities) {
      merge(draft, action.response.entities);
    }
  },
  { formCategories: {}, forms: {} }
);

export default entities;
