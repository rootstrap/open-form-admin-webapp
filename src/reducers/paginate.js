// Creates a reducer managing pagination, given the action types to handle,
// and a function telling how to extract the key from an action.
export default function paginate({ types, mapActionToKey }) {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.');
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.');
  }
  if (typeof mapActionToKey !== 'function') {
    throw new Error('Expected mapActionToKey to be a function.');
  }

  const [requestType, successType, failureType] = types;

  const updatePagination = (
    state = {
      isFetching: false,
      nextPageUrl: undefined,
      pageCount: 0,
      ids: []
    },
    action
  ) => {
    switch (action.type) {
      case requestType:
        return {
          ...state,
          pageCount: action.refetch ? state.pageCount - 1 : state.pageCount,
          isFetching: true
        };
      case successType:
        return {
          ...state,
          isFetching: false,
          // I was using lodash union before but I removed it because won't update
          // the list when removing an item, but when pagination is working
          // I must review this because I want to add the ids from the next page
          // ids: union(state.ids, action.response.result),
          ids: action.response.result,
          nextPageUrl: action.response.nextPageUrl,
          pageCount: state.pageCount + 1
        };
      case failureType:
        return {
          ...state,
          isFetching: false
        };
      default:
        return state;
    }
  };

  return (state = {}, action) => {
    // Update pagination by key
    switch (action.type) {
      case requestType:
      case successType:
      case failureType: {
        const key = mapActionToKey(action);
        if (typeof key !== 'string' && typeof key !== 'number') {
          throw new Error('Expected key to be a string or number.');
        }
        return {
          ...state,
          [key]: updatePagination(state[key], action)
        };
      }
      default:
        return state;
    }
  };
}
