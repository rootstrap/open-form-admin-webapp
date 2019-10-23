import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { useSession } from 'hooks';

import { fetchFormCategories } from 'actions/formActions';
import { getFormCategories } from 'selectors/formSelectors';
import LogoutButton from 'components/user/LogoutButton';

const HomePage = () => {
  const { user } = useSession();
  const formCategories = useSelector(getFormCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFormCategories());
  }, []);

  return (
    <div>
      {user && user.email && (
        <p>
          <FormattedMessage id="home.welcome" values={user} />
        </p>
      )}
      <ul>
        {formCategories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      <LogoutButton />
    </div>
  );
};

export default HomePage;
