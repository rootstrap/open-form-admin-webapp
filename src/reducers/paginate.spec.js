import paginate from './paginate';

const paginateReducer = paginate({
  mapActionToKey: action => action.key,
  types: ['REQUEST', 'SUCCESS', 'FAILURE']
});

describe('invalid array', () => {
  try {
    paginate({
      types: ['REQUEST', 'SUCCESS']
    });
  } catch (e) {
    test('throws error', () => {
      expect(e.message).toBe('Expected types to be an array of three elements.');
    });
  }
});

describe('invalid array items', () => {
  try {
    paginate({
      types: ['REQUEST', 'SUCCESS', 3]
    });
  } catch (e) {
    test('throws error', () => {
      expect(e.message).toBe('Expected types to be strings.');
    });
  }
});

describe('unmatched action', () => {
  const nextState = paginateReducer(undefined, { type: 'nomatch', key: 'action.key' });

  test('returns initialized state', () => {
    expect(Object.keys(nextState).length).toBe(0);
  });
});

describe('on failure', () => {
  const nextState = paginateReducer(undefined, { type: 'FAILURE', key: 'action.key' });

  test('cancels fetching', () => {
    expect(nextState['action.key'].isFetching).toBe(false);
  });
});

describe('completes pagination flow', () => {
  const nextState = paginateReducer(undefined, { type: 'REQUEST', key: 'action.key' });

  test('initial state with request', () => {
    expect(nextState).toStrictEqual({
      'action.key': {
        isFetching: true,
        nextPageUrl: undefined,
        pageCount: 0,
        ids: []
      }
    });
  });

  const nextStateWithData = paginateReducer(nextState, {
    type: 'SUCCESS',
    response: { result: [1, 3] },
    key: 'action.key'
  });

  test('added result to state', () => {
    expect(nextStateWithData).toStrictEqual({
      'action.key': {
        isFetching: false,
        nextPageUrl: undefined,
        pageCount: 1,
        ids: [1, 3]
      }
    });
  });
});

describe('refetch data', () => {
  const nextState = paginateReducer(
    {
      'action.key': {
        isFetching: false,
        nextPageUrl: undefined,
        pageCount: 1,
        ids: [1, 3]
      }
    },
    { type: 'REQUEST', refetch: true, key: 'action.key' }
  );

  test('refetching', () => {
    expect(nextState).toStrictEqual({
      'action.key': { isFetching: true, nextPageUrl: undefined, pageCount: 0, ids: [1, 3] }
    });
  });

  const nextStateRefeched = paginateReducer(nextState, {
    type: 'SUCCESS',
    response: { result: [5, 9] },
    key: 'action.key'
  });

  test('receives new data', () => {
    expect(nextStateRefeched).toStrictEqual({
      'action.key': {
        isFetching: false,
        nextPageUrl: undefined,
        pageCount: 1,
        ids: [5, 9]
      }
    });
  });
});
