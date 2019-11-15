import entitiesReducer from './entities';

const initialState = {
  formCategories: {
    '1': {
      name: 'Payments',
      version: 1,
      id: 1,
      updatedAt: '2019-10-24T19:16:03.860Z',
      createdAt: '2019-10-24T19:16:03.860Z'
    },
    '2': {
      name: 'Payments',
      version: 1,
      id: 2,
      updatedAt: '2019-10-24T19:16:14.144Z',
      createdAt: '2019-10-24T19:16:14.144Z'
    }
  },
  forms: {
    '5': {
      name: 'qwe',
      version: 1,
      id: 5,
      updatedAt: '2019-10-31T16:08:04.017Z',
      createdAt: '2019-10-31T16:08:04.017Z',
      formCategoryId: 1
    },
    '6': {
      name: 'qwe',
      version: 1,
      id: 6,
      updatedAt: '2019-11-01T14:47:15.296Z',
      createdAt: '2019-11-01T14:47:15.296Z',
      formCategoryId: 2
    }
  }
};

describe('Recieving new entities', () => {
  const nextState = entitiesReducer(initialState, {
    response: {
      entities: {
        forms: {
          '20': {
            name: 'eqwe',
            version: 1,
            id: 20,
            updatedAt: '2019-11-08T17:41:32.527Z',
            createdAt: '2019-11-08T17:41:32.527Z',
            formCategoryId: 1
          }
        }
      }
    }
  });

  test('added new form', () => {
    expect(nextState.forms['20']).toStrictEqual({
      name: 'eqwe',
      version: 1,
      id: 20,
      updatedAt: '2019-11-08T17:41:32.527Z',
      createdAt: '2019-11-08T17:41:32.527Z',
      formCategoryId: 1
    });
  });
});

describe('Recieving new entities', () => {
  const nextState = entitiesReducer(initialState, {
    response: {
      entities: {
        formCategories: {
          '5': {
            name: 'Basic',
            version: 1,
            id: 5,
            updatedAt: '2019-10-24T19:16:38.710Z',
            createdAt: '2019-10-24T19:16:38.710Z'
          },
          '6': {
            name: 'Routing',
            version: 1,
            id: 6,
            updatedAt: '2019-11-08T17:12:21.027Z',
            createdAt: '2019-11-08T17:12:21.027Z'
          }
        }
      }
    }
  });

  test('added new form categories', () => {
    expect(nextState.formCategories['5']).toStrictEqual({
      name: 'Basic',
      version: 1,
      id: 5,
      updatedAt: '2019-10-24T19:16:38.710Z',
      createdAt: '2019-10-24T19:16:38.710Z'
    });
    expect(nextState.formCategories['6']).toStrictEqual({
      name: 'Routing',
      version: 1,
      id: 6,
      updatedAt: '2019-11-08T17:12:21.027Z',
      createdAt: '2019-11-08T17:12:21.027Z'
    });
  });
});

describe('ignores response without entities', () => {
  const nextState = entitiesReducer(initialState, {
    response: {}
  });

  test('initial and next state are the same', () => {
    expect(nextState).toBe(initialState);
  });
});
