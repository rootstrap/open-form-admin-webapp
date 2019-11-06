import { useDispatch } from 'react-redux';

export default action => {
  const dispatch = useDispatch();
  return payload => dispatch(action(payload));
};
