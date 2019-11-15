import { RESET_ERROR_MESSAGE } from 'actions';

// Updates error message to notify about the failed fetches.expo
export default function errorMessage(state = null, { type, error }) {
  return type === RESET_ERROR_MESSAGE ? null : error || state;
}
