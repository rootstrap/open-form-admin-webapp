import { resetErrorMessage } from 'actions';
import errorMessageReducer from './errorMessage';

describe('reset state', () => {
  const nextState = errorMessageReducer('error found', resetErrorMessage());

  test('state is null', () => {
    expect(nextState).toBe(null);
  });
});

describe('adds error', () => {
  const nextState = errorMessageReducer(undefined, { type: 'action', error: 'error found' });

  test('error exist', () => {
    expect(nextState).toBe('error found');
  });
});

describe('receives action without error', () => {
  const nextState = errorMessageReducer('error found', {});

  test('error stays the same', () => {
    expect(nextState).toBe('error found');
  });
});
