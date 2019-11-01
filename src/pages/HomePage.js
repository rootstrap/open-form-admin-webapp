import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { useSession } from 'hooks';

import LogoutButton from 'components/user/LogoutButton';

const Wrapper = styled.div`
  margin: 1.5em 3em;
`;

const HomePage = () => {
  const { user } = useSession();

  return (
    <Wrapper>
      {user && user.email && (
        <p>
          <FormattedMessage id="home.welcome" values={user} />
        </p>
      )}
      <LogoutButton />
    </Wrapper>
  );
};

export default HomePage;
