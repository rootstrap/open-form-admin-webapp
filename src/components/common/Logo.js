import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  margin: 3em;
`;

const Logo = () => (
  <Svg width="51" height="21" viewBox="0 0 51 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M47.111 0L30.483 15.9948C27.8207 9.20742 20.5304 5.18777 13.0963 6.40841C5.66223 7.62905 0.170853 13.7474 0 21H5.50501C5.69649 15.8218 10.021 11.669 15.4045 11.4937C20.788 11.3183 25.3946 15.1802 25.9498 20.3341L25.8961 20.3964C25.9831 20.6279 25.9998 20.8219 26.0053 21H32.9745L51 3.70002L47.111 0Z"
      fill="#161631"
    />
  </Svg>
);

export default Logo;
