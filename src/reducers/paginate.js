// Creates a reducer managing pagination, given the action types to handle,
// and a function telling how to extract the key from an action.
const paginate = ({ types, mapActionToKey = () => {} }) => {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.');
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.');
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
        return key
          ? { ...state, [key]: updatePagination(state[key], action) }
          : updatePagination({ ...state, pageCount: state.pageCount || 0 }, action);
      }
      default:
        return state;
    }
  };
};

export default paginate;
