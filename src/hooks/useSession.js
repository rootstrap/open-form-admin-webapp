import { useSelector } from 'react-redux';

const useSession = () =>
  useSelector(({ session }) => ({
    authenticated: session.authenticated,
    user: session.user
  }));

export default useSession;
